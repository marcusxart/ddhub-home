import React, { useEffect, useState } from "react";
import Landing from "./pages/Landing";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  const [toggle, setToggle] = useState(false);
  const [mobileSize, setMobileSize] = useState(window.innerWidth < 900);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleResize = () => {
    if (window.innerWidth > 900) {
      setToggle(false);
    }
    setMobileSize(window.innerWidth < 900);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="App">
      <Header
        mobileSize={mobileSize}
        handleToggle={handleToggle}
        toggle={toggle}
      />
      <Landing mobileSize={mobileSize} />
      <Footer />
    </div>
  );
}

export default App;
