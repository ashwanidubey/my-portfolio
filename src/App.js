import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Pagination from "./components/Pagination";
import { useState } from "react";

function App() {
  const[count,setCount]=useState(0);
  return (
    <BrowserRouter>
    <Navbar count={count} setCount={setCount}/>
    <div className='container content-container' style={{height:"100%"}}>   
      <Routes>
        <Route path="/" element={<Home count={count} setCount={setCount}/>} />
        <Route path="/skills" element={<><Skills  count={count} setCount={setCount} /></>} />
        <Route path="/projects" element={<><Project  count={count} setCount={setCount} /></>} />
        <Route path="/education" element={<><Education  count={count} setCount={setCount} /></>} />
        <Route path="/experience" element={<><Experience  count={count} setCount={setCount} /></>} />   
      </Routes>
      <Pagination count={count} setCount={setCount} />
    </div>
     <Footer />
  </BrowserRouter>
  );
}

export default App;
