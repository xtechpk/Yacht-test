// NewPurchaseRequest.js
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../styles/NewPurchaseRequest.css';
import CrewExpenseRequest from './CrewExpenseRequest';


function NewPurchaseRequest({ show, onHide }) {
  const [showCrewExpenseRequest, setShowCrewExpenseRequest] = useState(false);


  const handleProceedClick = () => {
    setShowCrewExpenseRequest(true);
    onHide(); 
  };


  const handleCloseCrewExpenseRequest = () => {
    setShowCrewExpenseRequest(false);
  };

  return (
    <>
      <Modal show={show} onHide={onHide} centered dialogClassName="custom-modal-width">
        <div className="custom-container1">
          <h4 className="custom-header">New Purchase Request</h4>
          <div className="custom-body1">
            <p>Select Purchase Request Type:</p>
            <select className="form-control mb-4">
              <option>Purchase Order (Operational) - (Survey)</option>
              <option>Crew Expense</option>
              <option>Purchase Order (Consumables)</option>
              <option>Purchase Order (Maintenance)</option>
              <option>Purchase Order (Emergency / Medical)</option>
              <option>Purchase Order (Contractors) - (Training) - (Survey)</option>
            </select>
          </div>
          <div className="custom-footer d-flex items-center">
            <Button variant="success me-2 p-3 w-40" onClick={handleProceedClick}>Proceed</Button>
            <Button variant="secondary me-2 p-3 w-40" onClick={onHide}>Back to List</Button>
          </div>
        </div>
      </Modal>

      {/* Show CrewExpenseRequest modal when showCrewExpenseRequest is true */}
      <CrewExpenseRequest show={showCrewExpenseRequest} onHide={handleCloseCrewExpenseRequest} />
    </>
  );
}

export default NewPurchaseRequest;
