

function Header() {
  return (
    <header className="d-flex justify-content-between align-items-center p-3 bg-light border-bottom">
      <div>Welcome aboard! | HMS Black Widow | M/Y</div>
      <div>01:53:43 PM | October 30, 2024</div>
      <div className="d-flex align-items-center">
        <span>Last Sync: 08/30/2024, 10:15 AM</span>
        <img src="./public/user-profile.png" alt="User" className="ms-3 rounded-circle" style={{ width: '40px', height: '40px' }} />
      </div>
    </header>
  );
}

export default Header;
