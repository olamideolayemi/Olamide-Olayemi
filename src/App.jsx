import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Header from "./components/header/Header"
import Page404 from "./components/pages/Page404"
import Footer from "./components/footer/Footer"
import { ThemeProvider } from "./components/themeContext/ThemeContext"

function App() {

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
      </ThemeProvider>
    </>
  )
}

export default App
