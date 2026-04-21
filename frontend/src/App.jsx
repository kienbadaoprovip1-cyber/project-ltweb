import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import AboutUs from './pages/AboutUs';
import Library from './pages/Library';
import Home from './pages/Home'; 

function App() {
  return (
    <Router>
      <div className="game-app-container">
        <header className="header">
          <h1 className="logo">GameStore</h1>
          <nav className="nav-menu">
            <ul>
              <li><Link to="/">Cửa hàng</Link></li>
              <li><Link to="/about-us">Giới thiệu</Link></li>
              <li><Link to="/library">Thư viện</Link></li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/library" element={<Library />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;