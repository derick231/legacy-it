import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import WebDevelopment from "./pages/WebDevelopment";
import GraphicDesign from "./pages/GraphicDesign";
import DigitalMarketing from "./pages/DigitalMarketing";

const MyRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services/>}/>
      <Route path="/webdevelopment" element={<WebDevelopment/>}/>
      <Route path="/graphicdesign" element={<GraphicDesign/>}/>
      <Route path="/digitalmarketing" element={<DigitalMarketing/>}/>


    </Routes>
  );
};

export default MyRoute;
