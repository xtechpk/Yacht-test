import React from "react";
import { Button, Modal } from "react-bootstrap";

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
          <h4 className="custom-header">Purchase Order (Consumable)</h4>
          <div className="custom-body">
            <label className="pop text-[#000] text-base">
              Billing Address :
            </label>
            <input
              type="text"
              className="form-control p-2 mt-1 bg-[#D9D9D9] border-[#ccc] border-[2px] w-full inter text-sm text-[#000]"
              aria-describedby="date"
            />
            <label className="pop text-[#000] text-base">
              Delivery Address :
            </label>
            <input
              type="text"
              className="form-control p-2 mt-1 bg-[#D9D9D9] border-[#ccc] border-[2px] w-full inter text-sm text-[#000]"
              aria-describedby="date"
            />
            <label className="pop text-[#000] text-base">Budget code :</label>
            <input
              type="text"
              className="form-control p-2 mt-1 bg-[#f9f9f9] border-[#ccc] border-[2px] w-full inter text-sm text-[#000]"
              aria-describedby="date"
            />
            <label className="pop text-[#000] text-base">Item List:</label>
            <input
              type="text"
              className="form-control p-20 mt-1 bg-[#f9f9f9] border-[#ccc] border-[2px] w-full inter text-sm text-[#000]"
              aria-describedby="date"
            />
            <label className="pop text-[#000] text-base">VAT :</label>
            <input
              type="text"
              className="form-control p-2 mt-1 bg-[#f9f9f9] border-[#ccc] border-[2px] w-full inter text-sm text-[#000]"
              aria-describedby="date"
            />
            <label className="pop text-[#000] text-base">Freight :</label>
            <input
              type="text"
              className="form-control p-2 mt-1 bg-[#f9f9f9] border-[#ccc] border-[2px] w-full inter text-sm text-[#000]"
              aria-describedby="date"
            />
            <label className="pop text-[#000] text-base">Discount :</label>
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
            <label className="pop text-[#000] text-base">
              Total in Default Currency
            </label>
            <input
              type="text"
              className="form-control p-2 mt-1 bg-[#f9f9f9] border-[#ccc] border-[2px] w-full inter text-sm text-[#000]"
              aria-describedby="date"
            />
          </div>
          <div className="custom-footer d-flex justify-content-center align-items-center gap-4">
            <Button variant="success me-2 p-3 w-40">Submit Request</Button>
            <Button variant="secondary me-2 p-3 w-40" onClick={onHide}>
              Cancel
            </Button>
          </div>
        </div>
      </Modal>

    </>
  );
}

export default PurchaseOrders;
