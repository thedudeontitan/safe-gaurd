import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Group from "./routes/Group";
import Home from "./routes/Home";
import GroupDetails from "./routes/GroupDetails";

function App() {
  return (
    <section className="bg-back min-h-screen">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="group/*" element={<Group />}/>
          <Route path="transaction/*" element={<Group />}/>
          {/* <Route path="group/*" element={<Group />}/> */}

        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
