import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import {Homepage} from 'pages/Homepage.js'
import {NavBar} from 'pages/NavBar.js'


export default function App() {
  return (
    <div>
      <NavBar />
      <Homepage />
    </div>
  );
}