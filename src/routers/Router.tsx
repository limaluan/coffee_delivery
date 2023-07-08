import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { DefaultLayout } from "../shared/layouts/DefaultLayout";
import { Login } from "../pages/Login";
import { Checkout } from "../pages/Checkout";
import { AdminLayout } from "../shared/layouts/AdminLayout";
import { Orders } from "../pages/Admin/Orders";
import { Admin } from "../pages/Admin";

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
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/pedidos" element={<Orders />} />
      </Route>
    </Routes>
  );
}
