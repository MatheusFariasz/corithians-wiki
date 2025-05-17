import { Routes, Route } from "react-router-dom";
import Home from "./home";
import Players from "./components/Sections/Players";
import Titles from "./components/Sections/Titles";
import Footer from "./components/Structure/Footer";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/players" element={<Players />} />
        <Route path="/titles" element={<Titles />} />
        <Route path="/github" element={"https://github.com/MatheusFariasz"}/>
      </Routes>
      <Footer />
    </>
  );
}