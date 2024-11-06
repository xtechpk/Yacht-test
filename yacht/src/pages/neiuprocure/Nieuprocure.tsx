import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFilter } from 'react-icons/fa';
import { RiRefreshLine } from 'react-icons/ri';
import '../../styles/Neiuprocure.css';
import PurchaseRequestDetails from './modals/PurchasRequestDetails';


function Neiuprocure() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <div className="container-fluid min-vh-100">
        <h3 className="mb-4 text-black">NIEUPROCURE</h3>
        <div className="container mt-4 z-1 rounded shadow min-vh-100">
          {/* Card Section */}
          <div className="container text-center mt-8">
            <div className="row g-2 g-lg-3 m-9">
              {/* Status Cards */}
              <div className="col"><div className="bg-light text-start p-8 rounded shadow-sm">All <br /><strong>50</strong></div></div>
              <div className="col"><div className="bg-light text-start p-8 rounded shadow-sm">Rejected <br /><strong>7</strong></div></div>
              <div className="col"><div className="bg-light text-start p-8 rounded shadow-sm">Approved <br /><strong>23</strong></div></div>
              <div className="col"><div className="bg-light text-start p-8 rounded shadow-sm">Pending <br /><strong>20</strong></div></div>
            </div>
          </div>

          {/* Filter Section */}
          <div className="d-flex align-items-center mb-3">
            <div className="d-flex align-items-center me-auto">
              <button className="btn bg-white d-flex align-items-center justify-content-center px-3 py-2">
                <FaFilter className="me-2" />
                <span>Filter</span>
              </button>
              <button className="btn bg-white d-flex align-items-center justify-content-center px-3 py-2">
                <h5 className="mb-0">Filter By</h5>
              </button>
              <select className="form-select text-center" style={{ width: '120px', height: '40px', borderRadius: '0' }}>
                <option>Name</option>
                <option>Request Type</option>
                <option>Other Filter Option</option>
              </select>
              <button className="btn bg-white d-flex align-items-center justify-content-center px-3 py-2">
                <RiRefreshLine className="me-2" /> Reset Filter
              </button>
            </div>

            <button className="btn btn-primary me-2" onClick={() => setShowDetails(true)}>
              New Purchase Request
            </button>
            <input type="text" className="form-control me-2" placeholder="Search" style={{ width: '200px' }} />
          </div>

          {/* Table Section */}
          <div className="custom-body">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">No.</th>
                <th scope="col">Request Type</th>
                <th scope="col">Status</th>
                <th scope="col">Date</th>
                <th scope="col">Requester</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Crew Expense</td>
                <td className="text-danger fw-bold">Pending</td>
                <td>2024-08-18</td>
                <td>Jane Doe</td>
                <td><button className="btn btn-link" onClick={() => setShowDetails(true)}>View Details</button></td>
              </tr>
              <tr>
                <td>1</td>
                <td>Crew Expense</td>
                <td className="text-success fw-bold">Approved</td>
                <td>2024-08-18</td>
                <td>Jane Doe</td>
                <td><button className="btn btn-link" onClick={() => setShowDetails(true)}>View Details</button></td>
              </tr>
              {/* Add other rows as needed */}
            </tbody>
          </table>
          </div>
          {/* Modal for Purchase Request Details */}
          <PurchaseRequestDetails show={showDetails} onHide={() => setShowDetails(false)} />
        </div>
      </div>
    </>
  );
}

export default Neiuprocure;
