import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Debt } from "./pages/Debt";
import { Savings } from "./pages/Savings";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Income from "./pages/Income";
import Expenses from "./pages/Expenses";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Income />} path="/Income" />
            <Route element={<Expenses />} path="/Expenses" />
            <Route element={<Savings />} path="/Savings" />
            <Route element={<Debt />} path="/Debt" />
            <Route element={<Signup />} path="/Signup" />
            <Route element={<Login />} path="/Login" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
