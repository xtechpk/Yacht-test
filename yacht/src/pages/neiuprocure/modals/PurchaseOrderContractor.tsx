import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";
import PurchaseOrderEmergency from "./PurchaseOrderEmergency";

function PurchaseOrderContractor({ show, onHide }) {


 

  return (
    <>
      <Modal
        show={show}
        onHide={onHide}
        centered
        dialogClassName="custom-modal-width"
      >
        <div className="custom-container">
          <h4 className="custom-header ubuntu fw-bold">Purchase Order (Contractors)</h4>
          <div className="custom-body">
            <label className="pop text-[#000] text-base">
              Billing Address :
            </label>
            <input
              style={{ backgroundColor: "#F2F2F2" }}
              type="text"
              className="form-control p-2 mt-1  border-[#ccc] border-[2px] w-full inter text-sm text-[#000]"
              aria-describedby="address"
            />
            <label className="pop text-[#000] text-base">
              Delivery Address :
            </label>
            <input
              style={{ backgroundColor: "#F2F2F2" }}
              type="text"
              className="form-control p-2 mt-1  border-[#ccc] border-[2px] w-full inter text-sm text-[#000]"
              aria-describedby="address"
            />
            <label className="pop text-[#000] text-base">
              Supplier :
            </label>
            <input
              style={{ backgroundColor: "#F2F2F2" }}
              type="text"
              className="form-control p-2 mt-1  border-[#ccc] border-[2px] w-full inter text-sm text-[#000]"
              aria-describedby="text"
            />
            <label className="pop text-[#000] text-base">
              Budget Code :
            </label>
            <input
              style={{ backgroundColor: "#F2F2F2" }}
              type="text"
              className="form-control p-2 mt-1  border-[#ccc] border-[2px] w-full inter text-sm text-[#000]"
              aria-describedby="text"
            />
            <label className="pop text-[#000] text-base">
              Item List (Contractors) :
            </label>
            <input
              style={{ backgroundColor: "#F2F2F2" }}
              type="text"
              className="form-control p-2 mt-1  border-[#ccc] border-[2px] w-full inter text-sm text-[#000]"
              aria-describedby="text"
            />
            <label className="pop text-[#000] text-base">
              Vat :
            </label>
            <input
              style={{ backgroundColor: "#F2F2F2" }}
              type="text"
              className="form-control p-2 mt-1  border-[#ccc] border-[2px] w-full inter text-sm text-[#000]"
              aria-describedby="date"
            />
            <label className="pop text-[#000] text-base">
              Freight :
            </label>
            <input
              style={{ backgroundColor: "#F2F2F2" }}
              type="text"
              className="form-control p-2 mt-1  border-[#ccc] border-[2px] w-full inter text-sm text-[#000]"
              aria-describedby="text"
            />
            <label className="pop text-[#000] text-base">
              Discount :
            </label>
            <input
              style={{ backgroundColor: "#F2F2F2" }}
              type="text"
              className="form-control p-2 mt-1  border-[#ccc] border-[2px] w-full inter text-sm text-[#000]"
              aria-describedby="text"
            />
            <label className="pop text-[#000] text-base">
              Travel Cost :
            </label>
            <input
              style={{ backgroundColor: "#F2F2F2" }}
              type="text"
              className="form-control p-2 mt-1  border-[#ccc] border-[2px] w-full inter text-sm text-[#000]"
              aria-describedby="date"
            />
            <label className="pop text-[#000] text-base">
              Food Cost :
            </label>
            <input
              style={{ backgroundColor: "#F2F2F2" }}
              type="text"
              className="form-control p-2 mt-1  border-[#ccc] border-[2px] w-full inter text-sm text-[#000]"
              aria-describedby="text"
            />
            <label className="pop text-[#000] text-base">
              Hotel Cost :
            </label>
            <input
              style={{ backgroundColor: "#F2F2F2" }}
              type="text"
              className="form-control p-2 mt-1  border-[#ccc] border-[2px] w-full inter text-sm text-[#000]"
              aria-describedby="text"
            />
            <label className="pop text-[#000] text-base">
              Insurance :
            </label>
            <input
              style={{ backgroundColor: "#F2F2F2" }}
              type="text"
              className="form-control p-2 mt-1  border-[#ccc] border-[2px] w-full inter text-sm text-[#000]"
              aria-describedby="text"
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

export default PurchaseOrderContractor;
