import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import PurchaseOrders from './PurchaseOrders';

function CrewExpenseRequest({ show, onHide }) {



  const [showPurchaseOrders, setShowPurchaseOrders] = useState(false);


  const handleProceedClick = () => {
    setShowPurchaseOrders(true);
    onHide(); 
  };


  const handleCloseCrewExpenseRequest = () => {
    setShowPurchaseOrders(false);
  };


  return (
    <>
      <Modal
        show={show}
        onHide={onHide}
        centered
        dialogClassName="custom-modal-width"
      >
        <div className="custom-container">
          <h4 className="custom-header">Crew Expense Request</h4>
          <div className="custom-body">
            <label className="pop text-[#000] text-base">Billing Address :</label>
            <input
              type="text"
              className="form-control p-2 mt-1 bg-[#D9D9D9] border-[#ccc] border-[2px] w-full inter text-sm text-[#000]"
              aria-describedby="date"
              
            />
            <label className="pop text-[#000] text-base">Supplier :</label>
            <input
              type="text"
              className="form-control p-2 mt-1 bg-[#D9D9D9] border-[#ccc] border-[2px] w-full inter text-sm text-[#000]"
              aria-describedby="date"
              
            />
            <label className="pop text-[#000] text-base">Description :</label>
            <input
              type="text"
              className="form-control p-2 mt-1 bg-[#f9f9f9] border-[#ccc] border-[2px] w-full inter text-sm text-[#000]"
              aria-describedby="date"
              
            />
            <label className="pop text-[#000] text-base">Budghet Code (Name):</label>
            <input
              type="text"
              className="form-control p-2 mt-1 bg-[#f9f9f9] border-[#ccc] border-[2px] w-full inter text-sm text-[#000]"
              aria-describedby="date"
              
            />
            <label className="pop text-[#000] text-base">Budget Number :</label>
            <input
              type="text"
              className="form-control p-2 mt-1 bg-[#f9f9f9] border-[#ccc] border-[2px] w-full inter text-sm text-[#000]"
              aria-describedby="date"
              
            />
            <label className="pop text-[#000] text-base">Receipt Amount :</label>
            <input
              type="text"
              className="form-control p-2 mt-1 bg-[#f9f9f9] border-[#ccc] border-[2px] w-full inter text-sm text-[#000]"
              aria-describedby="date"
              
            />
            <label className="pop text-[#000] text-base">Currency :</label>
            <input
              type="text"
              className="form-control p-2 mt-1 bg-[#f9f9f9] border-[#ccc] border-[2px] w-full inter text-sm text-[#000]"
              aria-describedby="date"
              
            />
            <label className="pop text-[#000] text-base">Exchange Rate:</label>
            <input
              type="text"
              className="form-control p-2 mt-1 bg-[#f9f9f9] border-[#ccc] border-[2px] w-full inter text-sm text-[#000]"
              aria-describedby="date"
              
            />
            <label className="pop text-[#000] text-base">Total in Default Currency</label>
            <input
              type="text"
              className="form-control p-2 mt-1 bg-[#f9f9f9] border-[#ccc] border-[2px] w-full inter text-sm text-[#000]"
              aria-describedby="date"
             
            />
            <label className="pop text-[#000] text-base">Upload Receipt</label>
            <input
              type="file"
              className="form-control p-2 mt-1 bg-[#f9f9f9] border-[#ccc] border-[2px] w-full inter text-sm text-[#000]"
              aria-describedby="file"
              
            />
          </div>
          <div className="custom-footer d-flex justify-content-center align-items-center gap-4">
            <Button variant="success me-2 p-3 w-40" onClick={handleProceedClick}>Submit Request</Button>
            <Button variant="secondary me-2 p-3 w-40" onClick={onHide}>
              Cancel
            </Button>
          </div>
        </div>
      </Modal>


       {/* Show CrewExpenseRequest modal when showCrewExpenseRequest is true */}
       <PurchaseOrders show={showPurchaseOrders} onHide={handleCloseCrewExpenseRequest} />
    </>
  );
}

export default CrewExpenseRequest;
