import { useState, useEffect } from "react";
import axios from "axios";
import DamageAndDefects from "./damage-and-defects/DamageAndDefects";
import ForwardPlanning from "./forward-planning/ForwardPlanning";
import LsaFfe from "./lsa & ffe​/LsaFfe";
import PlanedMaintenance from "./Planned-maintenance/PlanedMaintenance";

function NieuMatrix() {
  const [activeCard, setActiveCard] = useState<string>("");
  const [counts, setCounts] = useState({
    damageAndDefects: 0,
    plannedMaintenance: 0,
    forwardPlanning: 0,
    lsaFfe: 0,
  });

  // Fetch counts from an API when the component loads
  useEffect(() => {
    async function fetchCounts() {
      try {
        // Replace with your API endpoint for fetching counts
        const response = await axios.get("https://api.example.com/nieumatrix-counts");
        const data = response.data;
        
        // Update counts based on API response
        setCounts({
          damageAndDefects: data.damageAndDefects,
          plannedMaintenance: data.plannedMaintenance,
          forwardPlanning: data.forwardPlanning,
          lsaFfe: data.lsaFfe,
        });
      } catch (error) {
        console.error("Error fetching counts:", error);
      }
    }

    fetchCounts();
  }, []);

  const handleCardClick = (cardName: string) => {
    setActiveCard(cardName);
  };

  return (
    <>
      <div className="container-fluid min-vh-100">
        <h3 className="mb-4 text-black ubuntu fw-bold text-3xl">NIEUMATRIX</h3>
        <div className="container mt-4 z-1 rounded shadow min-vh-100">
          <div className="row g-2 g-lg-3 m-9">
            <div
              className="col"
              onClick={() => handleCardClick("Damage and Defects")}
              style={{ cursor: "pointer" }}
            >
              <div
                className={`text-start p-8 inter text-sm rounded shadow-sm ${
                  activeCard === "Damage and Defects"
                    ? "bg-primary text-white"
                    : "bg-light"
                }`}
              >
                Damage and Defects <br />
                <strong>{counts.damageAndDefects}</strong>
              </div>
            </div>
            <div
              className="col"
              onClick={() => handleCardClick("Planned Maintenance")}
              style={{ cursor: "pointer" }}
            >
              <div
                className={`text-start p-8 rounded inter text-sm shadow-sm ${
                  activeCard === "Planned Maintenance"
                    ? "bg-primary text-white"
                    : "bg-light"
                }`}
              >
                Planned Maintenance <br />
                <strong>{counts.plannedMaintenance}</strong>
              </div>
            </div>
            <div
              className="col"
              onClick={() => handleCardClick("Forward Planning")}
              style={{ cursor: "pointer" }}
            >
              <div
                className={`text-start p-8 rounded inter text-sm shadow-sm ${
                  activeCard === "Forward Planning"
                    ? "bg-primary text-white"
                    : "bg-light"
                }`}
              >
                Forward Planning <br />
                <strong>{counts.forwardPlanning}</strong>
              </div>
            </div>
            <div
              className="col"
              onClick={() => handleCardClick("LSA & FFE")}
              style={{ cursor: "pointer" }}
            >
              <div
                className={`text-start p-8 rounded inter text-sm shadow-sm ${
                  activeCard === "LSA & FFE"
                    ? "bg-primary text-white"
                    : "bg-light"
                }`}
              >
                LSA & FFE <br />
                <strong>{counts.lsaFfe}</strong>
              </div>
            </div>
          </div>

          {/* Display the selected component below the cards */}
          <div className="mt-4">
            {activeCard === "Damage and Defects" && <DamageAndDefects />}
            {activeCard === "Planned Maintenance" && <PlanedMaintenance />}
            {activeCard === "Forward Planning" && <ForwardPlanning />}
            {activeCard === "LSA & FFE" && <LsaFfe />}
          </div>
        </div>
      </div>
    </>
  );
}

export default NieuMatrix;
