import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'


function PurchaseOrderEmergency({show , onHide}) {





  return (
    <>
        <Modal
        show={show}
        onHide={onHide}
        centered
        dialogClassName="custom-modal-width"
        >
            <div className="custom-container">
                <h4 className='custom-header ubuntu fw-bold'>Purchase Medical (Emergency/Medical)</h4>
                <div className='custom-body'>
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
                    aria-describedby="address"
                  />
                  <label className="pop text-[#000] text-base">
                    Budget Code :
                  </label>
                  <input
                    style={{ backgroundColor: "#F2F2F2" }}
                    type="text"
                    className="form-control p-2 mt-1  border-[#ccc] border-[2px] w-full inter text-sm text-[#000]"
                    aria-describedby="address"
                  />
                  <label className="pop text-[#000] text-base">
                    Item List (Emergency/Medical) :
                  </label>
                  <input
                    style={{ backgroundColor: "#F2F2F2" }}
                    type="text"
                    className="form-control p-2 mt-1  border-[#ccc] border-[2px] w-full inter text-sm text-[#000]"
                    aria-describedby="address"
                  />
                  <label className="pop text-[#000] text-base">
                    VAT :
                  </label>
                  <input
                    style={{ backgroundColor: "#F2F2F2" }}
                    type="text"
                    className="form-control p-2 mt-1  border-[#ccc] border-[2px] w-full inter text-sm text-[#000]"
                    aria-describedby="address"
                  />
                  <label className="pop text-[#000] text-base">
                    Freight :
                  </label>
                  <input
                    style={{ backgroundColor: "#F2F2F2" }}
                    type="text"
                    className="form-control p-2 mt-1  border-[#ccc] border-[2px] w-full inter text-sm text-[#000]"
                    aria-describedby="address"
                  />
                  <label className="pop text-[#000] text-base">
                    Discount :
                  </label>
                  <input
                    style={{ backgroundColor: "#F2F2F2" }}
                    type="text"
                    className="form-control p-2 mt-1  border-[#ccc] border-[2px] w-full inter text-sm text-[#000]"
                    aria-describedby="address"
                  />
                  <label className="pop text-[#000] text-base">
                    Urgency Level :
                  </label>
                  <input
                    style={{ backgroundColor: "#F2F2F2" }}
                    type="text"
                    className="form-control p-2 mt-1  border-[#ccc] border-[2px] w-full inter text-sm text-[#000]"
                    aria-describedby="address"
                  />
                  <label className="pop text-[#000] text-base">
                    Emergency/Medical Description :
                  </label>
                  <input
                    style={{ backgroundColor: "#F2F2F2" }}
                    type="text"
                    className="form-control p-2 mt-1  border-[#ccc] border-[2px] w-full inter text-sm text-[#000]"
                    aria-describedby="address"
                  />
                  <label className="pop text-[#000] text-base">
                    Pre-Approval from Medical :
                  </label>
                  <input
                    style={{ backgroundColor: "#F2F2F2" }}
                    type="text"
                    className="form-control p-2 mt-1 h-30 border-[#ccc] border-[2px] w-full inter text-sm text-[#000]"
                    aria-describedby="address"
                  />
                </div>
                <div className="custom-footer d-flex justify-content-center items-center mt-4 gap-8">
            <Button variant="success me-2 p-3 w-40" >Proceed</Button>
            <Button variant="secondary me-2 p-3 w-40" >Back to List</Button>
          </div>
            </div>
        </Modal>


    </>
  )
}

export default PurchaseOrderEmergency