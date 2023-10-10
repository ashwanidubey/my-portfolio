import React from 'react'
import {  Link , useLocation } from "react-router-dom";
export default function 
() {
  return (
    <div>
        <Link className={`nav-link}`} aria-current="page" to="/">Home</Link>
      <Link className={`nav-link}`} aria-current="page" to="/education">Education</Link>
    <Link className={`nav-link}`} aria-current="page" to="/experience">Experience</Link>
<Link className={`nav-link}`} aria-current="page" to="/projects">Projects</Link>
<Link className={`nav-link}`} aria-current="page" to="/skills">Skills</Link>

    </div>
  )
}
