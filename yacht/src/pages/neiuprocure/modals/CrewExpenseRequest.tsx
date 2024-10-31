import React from 'react';
import { Button, Modal } from 'react-bootstrap';

function CrewExpenseRequest({ show, onHide }) {
  return (
    <>
      <Modal show={show} onHide={onHide} centered dialogClassName="custom-modal-width">
        <div className='custom-container'>
          <h4 className='custom-header'>Crew Expense Request</h4>
          <div className='custom-body'>
          <label className='pop text-[#000] text-base'>First Name*</label>
          <input type="text" className="form-control p-2 mt-1 bg-[#f9f9f9] border-[#ccc] border-[2px] w-full inter text-sm text-[#000]" aria-describedby="date" placeholder='Your First Name' />
          <label className='pop text-[#000] text-base'>First Name*</label>
                    <input type="text" className="form-control p-2 mt-1 bg-[#f9f9f9] border-[#ccc] border-[2px] w-full inter text-sm text-[#000]" aria-describedby="date" placeholder='Your First Name' />
                    <label className='pop text-[#000] text-base'>First Name*</label>
                    <input type="text" className="form-control p-2 mt-1 bg-[#f9f9f9] border-[#ccc] border-[2px] w-full inter text-sm text-[#000]" aria-describedby="date" placeholder='Your First Name' />
                    <label className='pop text-[#000] text-base'>First Name*</label>
                    <input type="text" className="form-control p-2 mt-1 bg-[#f9f9f9] border-[#ccc] border-[2px] w-full inter text-sm text-[#000]" aria-describedby="date" placeholder='Your First Name' />
                    <label className='pop text-[#000] text-base'>First Name*</label>
                    <input type="text" className="form-control p-2 mt-1 bg-[#f9f9f9] border-[#ccc] border-[2px] w-full inter text-sm text-[#000]" aria-describedby="date" placeholder='Your First Name' />
                    <label className='pop text-[#000] text-base'>First Name*</label>
                    <input type="text" className="form-control p-2 mt-1 bg-[#f9f9f9] border-[#ccc] border-[2px] w-full inter text-sm text-[#000]" aria-describedby="date" placeholder='Your First Name' />
                    <label className='pop text-[#000] text-base'>First Name*</label>
                    <input type="text" className="form-control p-2 mt-1 bg-[#f9f9f9] border-[#ccc] border-[2px] w-full inter text-sm text-[#000]" aria-describedby="date" placeholder='Your First Name' />
                    <label className='pop text-[#000] text-base'>First Name*</label>
                    <input type="text" className="form-control p-2 mt-1 bg-[#f9f9f9] border-[#ccc] border-[2px] w-full inter text-sm text-[#000]" aria-describedby="date" placeholder='Your First Name' />
                    <label className='pop text-[#000] text-base'>First Name*</label>
                    <input type="text" className="form-control p-2 mt-1 bg-[#f9f9f9] border-[#ccc] border-[2px] w-full inter text-sm text-[#000]" aria-describedby="date" placeholder='Your First Name' />
                    <label className='pop text-[#000] text-base'>First Name*</label>
                    <input type="file" className="form-control p-2 mt-1 bg-[#f9f9f9] border-[#ccc] border-[2px] w-full inter text-sm text-[#000]" aria-describedby="date" placeholder='Your First Name' />
          </div>
          <div className='custom-footer d-flex items-center'>
            <Button variant="success me-2 p-3 w-40">Submit Request</Button>
            <Button variant="secondary me-2 p-3 w-40" onClick={onHide}>Cancel</Button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default CrewExpenseRequest;
