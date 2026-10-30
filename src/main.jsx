import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import Projet from "./Projet.jsx";
import NotFoundComp from "./components/NotFoundComp.jsx";
import HeaderComp from "./components/HeaderComp.jsx";
import FooterComp from "./components/FooterComp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/Projet/:projetId" element={<Projet />} />
                <Route
                    path="*"
                    element={
                        <>
                            <HeaderComp />
                            <NotFoundComp />
                            <FooterComp />
                        </>
                    }
                />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);