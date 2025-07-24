import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Hobbies from "./components/Hobbies";
import Contact from "./components/Contact";
import Cursor from "./assets/Cursor";
import Certificate from "./components/Certificate";

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/certificate" element = {<Certificate/>}/>
      </Routes>
    </div>
  );
};

export default App;
