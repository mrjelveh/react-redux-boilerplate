import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import roleRequest from "./role-request";
import { useAppSelector } from "../redux/store";
import { selectLoginState } from "../redux/authentication/authentication.slice";

type PRIVATEROUTETYPE = {
  roles: string[];
};

const PrivateRoutes: React.FC<PRIVATEROUTETYPE> = ({ roles }) => {
  const { isAuth, permittedRole } = useAppSelector(selectLoginState);
  const isTrustedRole = roleRequest(roles, permittedRole);
  return isTrustedRole && isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
