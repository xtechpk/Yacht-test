import { Button, Modal } from 'react-bootstrap';
import React from 'react';

interface OrderReviewProps {
  show: boolean;              // Define 'show' as a boolean
  onHide: () => void;         // Define 'onHide' as a function with no parameters and no return value
}

const OrderReview: React.FC<OrderReviewProps> = ({ show, onHide }) => {
  return (
    <>
      <Modal
        show={show}
        onHide={onHide}
        centered
        dialogClassName="custom-modal-width"
      >
        <div className="custom-container">
          <h4 className="custom-header">Order Review and Split</h4>
            <div className="custom-body" ></div>
          <div className="custom-footer d-flex justify-content-center align-items-center mt-4 gap-8">
            <Button variant="success me-2 p-3 w-40">Proceed</Button>
            <Button variant="secondary me-2 p-3 w-40">Back to List</Button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default OrderReview;
