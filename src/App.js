import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import AboutUs from './pages/aboutUs';
import Header from './layout/header';
import Footer from './layout/footer';
import Services from './pages/services';
import Portfolio from './pages/portfolio';
import OurTeam from './pages/ourTeam';
import ContactUs from './pages/contactUs';

function App() {
  return (
    <BrowserRouter>
      <div id="page" className="site">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="services" element={<Services />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="our-team" element={<OurTeam />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
