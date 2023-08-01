import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Red from "./Red";
import Orange from "./Orange";
import Blue from "./Blue";
import Lavender from "./Lavender";

const Main = () => {
  return (
    <div id="main-section">
      <Routes>
        <Route path="/blue" element={<Blue />} />
        <Route path="/red" element={<Red />} />
        <Route path="/orange" element={<Orange />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Lavender" element={<Lavender />}/>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default Main;
