// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import About from "./Components/About";
import Main from "./Components/CarouselImages";
import Footer from "./Components/Footer";
import Menu from "./Components/Menu";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Contact from "./Components/Contact";
import Reservation from "./Components/Reservation";
import OrderOnline from "./Components/OrderOnline";
import Articles from "./Components/Articles";

function App() {
  return (
    <Router>
      <Header />
      <Footer/>
      <Routes>
        <Route path="/home" element={<Main/>}></Route>
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/reservation" element={<Reservation/>}></Route>
        <Route path="/orderonline" element={<OrderOnline/>}></Route>
        <Route path="/articles" element={<Articles/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;