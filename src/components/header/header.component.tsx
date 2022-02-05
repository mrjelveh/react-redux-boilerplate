import React from "react";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";

function Header() {
  return (
    <div className="app">
      <Logo className="h-64" />
    </div>
  );
}

export default Header;
