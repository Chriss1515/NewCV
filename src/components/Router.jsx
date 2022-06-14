import { Routes, Route } from "react-router-dom";
import Experience from "./Experience";
import Profil from "./Profil";
import Skills from "./Skills";
const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/profil" exact element={<Profil />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/other" element={<Experience />} />
      </Routes>
    </>
  );
};
export default Routing;
