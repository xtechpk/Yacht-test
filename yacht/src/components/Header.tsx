import { FaShoppingCart, FaBell } from 'react-icons/fa';

function Header() {
  return (
    <header className="d-flex justify-content-between align-items-center p-3 bg-light border-bottom">

      <div>
        Welcome aboard! | HMS Black Widow, M/Y
      </div>


      <div className="text-center">
        <span className="me-3">01:53:43 PM</span> 
        <span>October 30, 2024</span>
      </div>
      <div className="d-flex align-items-center">

        <div className="position-relative me-3">
          <FaShoppingCart size={20} />
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
            3
          </span>
        </div>


        <div className="position-relative me-3">
          <FaBell size={20} />
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
            12
          </span>
        </div>

        <div className="d-flex align-items-center">
          <span className="me-2">Kathryn Murphy</span>
          <img src="https://images.unsplash.com/photo-1684966610091-f6beda2d025a?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="User" className="rounded-circle" style={{ width: '40px', height: '40px' }} />
        </div>
      </div>
    </header>
  );
}

export default Header;
