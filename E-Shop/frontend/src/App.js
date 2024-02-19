import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/SignupPage"
import ActivationPage from "./pages/ActivationPage"
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { LoginPage, SignupPage, ActivationPage,HomePage } from "./Routes.js";
// import { ToastContainer} from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";
// import { server } from "./server";
import { loadUser } from "./redux/actions/user.js";
import Store from "./redux/store";
// import { Router } from "express";

const App = () => {
  // useEffect(() => {
  //   Store.dispatch(loadUser());
  // }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route path="/activation/:activation_token" element={<ActivationPage /> } />
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </BrowserRouter>
  );
};

export default App;
