import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import Contact from "./pages/Contact";
import { AboutUs } from "./pages/AboutUs";
import Career from "./pages/Career";
import BusinessUnits from "./pages/BusinessUnits";
import Sustainability from "./pages/Sustainability";
import MediaCenter from "./pages/MediaCenter";
import Other from "./pages/Other";
import Header from "./components/landing/Header";
import SliderPage from "./pages/SliderPage";
import CustomSlider from "./pages/CustomSlider";
import CustomCard from "./pages/CustomCard";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/business-units" element={<BusinessUnits />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/media-center" element={<MediaCenter />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/career" element={<Career />} />
        <Route path="/other" element={<Other />} />
        <Route path="/slider-page" element={<SliderPage />} />
        <Route path="/custom-slider" element={<CustomSlider />} />
        <Route path="/custom-card" element={<CustomCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
