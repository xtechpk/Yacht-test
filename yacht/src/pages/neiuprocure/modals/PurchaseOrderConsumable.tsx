import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import PurchaseOrderContractor from "./PurchaseOrderContractor";

function PurchaseOrders({ show, onHide }) {




  return (
    <>
      <Modal
        show={show}
        onHide={onHide}
        centered
        dialogClassName="custom-modal-width"
      >
        <div className="custom-container">
          <h4 className="custom-header ubuntu fw-bold">Purchase Order (Consumable)</h4>
          <div className="custom-body">
            <label className="pop text-[#000] text-base">
              Billing Address :
            </label>
            <input style={{ backgroundColor: "#F2F2F2" }}
              type="text"
              className="form-control p-2 mt-1  border-[#ccc] border-[2px] w-full inter text-sm text-[#000]"
              aria-describedby="date"
            />
            <label className="pop text-[#000] text-base">
              Delivery Address :
            </label>
            <input style={{ backgroundColor: "#F2F2F2" }}
              type="text"
              className="form-control p-2 mt-1  border-[#ccc] border-[2px] w-full inter text-sm text-[#000]"
              aria-describedby="address"
            />
            <label className="pop text-[#000] text-base">Budget code :</label>
            <input style={{ backgroundColor: "#F2F2F2" }}
              type="text"
              className="form-control p-2 mt-1  border-[#ccc] border-[2px] w-full inter text-sm text-[#000]"
              aria-describedby="code"
            />
            <label className="pop text-[#000] text-base">Item List:</label>
            <input style={{ backgroundColor: "#F2F2F2" }}
              type="text"
              className="form-control p-2 mt-1 h-32 border-[#ccc] border-[2px] w-full inter text-sm text-[#000]"
              aria-describedby="list"
            />
            <label className="pop text-[#000] text-base">VAT :</label>
            <input style={{ backgroundColor: "#F2F2F2" }}
              type="text"
              className="form-control p-2 mt-1  border-[#ccc] border-[2px] w-full inter text-sm text-[#000]"
              aria-describedby="vat"
            />
            <label className="pop text-[#000] text-base">Freight :</label>
            <input style={{ backgroundColor: "#F2F2F2" }}
              type="text"
              className="form-control p-2 mt-1  border-[#ccc] border-[2px] w-full inter text-sm text-[#000]"
              aria-describedby="freight"
            />
            <label className="pop text-[#000] text-base">Discount :</label>
            <input style={{ backgroundColor: "#F2F2F2" }}
              type="text"
              className="form-control p-2 mt-1  border-[#ccc] border-[2px] w-full inter text-sm text-[#000]"
              aria-describedby="discount"
            />
            <label className="pop text-[#000] text-base">Exchange Rate:</label>
            <input style={{ backgroundColor: "#F2F2F2" }}
              type="text"
              className="form-control p-2 mt-1  border-[#ccc] border-[2px] w-full inter text-sm text-[#000]"
              aria-describedby="exchange_rate"
            />
            <label className="pop text-[#000] text-base">
              Total in Default Currency
            </label>
            <input style={{ backgroundColor: "#F2F2F2" }}
              type="text"
              className="form-control p-2 mt-1  border-[#ccc] border-[2px] w-full inter text-sm text-[#000]"
              aria-describedby="currency"
            />
          </div>
          <div className="custom-footer d-flex justify-content-center align-items-center gap-4">
            <Button variant="success me-2 p-3 w-40" >Submit Request</Button>
            <Button variant="secondary me-2 p-3 w-40" >
              Cancel
            </Button>
          </div>
        </div>
      </Modal>


      {/**Purchase order constructor component */}
      
      <PurchaseOrderContractor  />
    </>
  );
}

export default PurchaseOrders;
