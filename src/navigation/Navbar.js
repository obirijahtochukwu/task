import {
  FaStackExchange,
  FaUserAlt,
  FaEraser,
  FaBriefcase,
  FaBlackTie,
  FaBook,
  FaUsers,
  FaCreditCard,
} from "react-icons/fa";
import { useState } from "react";

import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import "./Navbar.css";

function Navbar() {
  const user = useGlobalContext();
  const [show, setShow] = useState(window.location.pathname);

  const links = [
    { icon: <FaUserAlt />, text: "profile", url: "/user-profile" },
    { icon: <FaStackExchange />, text: "plans", url: "/user-profile" },
    { icon: <FaEraser />, text: "billing", url: "/user-profile" },
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
          <div className="row">
            <div className="col-12 mx-auto">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-block position-relative">
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
                  <Link
                    to="/user-profile"
                    style={{
                      borderRadius: "100%",
                      fontSize: "25px",
                      fontWeight: "500",
                    }}
                    className="primary_bg_color px-2 py- white link"
                  >
                    C
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <section className="nav_section d-none d-sm-block">
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
                    onClick={() => setShow(url)}
                    style={{ fontWeight: "700", fontSize: "20px" }}
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
          <div className="row">
            <div className="col-12 mx-auto">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-block position-relative">
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
                <div className="d-flex align-items-center">
                  <Link
                    to="/create-job"
                    style={{
                      fontStyle: "inter",
                      background: "#F19306",
                      borderRadius: "100%",
                      fontSize: "1rem",
                      fontWeight: "500",
                    }}
                    className="rounded mx-2 white px-3 py-2 cursor-pointer link"
                  >
                    Post Job
                  </Link>
                  <Link
                    to="/recruiter-profile"
                    style={{
                      borderRadius: "100%",
                      fontSize: "25px",
                      fontWeight: "500",
                    }}
                    className="primary_bg_color px-2 py- white link"
                  >
                    C
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <section className="nav_section d-none d-sm-block">
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
    <div className="container d-none d-md-block">
      <div className="row py-3 align-items-center justify-content-between">
        <div className="col-md-1 ">
          <div className=" justify-content-between">
            <div className="d-block position-relative">
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
          </div>
        </div>
        <div className="col-md-10">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <div
                className="primary_text primary_color  cursor-pointer"
                style={{ fontWeight: "700" }}
              >
                Home
              </div>
              <div
                className="primary_text mx-4  mx-lg-5"
                style={{ fontSize: "1rem" }}
              >
                {" "}
                How it works
              </div>
              <div className="primary_text" style={{ fontSize: "1rem" }}>
                Contact us
              </div>
            </div>
            <div className="d-flex align-items-center">
              <Link
                to="/signin"
                className="primary_text  mx-3 d-md-none link d-lg-flex cursor-pointer"
                style={{ fontSize: "1rem" }}
              >
                Login for recruiters
              </Link>
              <Link
                to="/login"
                className="rounded link primary_bg_color py-2 px-4 cursor-pointer text-white"
              >
                <div className="text-white">Login for closers</div>
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
