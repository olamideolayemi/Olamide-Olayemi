import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Header from "./components/header/Header";
import Page404 from "./components/pages/Page404";
import Footer from "./components/footer/Footer";
import { ThemeProvider } from "./components/themeContext/ThemeContext";
import { useState, useEffect } from "react";
import "./App.css"; // Import the custom CSS file

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <ThemeProvider>
        <Header />
        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<Page404 />} />
          </Routes>
        </div>
        <Footer />

        {/* Glow Effect */}
        <div
          className="cursor-glow"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
          }}
        ></div>
      </ThemeProvider>
    </>
  );
}

export default App;
