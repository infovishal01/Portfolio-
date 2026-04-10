import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

import "./App.css";

// ✅ NEW IMPORTS
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import Navbar from "./components/Navbar";
import Home from "./Routes/Home/Home";
import About from "./components/About";
import Dev from "./components/Dev";

import CustomLoader from "./components/CustomLoader";
import Footer from "./components/Footer";
import Mycontact from "./components/Mycontact/Mycontact";

function App() {
  const [loading, setLoading] = useState(false);

  // ✅ UPDATED INIT
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  // ❌ REMOVE THIS (not needed)
  // const particlesLoaded = async (container) => {
  //   console.log(container);
  // };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">

      {/* ✅ PARTICLES */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "#000000" } },
          fullScreen: { enable: true, zIndex: -1 },
          particles: {
            number: { value: 80 },
            color: { value: "#ffffff" },
            size: { value: 3 },
            move: { enable: true, speed: 2 },
          },
        }}
      />

      {loading ? (
        <CustomLoader />
      ) : (
        <div className="app__container">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/dev" element={<Dev />} />
            <Route path="/Mycontact" element={<Mycontact />} />
            <Route path="*" element={<Home />} />
          </Routes>

          <Footer />
          <ScrollToTop smooth color="black" />
        </div>
      )}
    </div>
  );
}

export default App;