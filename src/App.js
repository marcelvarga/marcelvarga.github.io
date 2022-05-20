import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import {NavBar} from 'pages/NavBar.js'
import {Homepage} from 'pages/Homepage.js'
import {Footer} from 'pages/Footer.js'


export default function App() {
  return (
    <div>
      <NavBar />
      <Homepage />
      <Footer />
    </div>
  );
}