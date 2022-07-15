import React from "react";
import { LoginForm } from "../../../components/Admin";
import "./LoginAdmin.scss";

export function LoginAdmin() {
  return (
    <div className="login-admin">
      <div className="login-admin__content">
        <h3>Panel - Ingreso del Usuario</h3>
        <LoginForm />
      </div>
    </div>
  );
}
