import React, { useEffect, useState } from "react";

import { Brand, CTA, Navbar } from './components';
import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from './containers';

import './App.css';

function App() {
  const [active, setActive] = useState(false);

  const isActive = () => {
   window.scrollY > 0 ? setActive(true) : setActive(false);
  }
 
   useEffect(() => {
     window.addEventListener('scroll', isActive);
     return () => {
       window.removeEventListener("scroll", isActive)
     }
   }, [])
  return (
    <div className="App">
      <div className="gradient_bg">
        <div className={` header-fixed ${active ? `bg`: null}`}> 
         <Navbar/>
        </div>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
