import { useState, useEffect } from "react";
import axios from "axios";
import { AgGridReact } from 'ag-grid-react';
import { ColDef } from 'ag-grid-community';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

// Define a TypeScript interface for the row data
interface CategoryData {
  name: string;
  description: string;
  store: string;
  productsCount: number;
}

function Categories() {
  const [summaryData, setSummaryData] = useState({
    totalCategories: 0,
    topCategoriesStock: 0,
    lowStockCategories: 0,
    recentlyUpdatedCategories: 0,
  });
  
  const [rowData, setRowData] = useState<CategoryData[]>([]);
  const [columnDefs] = useState<ColDef<CategoryData>[]>([
    { field: "name", flex: 1, headerName: "Name", filter: true, floatingFilter: true },
    { field: "description", flex: 1, headerName: "Description", filter: true, floatingFilter: true },
    { field: "store", flex: 1, headerName: "Store", filter: true, floatingFilter: true },
    { field: "productsCount", flex: 1, headerName: "Products Count", filter: true, floatingFilter: true },
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

    const fetchTableData = async () => {
      try {
        const response = await axios.get("API_URL_FOR_TABLE_DATA"); // Replace with actual URL
        setRowData(response.data);
      } catch (error) {
        console.error("Error fetching table data:", error);
      }
    };

    fetchSummaryData();
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
              Total Categories <br />
              <strong>{summaryData.totalCategories} 10</strong>
            </div>
          </div>
          <div className="col">
            <div className="bg-light text-start p-4 rounded shadow-sm">
              Top Categories By Stock <br />
              <strong>{summaryData.topCategoriesStock} 10</strong>
            </div>
          </div>
          <div className="col">
            <div className="bg-light text-start p-4 rounded shadow-sm">
              Low Stock Categories <br />
              <strong>{summaryData.lowStockCategories} 10</strong>
            </div>
          </div>
          <div className="col">
            <div className="bg-light text-start p-4 rounded shadow-sm">
              Recently Updated Categories <br />
              <strong>{summaryData.recentlyUpdatedCategories} 10</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Table */}
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

export default Categories;
