import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AttiPerksDrawer from "./components/AttiPerksDrawer";
import MobilePerkButton from "./components/MobilePerkButton";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import TeamPage from "./pages/TeamPage";
import EventGallery from "./pages/EventGallery";
import ScrollToTop from "./components/ScrollToTop";
import EventDetails from "./pages/EventDetails";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

const App = () => {
  const [isPerksOpen, setIsPerksOpen] = useState(false);

  return (
    <Router>
      <div className="bg-[#050505] min-h-screen text-white font-sans">
        <Navbar onOpenPerks={() => setIsPerksOpen(true)} />

        <main>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/event/:slug" element={<EventDetails />} />
            <Route path="/events/:month" element={<EventGallery />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            {/* Catch-all route to display homepage for any unmatched path */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <Footer />

        {/* Global Perks Components */}
        <MobilePerkButton onClick={() => setIsPerksOpen(true)} />
        <AttiPerksDrawer
          isOpen={isPerksOpen}
          onClose={() => setIsPerksOpen(false)}
        />
      </div>
    </Router>
  );
};

export default App;
