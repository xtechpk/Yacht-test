import { useState, useEffect } from "react";
import Label from "./cards/label/Label";
import BottLevel from "./cards/bott-level/BottLevel";
import BoxInventoryLabel from "./cards/box-inventory-label/BoxInventoryLabel";
import BoxLabel from "./cards/box-label/BoxLabel";
import LockerIndiviualLevel from "./cards/locker-indiviual-level/LockerIndiviualLevel";
import LockerProductList from "./cards/locker-product-list/LockerProductList";

// Define the type for summary data
interface SummaryData {
  totalLabels: number;
  mostUsedLabels: number;
  recentlyAddedLabels: number;
  labelsByCategory: number;
}

function LabCards() {
  const [activeCard, setActiveCard] = useState<string>("Label");
  const [summaryData, setSummaryData] = useState<SummaryData | null>(null); // The type is either SummaryData or null initially
  const [loading, setLoading] = useState<boolean>(true);

  // Function to handle card click
  const handleCardClick = (cardName: string) => {
    setActiveCard(cardName);
  };

  // Fetch summary data from the API
  useEffect(() => {
    const fetchSummaryData = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/summary");
        if (!response.ok) {
          throw new Error("Failed to fetch summary data");
        }
        const data: SummaryData = await response.json();
        setSummaryData(data);
        setLoading(false);
      } catch (error: unknown) {
        // Simply log the error, no need to set state for it.
        if (error instanceof Error) {
          console.error("Error fetching summary data:", error.message);
        } else {
          console.error("An unknown error occurred");
        }
        setLoading(false);
      }
    };

    fetchSummaryData();
  }, []);

  return (
    <>
      <div className="container-fluid min-vh-100 mt-4 z-1 rounded shadow">
        {/* Summary Cards Section */}
        <div className="container text-center my-4">
          <div className="row g-2 g-lg-3">
            <div className="col">
              <div className="bg-light text-start p-4 rounded shadow-sm">
                Total Labels <br />
                <strong>{loading ? "Loading..." : summaryData?.totalLabels}10</strong>
              </div>
            </div>
            <div className="col">
              <div className="bg-light text-start p-4 rounded shadow-sm">
                Most Used Labels <br />
                <strong>{loading ? "Loading..." : summaryData?.mostUsedLabels}10</strong>
              </div>
            </div>
            <div className="col">
              <div className="bg-light text-start p-4 rounded shadow-sm">
                Recently Added Labels <br />
                <strong>{loading ? "Loading..." : summaryData?.recentlyAddedLabels}10</strong>
              </div>
            </div>
            <div className="col">
              <div className="bg-light text-start p-4 rounded shadow-sm">
                Labels By Category <br />
                <strong>{loading ? "Loading..." : summaryData?.labelsByCategory}10</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar and Main Content Section */}
        <div className="d-flex">
          {/* Sidebar for card navigation */}
          <div className="sidebar p-3 " style={{ width: "250px" }}>
            <div className="card-section">
              <div
                className={`p-4 rounded mb-3 ${activeCard === "Label" ? "bg-primary text-white" : "bg-light"}`}
                onClick={() => handleCardClick("Label")}
                style={{ cursor: "pointer" }}
              >
                Label
              </div>
              <div
                className={`p-4 rounded mb-3 ${activeCard === "BoxLabel" ? "bg-primary text-white" : "bg-light"}`}
                onClick={() => handleCardClick("BoxLabel")}
                style={{ cursor: "pointer" }}
              >
                Box Label
              </div>
              <div
                className={`p-4 rounded mb-3 ${activeCard === "BoxInventoryLabel" ? "bg-primary text-white" : "bg-light"}`}
                onClick={() => handleCardClick("BoxInventoryLabel")}
                style={{ cursor: "pointer" }}
              >
                Box Inventory Label
              </div>
              <div
                className={`p-4 rounded mb-3 ${activeCard === "BottLevel" ? "bg-primary text-white" : "bg-light"}`}
                onClick={() => handleCardClick("BottLevel")}
                style={{ cursor: "pointer" }}
              >
                Bott Level
              </div>
              <div
                className={`p-4 rounded mb-3 ${activeCard === "LockerIndiviualLevel" ? "bg-primary text-white" : "bg-light"}`}
                onClick={() => handleCardClick("LockerIndiviualLevel")}
                style={{ cursor: "pointer" }}
              >
                Locker Individual Level
              </div>
              <div
                className={`p-4 rounded mb-3 ${activeCard === "LockerProductList" ? "bg-primary text-white" : "bg-light"}`}
                onClick={() => handleCardClick("LockerProductList")}
                style={{ cursor: "pointer" }}
              >
                Locker Product List
              </div>
            </div>
          </div>

          {/* Main content area to display selected component */}
          <div className="main-content flex-grow-1 p-4 bg-white">
            {activeCard === "Label" && <Label />}
            {activeCard === "BoxLabel" && <BoxLabel />}
            {activeCard === "BoxInventoryLabel" && <BoxInventoryLabel />}
            {activeCard === "BottLevel" && <BottLevel />}
            {activeCard === "LockerIndiviualLevel" && <LockerIndiviualLevel />}
            {activeCard === "LockerProductList" && <LockerProductList />}
          </div>
        </div>
      </div>
    </>
  );
}

export default function App() {
  return <LabCards />;
}
