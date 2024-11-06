import { useState, useEffect } from "react";
import axios from "axios";
import { AgGridReact } from 'ag-grid-react';
import { ColDef } from 'ag-grid-community';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

// Define the CategoryData type
interface CategoryData {
  id: number;
  name: string;
  ref: string;
  date: string;
  createdBy: string;
  approved: boolean;
  submitted: boolean;
  paid: boolean;
  status: string;
}

function PurchaseRequest() {
  const [summaryData, setSummaryData] = useState({
    totalCategories: 0,
    topCategoriesStock: 0,
    lowStockCategories: 0,
    recentlyUpdatedCategories: 0
  });

  const [rowData, setRowData] = useState<CategoryData[]>([]);

  const [columnDefs] = useState<ColDef<CategoryData>[]>([
    { field: "id", flex: 1, headerName: "ID", filter: true, floatingFilter: true },
    { field: "name", flex: 1, headerName: "Name", filter: true, floatingFilter: true },
    { field: "ref", flex: 1, headerName: "Ref", filter: true, floatingFilter: true },
    { field: "date", flex: 1, headerName: "Date", filter: true, floatingFilter: true },
    { field: "createdBy", flex: 1, headerName: "Created By", filter: true, floatingFilter: true },
    { field: "approved", flex: 1, headerName: "Approved", filter: true, floatingFilter: true },
    { field: "submitted", flex: 1, headerName: "Submitted", filter: true, floatingFilter: true },
    { field: "paid", flex: 1, headerName: "Paid", filter: true, floatingFilter: true },
    { field: "status", flex: 1, headerName: "Status", filter: true, floatingFilter: true },
  ]);

  const fetchSummaryData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/summary");
      setSummaryData(response.data);
    } catch (error) {
      console.error("Error fetching summary data:", error);
    }
  };

  const fetchTableData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/purchase-requests");
      setRowData(response.data);
    } catch (error) {
      console.error("Error fetching table data:", error);
    }
  };

  useEffect(() => {
    fetchSummaryData();
    fetchTableData();
  }, []);

  return (
    <>
      <div className="container mt-4 z-1 rounded shadow min-vh-100">
        <div className="container text-center my-4">
          <div className="row g-2 g-lg-3">
            <div className="col">
              <div className="bg-light text-start p-4 rounded shadow-sm">
                Total Requests <br />
                <strong>{summaryData.totalCategories}</strong>
              </div>
            </div>
            <div className="col">
              <div className="bg-light text-start p-4 rounded shadow-sm">
                Pending Requests <br />
                <strong>{summaryData.topCategoriesStock}%</strong>
              </div>
            </div>
            <div className="col">
              <div className="bg-light text-start p-4 rounded shadow-sm">
                Approved Requests <br />
                <strong>{summaryData.lowStockCategories}</strong>
              </div>
            </div>
            <div className="col">
              <div className="bg-light text-start p-4 rounded shadow-sm">
                Requests Over Time <br />
                <strong>{summaryData.recentlyUpdatedCategories}</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="ag-theme-quartz" style={{ height: "500px", width: "100%" }}>
          <AgGridReact
            rowData={rowData}
            columnDefs={columnDefs}
            pagination={true}
            paginationPageSize={10}
            onGridReady={(params) => params.api.sizeColumnsToFit()}
          />
        </div>
      </div>
    </>
  );
}

export default PurchaseRequest;
