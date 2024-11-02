import React from 'react';

interface FinalApprovalProps {
  show: boolean;         // 'show' is a boolean indicating visibility
  onHide: () => void;    // 'onHide' is a function to hide the component/modal
}

const FinalApproval: React.FC<FinalApprovalProps> = ({ show, onHide }) => {
  return (
    <div>
      {show ? (
        <div>
          <h2>Final Approval</h2>
          {/* Your final approval content goes here */}
          <button onClick={onHide}>Close</button>
        </div>
      ) : null}
    </div>
  );
};

export default FinalApproval;
