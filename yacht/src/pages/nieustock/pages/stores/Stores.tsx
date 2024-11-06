import { useState, useEffect } from "react";
import axios from "axios";
import { AgGridReact } from 'ag-grid-react';
import { ColDef } from 'ag-grid-community';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

// Define TypeScript interface for the table data
interface CategoryData {
  name: string;
  products: number;
  deck: string;
  section: string;
  alerts: string;
  capacityM3: number;
  purchaseRequest: string;
}

// Define TypeScript interface for summary data
interface SummaryData {
  totalCategories: number;
  topCategoriesStock: number;
  lowStockCategories: number;
  recentlyUpdatedCategories: number;
}

function Stores() {
  const [summaryData, setSummaryData] = useState<SummaryData>({
    totalCategories: 0,
    topCategoriesStock: 0,
    lowStockCategories: 0,
    recentlyUpdatedCategories: 0,
  });
  
  const [rowData, setRowData] = useState<CategoryData[]>([]);
  
  const [columnDefs] = useState<ColDef<CategoryData>[]>([
    { field: "name", flex: 1, headerName: "Name", filter: true, floatingFilter: true },
    { field: "products", flex: 1, headerName: "Products", filter: true, floatingFilter: true },
    { field: "deck", flex: 1, headerName: "Deck", filter: true, floatingFilter: true },
    { field: "section", flex: 1, headerName: "Section", filter: true, floatingFilter: true },
    { field: "alerts", flex: 1, headerName: "Alerts", filter: true, floatingFilter: true },
    { field: "capacityM3", flex: 1, headerName: "Capacity m³", filter: true, floatingFilter: true },
    { field: "purchaseRequest", flex: 1, headerName: "Purchase Request", filter: true, floatingFilter: true },
  ]);

  // Fetch data for summary cards
  useEffect(() => {
    const fetchSummaryData = async () => {
      try {
        const response = await axios.get("API_URL_FOR_SUMMARY_DATA"); // Replace with actual URL
        setSummaryData(response.data);
      } catch (error) {
        console.error("Error fetching summary data:", error);
      }
    };

    fetchSummaryData();
  }, []);

  // Fetch data for the table
  useEffect(() => {
    const fetchTableData = async () => {
      try {
        const response = await axios.get("API_URL_FOR_TABLE_DATA"); // Replace with actual URL
        setRowData(response.data);
      } catch (error) {
        console.error("Error fetching table data:", error);
      }
    };

    fetchTableData();
  }, []);

  return (
    <>
      <div className="container mt-4 z-1 rounded shadow min-vh-100">
        {/* Summary Cards */}
        <div className="container text-center my-4">
          <div className="row g-2 g-lg-3">
            <div className="col">
              <div className="bg-light text-start p-4 rounded shadow-sm">
                Total Stores <br />
                <strong>{summaryData.totalCategories}10</strong>
              </div>
            </div>
            <div className="col">
              <div className="bg-light text-start p-4 rounded shadow-sm">
                Inventory Levels <br />
                <strong>{summaryData.topCategoriesStock}12%</strong>
              </div>
            </div>
            <div className="col">
              <div className="bg-light text-start p-4 rounded shadow-sm">
                Stores Low on Stock <br />
                <strong>{summaryData.lowStockCategories}15</strong>
              </div>
            </div>
            <div className="col">
              <div className="bg-light text-start p-4 rounded shadow-sm">
                Recently Restocked Stores <br />
                <strong>{summaryData.recentlyUpdatedCategories}256</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Stores Table */}
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

export default Stores;
