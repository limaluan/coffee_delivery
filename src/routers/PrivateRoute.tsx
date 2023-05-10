import React from "react";
import { RoutesProps } from "react-router-dom";
import { useAppSelector } from "../shared/hooks/useTypedSelector";

interface IPrivateRouteProps extends RoutesProps {
  children: React.ReactNode;
  redirectPath: string;
}

export const PrivateRoute = ({
  children,
  redirectPath,
}: IPrivateRouteProps) => {
  const { token: data } = useAppSelector((state) => state);

  const isAuthenticated = data ? true : false;

  console.log(data);

  return isAuthenticated ? (
    <>{children}</>
  ) : (
    <>{(window.location.href = `${redirectPath}`)}</>
  );
};
