import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../styles/PurchaseRequestDetails.css'; 
import NewPurchaseRequest from './NewpurchaseRequest';


function PurchaseRequestDetails({ show, onHide }) {
  const [showNewRequest, setShowNewRequest] = useState(false);

  const handleApproveClick = () => {
    setShowNewRequest(true); 
    onHide(); 
  };

  const handleCloseNewRequest = () => {
    setShowNewRequest(false); 
  };

  return (
    <>
      <Modal show={show} onHide={onHide} centered dialogClassName="custom-modal-width">
        <div className="custom-container">
          <div className="custom-header d-flex justify-content-between align-items-center">
            <h4 className='ubuntu text-center align-middle'>Purchase Request Details</h4>
          </div>
          <div className="custom-body">
            <table className="table">
              <tbody>
                <tr><td>Request Type:</td><td>Purchase Order (Consumables)</td></tr>
                <tr><td>Status:</td><td>Pending Approval</td></tr>
                <tr><td>Date Submitted:</td><td>2024-08-17</td></tr>
                <tr><td>Requester:</td><td>Jane Smith</td></tr>
                <tr><td>Supplier:</td><td>ABC Supplies</td></tr>
                <tr><td>Budget Code:</td><td>Operations-2024</td></tr>
                <tr><td>Items Requested:</td><td>
                  <ul>
                    <li>Item 1: 10x Wrench - $50</li>
                    <li>Item 2: 5x Screwdriver Set - $25</li>
                  </ul>
                </td></tr>
                <tr><td>Total Amount:</td><td>$75</td></tr>
                <tr><td>Additional Notes:</td><td>Urgent delivery required by end of the week.</td></tr>
              </tbody>
            </table>
          </div>
          <div className="custom-footer d-flex">
            <Button variant="success me-2 p-3 w-40" onClick={handleApproveClick}>Approve</Button>
            <Button variant="danger me-2 p-3 w-40">Reject</Button>
            <Button variant="secondary me-2 p-3 w-40" onClick={onHide}>Back to List</Button>
          </div>
        </div>
      </Modal>

      {/* Render NewPurchaseRequest modal */}
      <NewPurchaseRequest show={showNewRequest} onHide={handleCloseNewRequest} />
    </>
  );
}

export default PurchaseRequestDetails;
