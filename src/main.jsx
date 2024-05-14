import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Projet from "./Projet.jsx";


/* ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); */
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route 
        path="/Projet/:projetId" 
        element={<Projet />} 
        loader={async ({ Projets }) => {
        return fetch(
          `./data/projects/${Projets.id}.json`
        );
      }} />
      </Routes>
    </Router>
  </React.StrictMode>,
);

