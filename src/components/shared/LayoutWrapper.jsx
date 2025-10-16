"use client";
import { usePathname, useRouter } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TopBar from "./Topbar";

export default function LayoutWrapper({ children }) {
  return (
    <>
      <TopBar />
      <Navbar />

      {children}
      <Footer />
    </>
  );
}
