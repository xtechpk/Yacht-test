import { useState } from "react";
import Categories from "./pages/categories/Categories";
import Labels from "./pages/labels/Labels";
import Products from "./pages/products/Products";
import PurchaseRequest from "./pages/purchase-request/PurchaseRequest";
import Stores from "./pages/stores/Stores";

function NieuStock() {
  const [activeCard, setActiveCard] = useState<string>("Products");

  // Function to handle card click
  const handleCardClick = (cardName: string) => {  // Explicitly typing the parameter
    setActiveCard(cardName); // Update active card
  };

  return (
    <>
      <div className="container-fluid min-vh-100">
        <h3 className="mb-4 text-black">NIEUPROCURE</h3>
        <div className="container-fluid text-center mt-4">
          <div className="row g-xxl-4 mb-4 gap-20 p-1">
            {/* Card Section */}
            <div
              className={`col ${activeCard === "Products" ? "bg-primary text-white" : "bg-light"} text-start p-8 rounded shadow-sm `}
              onClick={() => handleCardClick("Products")}
              style={{ cursor: "pointer" }}
            >
              Products
            </div>
            <div
              className={`col ${activeCard === "Categories" ? "bg-primary text-white" : "bg-light"} text-start p-8 rounded shadow-sm`}
              onClick={() => handleCardClick("Categories")}
              style={{ cursor: "pointer" }}
            >
              Categories
            </div>
            <div
              className={`col ${activeCard === "Stores" ? "bg-primary text-white" : "bg-light"} text-start p-8 rounded shadow-sm`}
              onClick={() => handleCardClick("Stores")}
              style={{ cursor: "pointer" }}
            >
              Stores
            </div>
            <div
              className={`col ${activeCard === "Purchase Requests" ? "bg-primary text-white" : "bg-light"} text-start p-8 rounded shadow-sm`}
              onClick={() => handleCardClick("Purchase Requests")}
              style={{ cursor: "pointer" }}
            >
              Purchase Requests
            </div>
            <div
              className={`col ${activeCard === "Labels" ? "bg-primary text-white" : "bg-light"} text-start p-8 rounded shadow-sm`}
              onClick={() => handleCardClick("Labels")}
              style={{ cursor: "pointer" }}
            >
              Labels
            </div>
          </div>

          {/* Display the selected component below the cards */}
          <div className="mt-4">
            {activeCard === "Products" && <Products />}
            {activeCard === "Categories" && <Categories />}
            {activeCard === "Stores" && <Stores />}
            {activeCard === "Purchase Requests" && <PurchaseRequest />}
            {activeCard === "Labels" && <Labels />}
          </div>
        </div>
      </div>
    </>
  );
}

export default function App() {
  return (
    <NieuStock />
  );
}
