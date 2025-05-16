import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LocationPage from './pages/LocationPage';
import RoomPage from './pages/RoomPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage  />} />
           <Route path="/location" element={<LocationPage />} />
           <Route path="/room" element={<RoomPage />} />
           <Route path="/gallery" element={<GalleryPage />} />
           <Route path="/contact" element={<ContactPage />} />
          {/* <Route path="About" element={<AboutPage />} />
          <Route path="*" element={<HomePage />} />  */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;