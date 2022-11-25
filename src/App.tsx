import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/header.component";
import Dashboard from "./containers/dashboard/dashboard.page";
import Login from "./containers/login/login.page";
import PrivateRoutes from "./routes/private-route";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<PrivateRoutes roles={["admin"]} />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
