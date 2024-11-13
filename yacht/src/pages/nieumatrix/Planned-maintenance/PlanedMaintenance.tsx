import { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
import axios from "axios";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import PlanedModel from "./modal/PlanedModel";

interface DepartmentData {
  no: number;
  taskTitle: string;
  description: string;
  department: string;
  location: string;
  assigned: string;
  status: string;
  equipment: string;
  tools: string;
}

function PlanedMaintenance() {
  const [rowData, setRowData] = useState<DepartmentData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get<DepartmentData[]>("your_api_endpoint");
        setRowData(response.data);
      } catch (error) {
        setError("Error fetching data. Please try again.");
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Column definitions matching LsaFfe component
  const columnDefs: ColDef[] = [
    { field: "department", flex: 1, headerName: "Department.", filter: "agTextColumnFilter", floatingFilter: true },
    { field: "subDepartment", flex: 1, headerName: "Sub Department", filter: "agTextColumnFilter", floatingFilter: true },
    { field: "rank", flex: 1, headerName: "Rank", filter: "agTextColumnFilter", floatingFilter: true },
    { field: "RankeLevel", flex: 1, headerName: "Rank Level", filter: "agTextColumnFilter", floatingFilter: true },
    { field: "rankAccessLevel", flex: 1, headerName: "Rank Access Level", filter: "agTextColumnFilter", floatingFilter: true },
  ];

  return (
    <>
      {/* Button to open the modal */}
      <div className="d-flex justify-content-end m-3 align-items-center mx-4">
        <button
          className="btn blue d-flex align-items-center rounded-xl w-54 text-white text-lg font-semibold inter p-3 gap-4 align-items-lg-center"
          onClick={() => setShowDetails(true)}
        >
          Add Planned Maintenance
          <img src="./add.png" alt="add.png" />
        </button>
      </div>
      
      {/* Error message */}
      {error && <div className="alert alert-danger">{error}</div>}

      {/* Loading Spinner */}
      {loading ? (
        <div>Loading tasks...</div>
      ) : (
        <div className="ag-theme-quartz mt-3" style={{ height: "500px", width: "100%" }}>
          <AgGridReact
            rowData={rowData}
            columnDefs={columnDefs}
            pagination={true}
            paginationPageSize={5}
            onGridReady={(params) => params.api.sizeColumnsToFit()}
          />
        </div>
      )}

      {/* Modal for additional functionality */}
      <PlanedModel show={showDetails} onHide={() => setShowDetails(false)} />
    </>
  );
}

export default PlanedMaintenance;
