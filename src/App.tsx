import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import AboutUs from "./Pages/AboutUs";
import Solutions from "./Pages/Solutions";
import Footer from "./components/Footer";
import Navbar from "./components/navbar";
import Workshop from "./Pages/Workshop";
import Product from "./Pages/Product";
import Services from "./Pages/Services";
import News from "./Pages/News";
import ContactUs from "./Pages/ContactUs";

function App() {

  return (
    <>
    <BrowserRouter>
          <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About-Us" element={<AboutUs />} />
          <Route path="/Solutions" element={<Solutions />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Workshops" element={<Workshop />} />
          <Route path="/News" element={<News />} />
          <Route path="/Contact-Us" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
    <Footer />
    </>
  )
}

export default App
