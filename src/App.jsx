import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import EventGallery from "./pages/EventGallery";
import ScrollToTop from "./components/ScrollToTop"; // Helper to scroll top on route change

function App() {
  return (
    <Router>
      <div className="bg-[#050505] min-h-screen text-white font-sans">
        <ScrollToTop />
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events/:month" element={<EventGallery />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
