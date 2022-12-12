import {
  FaStackExchange,
  FaUserAlt,
  FaEraser,
  FaBriefcase,
  FaBook,
} from "react-icons/fa";
import { useState } from "react";

import { useNavigate, Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import "./Navbar.css";

function Navbar() {
  const user = useGlobalContext();
  const [show, setShow] = useState(window.location.pathname);

  const navigate = useNavigate();

  const links = [
    { icon: <FaUserAlt />, text: "profile", url: "/user-profile" },
    { icon: <FaStackExchange />, text: "plans", url: "/plans" },
    { icon: <FaEraser />, text: "billing", url: "/billing" },
    { icon: <FaBriefcase />, text: "applied jobs", url: "/applied-jobs" },
  ];

  const linkR = [
    { icon: <FaUserAlt />, text: "profile", url: "/recruiter-profile" },
    { icon: <FaEraser />, text: " Billing", url: "/subscription" },
    { icon: <FaBook />, text: "My Jobs", url: "/jobs" },
  ];

  const logout = () => {
    localStorage.removeItem("auth");
    user.setData("");
    window.location.href = "/";
  };

  if (user.data.type === "sales") {
    return (
      <article className="container-fluid  bg-white ">
        <nav
          style={{
            position: "fixed",
            zIndex: "3",
            top: "0",
            left: "0",
            right: "0",
            borderBottom: "1px solid #dfe1e6",
          }}
          className="py-2  d-none d-sm-block bg-white"
        >
          <div className="row px-3">
            <div className="col-12 mx-auto">
              <div className="d-flex justify-content-between align-items-center">
                <img
                  src="./into sales.png"
                  style={{ width: "174px", height: "45px" }}
                  className=""
                  alt=""
                />
                <div className="d-flex align-items-center">
                  <div
                    style={{
                      fontStyle: "inter",
                      background: "#F19306",
                      borderRadius: "100%",
                      fontSize: "1rem",
                      fontWeight: "500",
                    }}
                    className="rounded mx-2 white px-3 py-2 cursor-pointer"
                  >
                    Upload Resume
                  </div>
                  <Link to="/user-profile" className="">
                    <img
                      style={{
                        width: "42px",
                        height: "42px",
                      }}
                      src="./user.png"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <section className="nav_section d-none d-sm-block">
          <div className="h-100 d-flex flex-column">
            <img
              style={{
                width: "82px",
                height: "82px",
              }}
              src="./user.png"
              alt=""
              className="mx-auto mt-4 mb-3"
            />
            <div
              style={{
                fontWeight: "400",
                fontSize: "1rem",
              }}
              className="white text-center"
            >
              Hello Obi
            </div>
            <div
              style={{
                fontWeight: "400",
                fontSize: "0.8rem",
              }}
              className="white text-center mb-4"
            >
              Sales{" "}
            </div>
            <div className="my-2">
              {links.map(({ icon, text, url }, index) => {
                return (
                  <Link
                    to={url}
                    onClick={() => setShow(url)}
                    style={{
                      fontWeight: "700",
                      fontSize: "20px",
                      pointerEvents: `${
                        (url === "/plans" && "none") ||
                        (url === "/billing" && "none") ||
                        ""
                      }`,
                    }}
                    key={index}
                    className={
                      show === url
                        ? "active align-items-center d-flex white py-2 text-capitalize nav_link link"
                        : "align-items-center d-flex white py-2 text-capitalize nav_link link "
                    }
                  >
                    <div className="mx-3 mx-lg-4">{icon}</div>
                    <div>{text}</div>
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
        </section>
      </article>
    );
  }
  if (user.data.type === "recruiter") {
    return (
      <article className="container-fluid  bg-white ">
        <nav
          style={{
            position: "fixed",
            zIndex: "3",
            top: "0",
            left: "0",
            right: "0",
            borderBottom: "1px solid #dfe1e6",
          }}
          className="py-2 bg-white px-2 d-none d-sm-block"
        >
          <div className="row px-2">
            <div className="col-12 mx-auto">
              <div className="d-flex justify-content-between align-items-center">
                <img
                  src="./into sales.png"
                  style={{ width: "174px", height: "45px" }}
                  className=""
                  alt=""
                />
                <div className="d-flex align-items-center">
                  <div
                    onClick={() => navigate("/")}
                    style={{
                      fontStyle: "inter",
                      background: "#F19306",
                      borderRadius: "100%",
                      fontSize: "1rem",
                      fontWeight: "500",
                    }}
                    className="rounded mx-2 white px-3 py-2 cursor-pointer"
                  >
                    Post a Job
                  </div>
                  <Link
                    to="/recruiter-profile"
                    style={{
                      borderRadius: "100%",
                    }}
                  >
                    <img
                      style={{
                        width: "42px",
                        height: "42px",
                      }}
                      src="./user.png"
                      alt=""
                      className=""
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <section className="nav_section d-none d-sm-block">
          <div className="h-100 d-flex flex-column">
            <img
              style={{
                width: "82px",
                height: "82px",
              }}
              src="./user.png"
              alt=""
              className="mx-auto mt-5 mb-3"
            />
            <div
              style={{
                fontWeight: "400",
                fontSize: "1rem",
              }}
              className="white text-center"
            >
              Hello Jazz
            </div>
            <div
              style={{
                fontWeight: "400",
                fontSize: "0.8rem",
              }}
              className="white text-center mb-3"
            >
              Recruiter{" "}
            </div>
            <div className="my-2">
              {linkR.map(({ icon, text, url }, index) => {
                return (
                  <Link
                    to={url}
                    onClick={() => setShow(url)}
                    style={{ fontWeight: "700", fontSize: "20px" }}
                    key={index}
                    className={
                      window.location.pathname === `${url}` && { text }
                        ? "active align-items-center d-flex white py-2 text-capitalize nav_link link"
                        : "align-items-center d-flex white py-2 text-capitalize nav_link link "
                    }
                  >
                    <div className="mx-3 mx-lg-4">{icon}</div>
                    <div>{text}</div>
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
        </section>
      </article>
    );
  }
  return (
    <div className="container-fluid d-none d-md-block">
      <div className="row align-items-center justify-content-between px-2">
        <div className="col-md-2 col-xl-2">
          <img
            src="./into sales.png"
            style={{ width: "174px", height: "45px" }}
            className=""
            alt=""
          />
        </div>
        <div className="col-md-9 mt-3">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <div
                className="primary_text primary_color  cursor-pointer"
                style={{ fontSize: "1.2rem", fontWeight: "700" }}
              >
                Home
              </div>
              <div
                className="primary_text mx-4  mx-lg-5"
                style={{ fontSize: "1.2rem", fontWeight: "700" }}
              >
                {" "}
                How it works
              </div>
              <div
                className="primary_text"
                style={{ fontSize: "1.2rem", fontWeight: "700" }}
              >
                Contact us
              </div>
            </div>
            <div className="d-flex align-items-center">
              <Link
                to="/signin"
                className="primary_text  mx-3 d-md-none link d-lg-flex cursor-pointer"
                style={{ fontSize: "1.2rem", fontWeight: "700" }}
              >
                Login for recruiters
              </Link>
              <Link
                to="/login"
                className="rounded link primary_bg_color py-2 px-4 cursor-pointer text-white"
              >
                <div
                  className="text-white"
                  style={{ fontSize: "1.2rem", fontWeight: "700" }}
                >
                  Login for closers
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Navbar;
