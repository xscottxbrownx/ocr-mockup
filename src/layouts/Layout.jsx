// React Router Imports
import { Outlet } from "react-router-dom";
// Material UI Imports
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// Component Imports
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const style = {
  margin: 0,
  top: "auto",
  right: 20,
  bottom: 50,
  left: "auto",
  position: "fixed",
};

export default function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Fab
        color="primary"
        style={style}
        aria-label="scroll back to top"
        href="#top"
      >
        <KeyboardArrowUpIcon />
      </Fab>
      <Newsletter />
      <Footer />
    </>
  );
}
