"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AttiPerksDrawer from "./components/AttiPerksDrawer";
import MobilePerkButton from "./components/MobilePerkButton";

export default function ClientLayout({ children }) {
  const [isPerksOpen, setIsPerksOpen] = useState(false);

  return (
    <>
      <Navbar onOpenPerks={() => setIsPerksOpen(true)} />
      {children}
      <Footer />

      {/* Perks System */}
      <MobilePerkButton onClick={() => setIsPerksOpen(true)} />
      <AttiPerksDrawer
        isOpen={isPerksOpen}
        onClose={() => setIsPerksOpen(false)}
      />
    </>
  );
}
