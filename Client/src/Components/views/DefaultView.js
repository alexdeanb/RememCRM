import { Outlet, Route, Routes } from "react-router-dom";

import Login from "../auth/Login";
import Register from "../auth/Register";

export const DefaultView = ({ userProfile }) => {
  return (
    <Routes>
      <Route path="">
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
};
