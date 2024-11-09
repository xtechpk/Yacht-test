import { useState, useEffect } from "react";
import axios from "axios";
import { AgGridReact } from "ag-grid-react";
import { ColDef, CellEditingStoppedEvent } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import AddManage from "./AddMAnage";

interface CategoryData {
  no: number;
  userName: string;
  role: string;
  lastActive: string;
  email: string;
  status: string;
  lastLoginIp: string;
}

function NieuManage() {
  const [rowData, setRowData] = useState<CategoryData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const [totalUsers, setTotalUsers] = useState<number>(0);
  const [activeUsers, setActiveUsers] = useState<number>(0);
  const [inactiveUsers, setInactiveUsers] = useState<number>(0);
  const [superAdminCount, setSuperAdminCount] = useState<number>(0);

  const columnDefs: ColDef[] = [
    { field: "no", flex: 1, headerName: "No.", editable: false, filter: "agTextColumnFilter", floatingFilter: true },
    { field: "userName", flex: 1, headerName: "User Name", editable: true, filter: "agTextColumnFilter", floatingFilter: true },
    { field: "role", flex: 1, headerName: "Role", editable: true, filter: "agTextColumnFilter", floatingFilter: true },
    { field: "lastActive", flex: 1, headerName: "Last Active", editable: false, filter: "agTextColumnFilter", floatingFilter: true },
    { field: "email", flex: 1, headerName: "Email", editable: true, filter: "agTextColumnFilter", floatingFilter: true },
    { field: "status", flex: 1, headerName: "Status", editable: true, filter: "agTextColumnFilter", floatingFilter: true },
    { field: "lastLoginIp", flex: 1, headerName: "Last Login IP", editable: false, filter: "agTextColumnFilter", floatingFilter: true },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("YOUR_API_ENDPOINT_FOR_TABLE_DATA");
        setRowData(response.data);
      } catch (error) {
        console.error("Failed to fetch table data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchCardData = async () => {
      try {
        const response = await axios.get("YOUR_API_ENDPOINT_FOR_CARD_DATA");
        const { total, active, inactive, superAdmin } = response.data;

        setTotalUsers(total);
        setActiveUsers(active);
        setInactiveUsers(inactive);
        setSuperAdminCount(superAdmin);
      } catch (error) {
        console.error("Failed to fetch card data:", error);
      }
    };
    fetchCardData();
  }, []);

  const handleCellEdit = async (params: CellEditingStoppedEvent) => {
    const updatedData = params.data as CategoryData;
    try {
      await axios.put(`YOUR_API_ENDPOINT_FOR_UPDATE/${updatedData.no}`, updatedData);
      console.log("Data updated successfully:", updatedData);
    } catch (error) {
      console.error("Failed to update data:", error);
    }
  };

  return (
    <>
      <div className="container-fluid min-vh-100">
        <h3 className="mb-4 text-black ubuntu fw-bold text-3xl">NieuManage</h3>
        <div className="container mt-4 z-1 rounded shadow min-vh-100">
          <div className="row g-2 g-lg-3 m-9">
            <div className="col">
              <div className="bg-light text-start p-8 rounded shadow-sm">
                Total <br />
                <strong>{totalUsers}</strong>
              </div>
            </div>
            <div className="col">
              <div className="bg-light text-start p-8 rounded shadow-sm">
                Active <br />
                <strong>{activeUsers}</strong>
              </div>
            </div>
            <div className="col">
              <div className="bg-light text-start p-8 rounded shadow-sm">
                Inactive <br />
                <strong>{inactiveUsers}</strong>
              </div>
            </div>
            <div className="col">
              <div className="bg-light text-start p-8 rounded shadow-sm">
                Super Admin <br />
                <strong>{superAdminCount}</strong>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <button className="btn btn-primary p-3 mr-6" onClick={() => setShowDetails(true)}>
              Add
            </button>
          </div>
          <div className="ag-theme-quartz mt-3" style={{ height: "500px", width: "100%" }}>
            {loading ? (
              <div>Loading....</div>
            ) : (
              <AgGridReact
                rowData={rowData}
                columnDefs={columnDefs}
                pagination={true}
                paginationPageSize={5}
                onCellEditingStopped={handleCellEdit}
                onGridReady={(params) => params.api.sizeColumnsToFit()}
              />
            )}
          </div>
        </div>
      </div>
      <AddManage show={showDetails} onHide={() => setShowDetails(false)} />
    </>
  );
}

export default NieuManage;
