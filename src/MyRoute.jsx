import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import WebDevelopment from "./pages/WebDevelopment";
import GraphicDesign from "./pages/GraphicDesign";
import DigitalMarketing from "./pages/DigitalMarketing";
import SoftwareDevelopment from "./pages/SoftwareDevelopment";

const MyRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services/>}/>
      <Route path="/services/webdevelopment" element={<WebDevelopment/>}/>
      <Route path="/services/graphicdesign" element={<GraphicDesign/>}/>
      <Route path="/services/digitalmarketing" element={<DigitalMarketing/>}/>
      <Route path="/services/softwaredevelopment" element={<SoftwareDevelopment/>}/>


    </Routes>
  );
};

export default MyRoute;
