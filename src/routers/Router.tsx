import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { DefaultLayout } from "../shared/layouts/DefaultLayout";
import { Admin } from "../pages/Admin";
import { Login } from "../pages/Login";
import { PrivateRoute } from "./PrivateRoute";
import { Checkout } from "../pages/Checkout";

export function Router() {
  return (
    <Routes>
      {/* Client */}
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>

      {/* Admin */}
      <Route path="/login" element={<Login />} />
      <Route
        path="/admin"
        element={
          <PrivateRoute redirectPath="login">
            <Admin />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
