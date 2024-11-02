import React from 'react'
import { Button, Modal } from 'react-bootstrap'

function OrderReview({show ,  onHide}) {
  return (
    <>
        <Modal
        show={show}
        onHide={onHide}
        centered
        dialogClassName="custom-modal-width"
      >
        <div>
        <div className="custom-footer d-flex justify-content-center items-center mt-4 gap-8">
            <Button variant="success me-2 p-3 w-40" >Proceed</Button>
            <Button variant="secondary me-2 p-3 w-40" >Back to List</Button>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default OrderReview