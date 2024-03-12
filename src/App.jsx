import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./layout/Footer";
import Header from "./layout/Header/Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Realisations from "./pages/realisations/Realisations";

function App() {
  return (
    <BrowserRouter>
      <div className="overflow-auto">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/realisations" element={<Realisations />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
