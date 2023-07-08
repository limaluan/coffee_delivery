import { Outlet } from "react-router-dom";
import { Sidenav } from "../../components/Sidenav";
import { AdminLayoutContainer } from "./styles";

import { useAppSelector } from "../../hooks/useTypedSelector";

export function AdminLayout() {
  const { token: data } = useAppSelector((state) => state);

  const isAuthenticated = data ? true : false;

  return isAuthenticated ? (
    <AdminLayoutContainer>
      <Sidenav />
      <Outlet />
    </AdminLayoutContainer>
  ) : (
    <>{(window.location.href = `/login`)}</>
  );
}
