// React Router Imports
import { Outlet } from "react-router-dom";
// Material UI Imports
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// Component Imports
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

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
      <Outlet />
      <Fab color="primary" style={style} aria-label="scroll back to top">
        <a href="#top" style={{ color: "white" }}>
          <KeyboardArrowUpIcon />
        </a>
      </Fab>
      <Footer />
    </>
  );
}
