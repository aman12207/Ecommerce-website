import React from "react";
import Lists from "./components/Lists";
import SingleList from "./components/SingleList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Lists />} />
        <Route path="/product/:id" element={<SingleList />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
