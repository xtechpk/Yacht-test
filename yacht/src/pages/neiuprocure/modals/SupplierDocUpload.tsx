import React from "react";
import { Button, Modal } from "react-bootstrap";

function SupplierDocUpload({ show, onHide }) {
  return (
    <>
      <Modal
        show={show}
        onHide={onHide}
        centered
        dialogClassName="custom-modal-width"
      ><div className="custom-container">
        <h4 className="custom-header ubuntu fw-bold">
          Document Upload And Supplier Selection
        </h4>
        <div className="custom-body">
          <label className="pop text-[#000] text-base">
            Upload Documents (Quotes, Invoices, Credit Notes) :
          </label>
          <input
            style={{ backgroundColor: "#F2F2F2" }}
            type="file"
            className="form-control p-2 mt-1  text-white
              border-[#ccc] border-[2px] w-full inter text-sm"
            aria-describedby="date"
          />
          <label className="pop text-[#000] text-base">
            Select Prefered Supplier :
          </label>
          <select
            className="form-control mb-4"
            style={{
              backgroundColor: "#D9D9D9",
              appearance: "none",
              paddingRight: "2rem",
            }}
          >
            <option>Purchase Order (Operational) - (Survey)</option>
            <option>Crew Expense</option>
            <option>Purchase Order (Consumables)</option>
            <option>Purchase Order (Maintenance)</option>
            <option>Purchase Order (Emergency / Medical)</option>
            <option>
              Purchase Order (Contractors) - (Training) - (Survey)
            </option>
          </select>
          <img
            src="./Expand Arrow.png"
            style={{
              position: "absolute",
              right: "1rem",
              top: "36.5%",
              right: "10%",
              transform: "translateY(-50%)",
              pointerEvents: "none",
              color: "#666",
            }}
          />
        </div>
        <div className="custom-footer d-flex justify-content-center items-center mt-4 gap-8">
            <Button variant="success me-2 p-3 w-40" >Proceed</Button>
            <Button variant="secondary me-2 p-3 w-40" >Back to List</Button>
          </div>
      </div>
      </Modal>
    </>
  );
}

export default SupplierDocUpload;
