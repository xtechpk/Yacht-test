import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../styles/PurchaseRequestDetails.css'; 
import NewPurchaseRequest from './NewpurchaseRequest';


interface PurchaseRequestDetailsProps {
  show: boolean;         // 'show' is a boolean
  onHide: () => void;    // 'onHide' is a function with no parameters and no return value
}

const PurchaseRequestDetails: React.FC<PurchaseRequestDetailsProps> = ({ show, onHide }) => {

  const [showNewRequest, setShowNewRequest] = useState(false);

  const handleApproveClick = () => {
    setShowNewRequest(true); 
    onHide(); 
  };

  const handleCloseNewRequest = () => {
    setShowNewRequest(false); 
  };

  return (
    <>
      <Modal show={show} onHide={onHide} centered dialogClassName="custom-modal-width">
        <div className="custom-container">
          <div className="custom-header d-flex justify-content-between align-items-center">
            <h4 className='ubuntu text-center align-middle'>Purchase Request Details</h4>
          </div>
          <div className="custom-body" style={{ backgroundColor: "#D9D9D9" }} >
            <table className="table" >
              <tbody >
                <tr >
                  <td className='inter' style={{ backgroundColor: "#D9D9D9" }}>Request Type:</td>
                  <td className='inter' style={{ backgroundColor: "#D9D9D9" }}>Purchase Order (Consumables)</td>
                </tr>
                <tr>
                  <td className='inter' style={{ backgroundColor: "#D9D9D9" }}>Status:</td><td style={{ backgroundColor: "#D9D9D9" }}>Pending Approval</td>
                </tr>
                <tr>
                  <td className='inter' style={{ backgroundColor: "#D9D9D9" }}>Date Submitted:</td><td style={{ backgroundColor: "#D9D9D9" }}>2024-08-17</td>
                </tr>
                <tr>
                  <td className='inter' style={{ backgroundColor: "#D9D9D9" }}>Requester:</td><td style={{ backgroundColor: "#D9D9D9" }}>Jane Smith</td>
                </tr>
                <tr><td className='inter' style={{ backgroundColor: "#D9D9D9" }}>Supplier:</td><td style={{ backgroundColor: "#D9D9D9" }}>ABC Supplies</td></tr>
                <tr><td className='inter' style={{ backgroundColor: "#D9D9D9" }}>Budget Code:</td><td style={{ backgroundColor: "#D9D9D9" }}>Operations-2024</td></tr>
                <tr><td className='inter' style={{ backgroundColor: "#D9D9D9" }}>Items Requested:</td><td style={{ backgroundColor: "#D9D9D9" }} >
                 <ul >
                    <li className='inter' >Item 1: 10x Wrench - $50</li>
                    <li className='inter' >Item 2: 5x Screwdriver Set - $25</li>
                  </ul>
                </td></tr>
                <tr><td className='inter' style={{ backgroundColor: "#D9D9D9" }}>Total Amount:</td><td style={{ backgroundColor: "#D9D9D9" }}>$75</td></tr>
                <tr><td className='inter' style={{ backgroundColor: "#D9D9D9" }}>Additional Notes:</td><td style={{ backgroundColor: "#D9D9D9" }}>Urgent delivery required by end of the week.</td></tr>
              </tbody>
            </table>
          </div>
          <div className="custom-footer d-flex justify-content-center items-center mt-4 gap-8">
            <Button variant="success me-2 p-3 w-40" onClick={handleApproveClick}>Approve</Button>
            <Button variant="danger me-2 p-3 w-40" >Reject</Button>
            <Button variant="secondary me-2 p-3 w-40" onClick={onHide}>Back to List</Button>
          </div>

        </div>
      </Modal>

      {/* Render NewPurchaseRequest modal */}
      <NewPurchaseRequest show={showNewRequest} onHide={handleCloseNewRequest} />
    </>
  );
}

export default PurchaseRequestDetails;
