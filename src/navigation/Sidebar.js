import { useState } from "react";
import {
  FaAlignJustify,
  FaUserAlt,
  FaTimes,
  FaStackExchange,
  FaEraser,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { useGlobalContext } from "../context";

function SideBar() {
  const user = useGlobalContext();

  const [show, setShow] = useState(false);
  const logout = () => {
    localStorage.removeItem("email");
    user.setEmail("");
    setShow(false);
  };
  const link = [
    { text: "home" },
    { text: "how it works" },
    { text: "contact us" },
  ];
  const links = [
    { icon: <FaUserAlt />, text: "profile", url: "user-profile" },
    { icon: <FaStackExchange />, text: "plans", url: "" },
    { icon: <FaEraser />, text: "billing", url: "" },
  ];

  return (
    <div
      className={
        user.email ? "container d-sm-none bg-white" : "container d-md-none"
      }
    >
      <div className="position-relative d-flex align-items-cen justify-content-between px-2 py-3">
        <div className="position-relative">
          <img
            src="./Natural.png"
            className=""
            width="100px"
            height="auto"
            alt=""
          />
          <img
            style={{ bottom: "-40%", left: "0" }}
            src="closer.png"
            className=" position-absolute"
            width="80px"
            height="auto"
            alt=""
          />
        </div>
        <FaAlignJustify
          onClick={() => setShow(true)}
          className="mx-2 primary_color cursor-pointer"
          style={{ fontSize: "1.3rem" }}
        />
      </div>

      {/* SIDEBAR */}
      <div className={!user.email && show ? "sidebar show" : "sidebar"}>
        <div className={show ? "sidebar_content true" : "sidebar_content"}>
          <FaTimes onClick={() => setShow(false)} className="closebar white" />
          <div className="h-100 d-flex flex-column pb-5 overflow-auto">
            <div className="my-2 mt-4">
              {link.map(({ icon, text }, index) => {
                return (
                  <div
                    style={{ fontWeight: "700", fontSize: "20px" }}
                    onClick={() => setShow(false)}
                    key={index}
                    className="align-items-center justify-content-center d-flex white py-2 text-capitalize nav_link"
                  >
                    <div>{icon}</div>
                    <div className="mx-5 mx-lg-4">{text}</div>
                  </div>
                );
              })}
            </div>
            <div className="mt-auto mx-auto text-center">
              <div
                onClick={() => setShow(false)}
                style={{ fontSize: "1rem", fontWeight: "500" }}
                className="primary_text mx-3 my-2 text-capitalize primary_color cursor-pointer link"
              >
                <Link className="link text-white" to="/login">
                  Login for recruiters
                </Link>
              </div>
              <div
                to="/login"
                onClick={() => setShow(false)}
                style={{ fontSize: "1.3rem", fontWeight: "500" }}
                className=" cursor-pointer link"
              >
                <Link
                  className="link rounded py-2 px-4 bg-white primary_color"
                  to="/login"
                >
                  Login for closers
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={user.email && show ? "sidebar show" : "sidebar"}>
        <div className={show ? "sidebar_content true" : "sidebar_content"}>
          <div className="h-100 d-flex flex-column">
            <div
              style={{
                background: "rgba(145, 193, 232, 1)",
                borderRadius: "100%",
                width: "77px",
                height: "76px",
              }}
              className="white align-items-center d-flex justify-content-center mt-5 mb-2 mx-auto"
            >
              <div
                style={{
                  fontWeight: "500",
                  fontSize: "1.8rem",
                }}
              >
                c
              </div>
            </div>
            <div
              style={{
                fontWeight: "400",
                fontSize: "1rem",
                fontFamily: "roboto",
              }}
              className="white text-center"
            >
              Hello Obi
            </div>
            <div
              style={{
                fontWeight: "400",
                fontSize: "0.8rem",
                fontFamily: "roboto",
              }}
              className="white text-center mb-2"
            >
              Sales{" "}
            </div>
            <div className="my-2">
              {links.map(({ icon, text }, index) => {
                return (
                  <div
                    style={{ fontWeight: "700", fontSize: "20px" }}
                    onClick={() => setShow(false)}
                    key={index}
                    className="align-items-center justify-content-center d-flex white py-2 text-capitalize nav_link"
                  >
                    <div>{icon}</div>
                    <div className="mx-2 mx-lg-4">{text}</div>
                  </div>
                );
              })}
            </div>
            <div
              onClick={logout}
              style={{ border: "0.1rem solid rgba(255, 255, 255, 1)" }}
              className="mt-auto rounded align-items-center d-flex mx-auto px-3 py-2 my-5 cursor-pointer text-white"
            >
              <FaUserAlt style={{ fontSize: "20px", fontWeight: "400" }} />
              <div
                style={{ fontSize: "14px", fontWeight: "400" }}
                className="mx-2"
              >
                Log Out
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
