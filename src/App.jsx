
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import Booking from './pages/Booking';
import Errorpage from './pages/Errorpage';
import Footer from './components/Footer';
import Subscribe from './components/Subscribe';


function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Home" element={<Home />} /> 
    <Route path="/AboutUs" element={<AboutUs />} />
    <Route path="/Services" element={<Services />} />
    <Route path="/ContactUs" element={<ContactUs />} /> 
    <Route path="/Booking" element={<Booking />} />
    <Route path="/Errorpage" element={<Errorpage />} />
    </Routes>
     <Subscribe />
     <Footer />
    </BrowserRouter>

  )
}

export default App;