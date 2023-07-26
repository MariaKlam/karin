import "./App.css";
import Header from "./components/Header/Header";
import "./assets/js/script";
import Services from "./components/Services/Services";
import About from "./components/About/About";

import Features from "./components/Features/Features";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import MyVideoSlider from "./components/MyVideoSlider";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Services />
        <MyVideoSlider />

        <Features />

        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
