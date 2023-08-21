import { Outlet } from "react-router-dom";
import { Sidenav } from "../../components/Sidenav";
import { AdminLayoutContainer } from "./styles";

import { useAppSelector } from "../../hooks/useTypedSelector";

export function AdminLayout() {
  const { auth: { token } } = useAppSelector((state) => state);

  const isAuthenticated = token ? true : false;

  return isAuthenticated ? (
    <AdminLayoutContainer>
      <Sidenav />
      <Outlet />
    </AdminLayoutContainer>
  ) : (
    <>{(window.location.href = `/login`)}</>
  );
}
