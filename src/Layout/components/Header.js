import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import user from "../../assets/images/user.jpg";
import { handleNav } from "../../redux/common/Action";

export default function DashboardNavbar({ props }) {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="main-contentbox">
        <div className="top">
          <div
            className="mobiletoggle"
            onClick={() => {
              dispatch(handleNav());
            }}
          >
            <div className="icon icon1"></div>
            <div className="icon icon2"></div>
            <div className="icon icon3"></div>
          </div>
          <h1>Welcome Admin!</h1>
          <div className="user-login" onClick={() => setIsOpen(!isOpen)}>
            <span className="user-img">
              <img src={user} alt="" />
              Bernardo Dsoza
            </span>
            {isOpen && (
              <div className="user-dropdown">
                <ul>
                  <li>
                    <a href="#">Bernardo Dsoza</a>
                  </li>
                  <li>
                    <a href="#">Bernardo Dsoza</a>
                  </li>
                  <li>
                    <a href="#">Bernardo Dsoza</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        {props}
      </div>
    </>
  );
}
