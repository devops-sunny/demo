import React, { useEffect, useState } from 'react'
import Logo from "../../assets/images/logo.svg";
import Doctors from "../../assets/images/doctors-icon.svg";
import Patients from "../../assets/images/patients-icon.svg";
import Pharmacists from "../../assets/images/pharmacists-icon.svg";
import Logout from "../../assets/images/logout-icon.svg";
import {
  NavLink as RouterLink,
  matchPath,
  useLocation,
  Link,
  Navigate,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../../redux/Auth/Action';

export default function Sidebar() {
  const isNavExpanded = useSelector((state) => state.Common.isNavExpanded);
  const dispatch = useDispatch();

  useEffect(() => {
    isNavExpanded
      ? document.body.classList.add("open")
      : document.body.classList.remove("open");
  }, [isNavExpanded]);

  const { pathname } = useLocation();
  const match = (path) => (path ? !!matchPath({ path }, pathname) : false);

  const navbar = [
    {
      roles: "Doctors",
      path: "/doctor",
      src: { Doctors },
      active: match("/doctor"),
    },
    {
      roles: "Patients",
      path: "/patients",
      src: { Patients },
      active: match("/patients"),
    },
    {
      roles: "Pharmacists",
      path: "/pharmacists",
      src: { Pharmacists },
      active: match("/pharmacists"),
    },
    {
      roles: "PharmacistsDetail",
      path: "/patient-detail/1",
      src: { Pharmacists },
      active: match("/patient-detail/:id"),
    },
  ];
  

  const onLogout = () => {
    dispatch(logout());
    if (true) {
      return <Navigate to="/" />;
    }
  };
  

  return (
    <>
      <div className="sidebar">
        <div className="logo">
          <a href="index.html">
            <img src={Logo} alt="" />
          </a>
        </div>
        <div className="navigaton">
          <ul>
            {navbar.map((navbar) => {
              return (
                true && (
                  <>
                    <li className={navbar.active && "active"}>
                      <Link to={navbar.path}>
                        <img src={navbar.src} alt="" />
                        {navbar.roles}
                      </Link>
                    </li>
                  </>
                )
              );
            })}
          </ul>
        </div>
        <div className="logout" onClick={onLogout} >
          <Link to="/">
            <img src={Logout} alt="" />
            Logout
          </Link>
        </div>
      </div>
      
    </>
  );
}
