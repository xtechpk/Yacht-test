
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Sidebar.css';

function Sidebar() {
  const location = useLocation();

  return (
    <div
      className="bg-[#0A73BA] text-white vh-100 position-fixed"
      style={{ width: "290px", overflowY: "auto", backgroundColor: "#0A73BA" }}
    >
      <div className="d-flex flex-column align-items-center py-4 ">
        <img
          src="./public/logo.png"
          className="img-fluid mb-4"
          style={{ width: "120px", height: "120px" }}
          alt="logo"
        />
      </div>
      <nav className="flex-column text-center">
        <ul className="flex-column mb-auto px-2">
          <li className="flex items-center space-x-4 mb-1">
            <Link
              to="/NEIUDASH"
              className={`flex items-center ${location.pathname === "/NEIUDASH" ? "active-link" : ""}`}
              style={{ display: 'flex', alignItems: 'center', padding: '10px', borderRadius: '10px' }}
            >
              <img src="./home.png" alt="home" className="w-8 h-7.5 me-2" />
              <h5 className="text-white font-medium font-open-sans mb-0">NEIUDASH</h5> 
            </Link>
          </li>
          <li className="flex items-center space-x-4 mb-1">
            <Link
              to="/NEIUPROCURE"
              className={`flex items-center ${location.pathname === "/NEIUPROCURE" ? "active-link" : ""}`}
              style={{ display: 'flex', alignItems: 'center', padding: '10px', borderRadius: '10px' }}
            >
              <img src="./Shopping Cart.png" alt="procure" className="w-8 h-7.5 me-2" />
              <h5 className="text-white font-medium font-open-sans mb-0">NEIUPROCURE</h5>
            </Link>
          </li>
          <li className="flex items-center space-x-4 mb-1">
            <Link
              to="/NIEUSTOCK"
              className={`flex items-center ${location.pathname === "/NIEUSTOCK" ? "active-link" : ""}`}
              style={{ display: 'flex', alignItems: 'center', padding: '10px', borderRadius: '10px' }}
            >
              <img src="./Boxes.png" alt="stock" className="w-8 h-7.5 me-2" />
              <h5 className="text-white font-medium font-open-sans mb-0">NIEUSTOCK</h5>
            </Link>
          </li>
          <li className="flex items-center space-x-4 mb-1">
            <Link
              to="/NIEUMATRIX"
              className={`flex items-center ${location.pathname === "/NIEUMATRIX" ? "active-link" : ""}`}
              style={{ display: 'flex', alignItems: 'center', padding: '10px', borderRadius: '10px' }}
            >
              <img src="./Boxes.png" alt="stock" className="w-8 h-7.5 me-2" />
              <h5 className="text-white font-medium font-open-sans mb-0">NIEUMATRIX</h5>
            </Link>
          </li>
          <li className="flex items-center space-x-4 mb-1">
            <Link
              to="/NIEUSET"
              className={`flex items-center ${location.pathname === "/NIEUSET" ? "active-link" : ""}`}
              style={{ display: 'flex', alignItems: 'center', padding: '10px', borderRadius: '10px' }}
            >
              <img src="./Request Service.png" alt="stock" className="w-8 h-7.5 me-2" />
              <h5 className="text-white font-medium font-open-sans mb-0">NIEUSET</h5>
            </Link>
          </li>
          <li className="flex items-center space-x-4 mb-1">
            <Link
              to="/NIEUMANAGE"
              className={`flex items-center ${location.pathname === "/NIEUMANAGE" ? "active-link" : ""}`}
              style={{ display: 'flex', alignItems: 'center', padding: '10px', borderRadius: '10px' }}
            >
              <img src="./Admin Settings Male.png" alt="stock" className="w-8 h-7.5 me-2" />
              <h5 className="text-white font-medium font-open-sans mb-0">NIEUMANAGE</h5>
            </Link>
          </li>
          <li className="flex items-center space-x-4 mb-1">
            <Link
              to="/NIEUADMIN"
              className={`flex items-center ${location.pathname === "/NIEUADMIN" ? "active-link" : ""}`}
              style={{ display: 'flex', alignItems: 'center', padding: '10px', borderRadius: '10px' }}
            >
              <img src="./Secure.png" alt="stock" className="w-8 h-7.5 me-2" />
              <h5 className="text-white font-medium font-open-sans mb-0">NIEUADMIN</h5>
            </Link>
          </li>
          <li className="flex items-center space-x-4 mb-1">
            <Link
              to="/NIEUCOMS"
              className={`flex items-center ${location.pathname === "/NIEUCOMS" ? "active-link" : ""}`}
              style={{ display: 'flex', alignItems: 'center', padding: '10px', borderRadius: '10px' }}
            >
              <img src="./Communication.png" alt="stock" className="w-8 h-7.5 me-2" />
              <h5 className="text-white font-medium font-open-sans mb-0">NIEUCOMS</h5>
            </Link>
          </li>
          <li className="flex items-center space-x-4 mb-1">
            <Link
              to="/NIEUGAURD"
              className={`flex items-center ${location.pathname === "/NIEUGAURD" ? "active-link" : ""}`}
              style={{ display: 'flex', alignItems: 'center', padding: '10px', borderRadius: '10px' }}
            >
              <img src="./Settings.png" alt="stock" className="w-8 h-7.5 me-2" />
              <h5 className="text-white font-medium font-open-sans mb-0">NIEUGAURD</h5>
            </Link>
          </li>
          <li className="flex items-center space-x-4 mb-1">
            <Link
              to="/NIEUWORKFORCE"
              className={`flex items-center ${location.pathname === "/NIEUWORKFORCE" ? "active-link" : ""}`}
              style={{ display: 'flex', alignItems: 'center', padding: '10px', borderRadius: '10px' }}
            >
              <img src="./Flight Crew.png" alt="stock" className="w-8 h-7.5 me-2" />
              <h5 className="text-white font-medium font-open-sans mb-0">NIEUWORKFORCE</h5>
            </Link>
          </li>
          <li className="flex items-center space-x-4 mb-1">
            <Link
              to="/NIEUZONE"
              className={`flex items-center ${location.pathname === "/NIEUZONE" ? "active-link" : ""}`}
              style={{ display: 'flex', alignItems: 'center', padding: '10px', borderRadius: '10px' }}
            >
              <img src="./Location.png" alt="stock" className="w-8 h-7.5 me-2" />
              <h5 className="text-white font-medium font-open-sans mb-0">NIEUZONE</h5>
            </Link>
          </li>
          <li className="flex items-center space-x-4 mb-1">
            <Link
              to="/NIEUWORK_BASIC"
              className={`flex items-center ${location.pathname === "/NIEUWORK_BASIC" ? "active-link" : ""}`}
              style={{ display: 'flex', alignItems: 'center', padding: '10px', borderRadius: '10px' }}
            >
              <img src="./Map Pin.png" alt="stock" className="w-8 h-7.5 me-2" />
              <h5 className="text-white font-medium font-open-sans mb-0">NIEUWORK BASIC</h5>
            </Link>
          </li>
          <li className="flex items-center space-x-4 mb-1">
            <Link
              to="/NIEUZONE_INTERMEDIATE"
              className={`flex items-start ${location.pathname === "/NIEUZONE_INTERMEDIATE" ? "active-link" : ""}`}
              style={{ display: 'flex', alignItems: 'center', padding: '10px', borderRadius: '10px' }}
            >
              <img src="./Scania.png" alt="stock" className="w-8 h-7.5 me-2" />
              <h5 className="text-white font-medium font-open-sans mb-0">NEIUZONE INTERMEDIATE</h5>
            </Link>
          </li>
          <li className="flex items-center space-x-4 mb-1">
            <Link
              to="/NIEUZONE_ADVANCE"
              className={`flex items-start ${location.pathname === "/NIEUZONE_ADVANCE" ? "active-link" : ""}`}
              style={{ display: 'flex', alignItems: 'start', padding: '10px', borderRadius: '10px' }}
            >
              <img src="./3D Object.png" alt="stock" className="w-8 h-7.5 me-2" />
              <h5 className="text-white font-medium font-open-sans mb-0">NIEUZONE ADVANCE</h5>
            </Link>
          </li>
          <li className="flex items-center space-x-4 mb-1">
            <Link
              to="/NIEUTEMPLATE"
              className={`flex items-center ${location.pathname === "/NIEUTEMPLATE" ? "active-link" : ""}`}
              style={{ display: 'flex', alignItems: 'start', padding: '10px', borderRadius: '10px' }}
            >
              <img src="./Joomla.png" alt="stock" className="w-8 h-7.5 me-2" />
              <h5 className="text-white font-medium font-open-sans mb-0">NIEUTEMPLATE</h5>
            </Link>
          </li>
          <li className="flex items-center space-x-4 mb-1">
            <Link
              to="/NIEUCAL"
              className={`flex items-center ${location.pathname === "/NIEUCAL" ? "active-link" : ""}`}
              style={{ display: 'flex', alignItems: 'start', padding: '10px', borderRadius: '10px' }}
            >
              <img src="./Calendar.png" alt="stock" className="w-8 h-7.5 me-2" />
              <h5 className="text-white font-medium font-open-sans mb-0">NIEUCAL</h5>
            </Link>
          </li>
          <li className="flex items-center space-x-4 mb-1">
            <Link
              to="/NIEUFINANCE"
              className={`flex items-center ${location.pathname === "/NIEUFINANCE" ? "active-link" : ""}`}
              style={{ display: 'flex', alignItems: 'center', padding: '10px', borderRadius: '10px' }}
            >
              <img src="././Bribery.png" alt="stock" className="w-8 h-7.5 me-2" />
              <h5 className="text-white font-medium font-open-sans mb-0">NIEUFIANCE</h5>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;


