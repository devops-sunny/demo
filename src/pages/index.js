import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./protected/Auth/Login";
import PublicRoutes from "../Routing/PublicRoutes";
import RoleBasedRoute from "../Routing/RoleBasedRoute";
import Patient from "../pages/Dashboard/Patient/Patient";
import Doctor from "../pages/Dashboard/Doctor/Doctor";
import Pharmacist from "../pages/Dashboard/Pharmacist/Pharmacist";
import AddNewPrescription from "../pages/Dashboard/AddNewPrescription/new-edit-form/index";

const Routers = () => {
  const all = ["Admin", "Doctors", "Pharmacists"];

  const privateAuth = [{ roles: "login", path: "/", components: <Login /> }];

  const privateDashboard = [
    {
      roles: "doctor",
      path: "/doctor",
      components: <Doctor />,
      accessibleRoles: all,
    },
    {
      roles: "patient",
      path: "/patients",
      components: <Patient />,
      accessibleRoles: all,
    },
    {
      roles: "patient",
      path: "/patient-detail/:id",
      components: <AddNewPrescription />,
      accessibleRoles: all,
    },
    {
      roles: "pharmacist",
      path: "/pharmacists",
      components: <Pharmacist />,
      accessibleRoles: all,
    },
  ];

  return (
    <Router>
      <Routes>
        {privateAuth.map((privateAuth) => {
          return (
            true && (
              <Route path={privateAuth.path} element={<PublicRoutes />}>
                <Route
                  path={privateAuth.path}
                  element={privateAuth.components}
                />
              </Route>
            )
          );
        })}
        {privateDashboard.map((privatedeshboard) => {
          return (
            true && (
              <Route
                key={privatedeshboard.path}
                path={privatedeshboard.path}
                element={
                  <RoleBasedRoute
                    accessibleRoles={privatedeshboard.accessibleRoles}
                  >
                    {privatedeshboard.components}
                  </RoleBasedRoute>
                }
              />
            )
          );
        })}
      </Routes>
    </Router>
  );
};
export default Routers;
