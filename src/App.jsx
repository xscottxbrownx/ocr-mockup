// React Router Imports
import { Routes, Route } from "react-router-dom";
// Component Imports
import ErrorPage from "./routes/ErrorPage";
import Home from "./routes/Home";
import Locations from "./routes/Locations";
import Obstacles from "./routes/Obstacles";
import Volunteer from "./routes/Volunteer";
import About from "./routes/About";
import FAQ from "./routes/FAQ";
import Layout from "../src/layouts/Layout";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="Home" element={<Home />} />
        <Route path="Locations" element={<Locations />} />
        <Route path="Obstacles" element={<Obstacles />} />
        <Route path="Volunteer" element={<Volunteer />} />
        <Route path="About" element={<About />} />
        <Route path="FAQ" element={<FAQ />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
