import { useState } from "react";
import {
  FaBars,
  FaUserAlt,
  FaStackExchange,
  FaEraser,
  FaBriefcase,
  FaBlackTie,
  FaBook,
  FaUsers,
  FaCreditCard,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { useGlobalContext } from "../context";

function SideBar() {
  const user = useGlobalContext();

  const [show, setShow] = useState(false);
  const logout = () => {
    localStorage.removeItem("auth");
    user.setData("");
    setShow(false);
    window.location.href = "/";
  };
  const link = [
    { text: "home" },
    { text: "how it works" },
    { text: "contact us" },
  ];
  const links = [
    { icon: <FaUserAlt />, text: "profile", url: "/user-profile" },
    { icon: <FaStackExchange />, text: "plans", url: "" },
    { icon: <FaEraser />, text: "billing", url: "" },
    { icon: <FaBlackTie />, text: "jobs", url: "/jobs-list" },
    { icon: <FaBriefcase />, text: "applied jobs", url: "/applied-jobs" },
  ];
  const linkR = [
    { icon: <FaUserAlt />, text: "profile", url: "/recruiter-profile" },
    { icon: <FaBook />, text: "My Jobs", url: "/jobs" },
    { icon: <FaUsers />, text: "Create Job", url: "/create-job" },
    { icon: <FaCreditCard />, text: "Payment", url: "/payment" },
    { icon: <FaEraser />, text: "subscription", url: "/subscription" },
  ];

  return (
    <div
      style={{ borderBottom: "1px solid #dfe1e6" }}
      className={
        user.data.email ? "container d-sm-none bg-white" : "container d-md-none"
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
        <FaBars
          onClick={() => setShow(true)}
          className="mx- primary_color cursor-pointer"
          style={{ fontSize: "1.3rem" }}
        />
      </div>

      {/* SIDEBAR */}
      <div className={!user.data.email && show ? "sidebar show" : "sidebar"}>
        <div className={show ? "sidebar_content true" : "sidebar_content"}>
          <div
            className="close_tab px-2 py-2 cursor-pointer"
            onClick={() => setShow(false)}
          >
            X
          </div>
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
                <Link className="link text-white" to="/signin">
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

      <div
        className={
          user.data.type === "sales" && show ? "sidebar show" : "sidebar"
        }
      >
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
              {links.map(({ icon, text, url }, index) => {
                return (
                  <Link
                    to={url}
                    style={{ fontWeight: "700", fontSize: "20px" }}
                    onClick={() => setShow(false)}
                    key={index}
                    className={
                      window.location.pathname === `${url}` && { text }
                        ? "active align-items-center justify-content-center d-flex white py-2 text-capitalize nav_link link"
                        : "align-items-center justify-content-center d-flex white py-2 text-capitalize nav_link link"
                    }
                  >
                    <div>{icon}</div>
                    <div className="mx-2 mx-lg-4">{text}</div>
                  </Link>
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
          <div
            className="close_tab px-2 py-2 cursor-pointer"
            onClick={() => setShow(false)}
          >
            X
          </div>
        </div>
      </div>

      <div
        className={
          user.data.type === "recruiter" && show ? "sidebar show" : "sidebar"
        }
      >
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
              {linkR.map(({ icon, text, url }, index) => {
                return (
                  <Link
                    to={url}
                    style={{ fontWeight: "700", fontSize: "20px" }}
                    onClick={() => setShow(false)}
                    key={index}
                    className={
                      window.location.pathname === `${url}` && { text }
                        ? "active align-items-center justify-content-center d-flex white py-2 text-capitalize nav_link link"
                        : "align-items-center justify-content-center d-flex white py-2 text-capitalize nav_link link"
                    }
                  >
                    <div>{icon}</div>
                    <div className="mx-2 mx-lg-4">{text}</div>
                  </Link>
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
