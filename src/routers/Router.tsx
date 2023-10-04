import { Routes, Route } from "react-router-dom";

import { AdminLayout, DefaultLayout } from "../layouts";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Checkout } from "../pages/Checkout";
import { OrderConfirmation } from "../pages/OrderConfirmation";

import { Orders } from "../pages/Admin/Orders";
import { Admin } from "../pages/Admin";
import { Catalog } from "../pages/Admin/Catalog";

export function Router() {
  return (
    <Routes>
      {/* Client */}
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/confirmado" element={<OrderConfirmation />} />
      </Route>

      {/* Admin */}
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/pedidos" element={<Orders />} />
        <Route path="/admin/catalogo" element={<Catalog />} />
      </Route>
    </Routes>
  );
}
