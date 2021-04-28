// import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
// import Sidebar from "./components/Sidebar";
// import reactDom from "react-dom";

function App() {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggle = () => {
  //   setIsOpen(!isOpen);
  // };
  return (
    <div className="App">
      <Navbar  />
      <Header />
      <About />
      <Projects />
      <Contact />
      {/* <Sidebar isOpen={isOpen} toggle={toggle} /> */}
    </div>
  );
}

export default App;
