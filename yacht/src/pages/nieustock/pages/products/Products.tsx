import { useState, useEffect } from "react";
import axios from "axios";
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import { ColDef } from 'ag-grid-community';
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid

interface Product {
  image: string;
  name: string;
  categories: string;
  store: string;
  sku: string;
  price: number;
  stock: number;
  type: string;
  usageHistory: string;
  toolhealth: string;
  actions: string;
}

function Products() {
  const [rowData, setRowData] = useState<Product[]>([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [stockLevels, setStockLevels] = useState(0);
  const [lowStockProducts, setLowStockProducts] = useState(0);
  const [recentlyAddedProducts, setRecentlyAddedProducts] = useState(0);

  const [columnDefs] = useState<ColDef<Product>[]>([
    { field: "image", flex: 1, headerName: "Image", filter: true, floatingFilter: true },
    { field: "name", flex: 1, headerName: "Name", filter: true, floatingFilter: true },
    { field: "categories", flex: 1, headerName: "Categories", filter: true, floatingFilter: true },
    { field: "store", flex: 1, headerName: "Store", filter: true, floatingFilter: true },
    { field: "sku", flex: 1, headerName: "SKU", filter: true, floatingFilter: true },
    { field: "price", flex: 1, headerName: "Price", filter: true, floatingFilter: true },
    { field: "stock", flex: 1, headerName: "Stock", filter: true, floatingFilter: true },
    { field: "type", flex: 1, headerName: "Type", filter: true, floatingFilter: true },
    { field: "usageHistory", flex: 1, headerName: "Usage History", filter: true, floatingFilter: true },
    { field: "toolhealth", flex: 1, headerName: "Tool Health", filter: true, floatingFilter: true },
    { field: "actions", flex: 1, headerName: "Actions", filter: true, floatingFilter: true },
  ]);

  useEffect(() => {
    // Fetch summary data
    axios.get("https://api.example.com/products-summary")
      .then(response => {
        const data = response.data;
        setTotalProducts(data.totalProducts);
        setStockLevels(data.stockLevels);
        setLowStockProducts(data.lowStockProducts);
        setRecentlyAddedProducts(data.recentlyAddedProducts);
      })
      .catch(error => console.error("Error fetching summary data:", error));
  }, []);

  useEffect(() => {
    // Fetch product list data
    axios.get("https://api.example.com/products")
      .then(response => setRowData(response.data.products))
      .catch(error => console.error("Error fetching product data:", error));
  }, []);

  return (
    <>
    <div className="container mt-4 z-1 rounded shadow min-vh-100">
      {/* Summary Cards */}
      <div className="container text-center my-4">
        <div className="row g-2 g-lg-3">
          <div className="col">
            <div className="bg-light text-start p-4 rounded shadow-sm">
              Total Products <br />
              <strong>{totalProducts}</strong>
            </div>
          </div>
          <div className="col">
            <div className="bg-light text-start p-4 rounded shadow-sm">
              Stock Levels <br />
              <strong>{stockLevels}%</strong>
            </div>
          </div>
          <div className="col">
            <div className="bg-light text-start p-4 rounded shadow-sm">
              Products Low on Stock <br />
              <strong>{lowStockProducts}</strong>
            </div>
          </div>
          <div className="col">
            <div className="bg-light text-start p-4 rounded shadow-sm">
              Recently Added Products <br />
              <strong>{recentlyAddedProducts}</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Product Table */}
      <div className="ag-theme-quartz" style={{ height: "500px", width: "100%" }}>
        <AgGridReact<Product>
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

export default Products;
