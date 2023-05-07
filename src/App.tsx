import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Group from "./routes/Group";
import Home from "./routes/Home";
import GroupDetails from "./routes/GroupDetails";
import Transaction from "./routes/Transaction";
import Profile from "./routes/Profile";

function App() {

  return (
    <section className="bg-back min-h-screen">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="group/*" element={<Group />}/>
          <Route path="transaction/*" element={<Transaction/>}/>
          <Route path="profile" element={<Profile />}/>

        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
