import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Layout from "./components/common/Layout";
import Todo from "./pages/Todo";
import Redirect from "./pages/Redirect";

const Router = () => {
  return (
    <BrowserRouter>
      <Redirect />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/todo" element={<Todo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
