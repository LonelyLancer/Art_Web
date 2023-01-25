import "./App.css";
import "./index.css";
import React, { Component } from "react";
import FirstBg from "./pics/first_bg.png"
/* ==== 添加components ==== */
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import About from "./components/about/About";
function App() {
  return (
    /* 表示包裹在父元素中 */
      <>
          <div className="try">
              <img src={FirstBg} alt="" />
          </div>
      <div className="trytwo">
        <div className="rgb-split" data-text="做的了个P">
          做的了个P
        </div>
      </div>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
      </main>
    </>
  );
}
export default App;

