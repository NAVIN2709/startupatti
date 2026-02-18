import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import TeamPage from "./pages/TeamPage";
import EventGallery from "./pages/EventGallery";
import ScrollToTop from "./components/ScrollToTop"; // Helper to scroll top on route change
import EventDetails from "./pages/EventDetails";

const App = () => {
  return (
    <Router>
      <div className="bg-[#050505] min-h-screen text-white font-sans">
        <Navbar />

        <main>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/event/:id" element={<EventDetails />} />
            <Route path="/events/:month" element={<EventGallery />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
