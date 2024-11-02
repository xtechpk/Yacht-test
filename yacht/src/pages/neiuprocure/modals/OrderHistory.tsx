import React from 'react';

interface OrderHistoryProps {
  show: boolean;         // 'show' is a boolean indicating visibility
  onHide: () => void;    // 'onHide' is a function to hide the component/modal
}

const OrderHistory: React.FC<OrderHistoryProps> = ({ show, onHide }) => {
  return (
    <div>
      <h2>Order History</h2>
      {show && (
        <div>
          {/* You can add your order history content here */}
          <button onClick={onHide}>Close</button>
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
