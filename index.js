import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Faculty from "./Components/Faculty";
import Fac_exp from "./Components/Fac_exp";
import Counter from "./Components/Counter";
import Form from "./Components/Form";
import MockAPI from "./Components/MockAPI";
import FacultyDetail from "./Components/FacultyDetail";
import FacultyAdd from "./Components/FacultyAdd";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/faculty" element={<Faculty />}></Route>
        <Route path="/fac" element={<Fac_exp />}></Route>
        <Route path="/counter" element={<Counter />}></Route>
        <Route path="/form" element={<Form />}></Route>
        <Route path="/mockapi" element={<MockAPI />}></Route>
        <Route path="/facultydetails/:id" element={<FacultyDetail />}></Route>
        <Route path="/faculty/add" element={<FacultyAdd />}></Route>
        <Route path="/faculty/edit/:id" element={<FacultyAdd />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);