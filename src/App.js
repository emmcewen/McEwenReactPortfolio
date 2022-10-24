import React from "react"
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
export default function App(){
  return(
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Contact />
      <Resume />
      <Footer />
    </main>
  );
}