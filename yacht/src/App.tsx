import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header'; // Example page component
import Dashboard from './pages/neiudash/Dashboard';
import Neiuprocure from './pages/neiuprocure/Neiuprocure';

function App() {
  return (
    <Router>
      <div className="d-flex bg-blue-500">
        <Sidebar />
        <div className="flex-grow-1" style={{ marginLeft: '290px' }}>
          <Header />
          <div className="p-4 bg-[#D9D9D9]">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="NEIUDASH" element={<Dashboard />} />
              <Route path="/NEIUPROCURE" element={<Neiuprocure />} />
              <Route path="/NIEUSTOCK" element={<Dashboard />} />
              <Route path="/NIEUMATRIX" element={<Dashboard />} />
              <Route path="/NIEUSET" element={<Dashboard />} />
              <Route path="/NIEUMANAGE" element={<Dashboard />} />
              <Route path="/NIEUADMIN" element={<Dashboard />} />
              <Route path="/NIEUCOMS" element={<Dashboard />} />
              <Route path="/NIEUGAURD" element={<Dashboard />} />
              <Route path="/NIEUWORKFORCE" element={<Dashboard />} />
              <Route path="/NIEUZONE" element={<Dashboard />} />
              <Route path="/NIEUZONE_BASIC" element={<Dashboard />} />
              <Route path="/NIEUZONE_INTERMEDIATE" element={<Dashboard />} />
              <Route path="/NIEUZONE_ADVANCE" element={<Dashboard />} />
              <Route path="/NIEUTEMPLATE" element={<Dashboard />} />
              <Route path="/NIEUCAL" element={<Dashboard />} />
              <Route path="/NIEUFINACE" element={<Dashboard />} />

            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
