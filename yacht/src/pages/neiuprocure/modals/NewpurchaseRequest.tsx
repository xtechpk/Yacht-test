// NewPurchaseRequest.js
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../styles/NewPurchaseRequest.css';
import CrewExpenseRequest from './CrewExpenseRequest';


interface NewPurchaseRequestProps {
  show: boolean;        // 'show' is a boolean
  onHide: () => void;   // 'onHide' is a function with no parameters and no return value
}

const NewPurchaseRequest: React.FC<NewPurchaseRequestProps> = ({ show, onHide }) => {


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
          <div className="custom-body1 borddr rounded-lg p-4" style={{ backgroundColor: "#D9D9D9" }}>
            <p style={{ backgroundColor: "#D9D9D9" }}>Select Purchase Request Type:</p>
            <select
        className="form-control mb-4"
        style={{ backgroundColor: "#D9D9D9", appearance: "none", paddingRight: "2rem" }}
      >
        <option>Purchase Order (Operational) - (Survey)</option>
        <option>Crew Expense</option>
        <option>Purchase Order (Consumables)</option>
        <option>Purchase Order (Maintenance)</option>
        <option>Purchase Order (Emergency / Medical)</option>
        <option>Purchase Order (Contractors) - (Training) - (Survey)</option>
      </select>
      <img src="./Expand Arrow.png"
        style={{
          position: "absolute",
          right: "10%",
          top: "36.5%",
          transform: "translateY(-50%)",
          pointerEvents: "none",
          color: "#666", 
        }}
      />
          </div>
          <div className="custom-footer d-flex justify-content-center items-center mt-4 gap-8">
            <Button variant="inter fw-bold me-2 p-3 w-40" onClick={handleProceedClick} style={{backgroundColor:"#238600" , color: "#fff"}}>Proceed</Button>
            <Button variant="inter fw-bold me-2 p-3 w-40" onClick={onHide} style={{backgroundColor:"#860000" , color: "#fff"}}>Back to List</Button>
          </div>

        </div>
      </Modal>

      {/* Show CrewExpenseRequest modal when showCrewExpenseRequest is true */}
      <CrewExpenseRequest show={showCrewExpenseRequest} onHide={handleCloseCrewExpenseRequest} />
    </>
  );
}

export default NewPurchaseRequest;
