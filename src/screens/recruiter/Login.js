import React, { useState } from "react";
import { useGlobalContext } from "../../context";
import { Navigate, Link } from "react-router-dom";

export default function Login() {
  const user = useGlobalContext();
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    localStorage.setItem("email", JSON.stringify(email));
    user.setEmail(email);
    setEmail("");
    setPassword("");
  };

  if (user.data.type === "recruiter") {
    return <Navigate to="/recruiter-profile" replace="true" />;
  }

  return (
    <div
      className="position-fixed"
      style={{
        zIndex: "2",
        top: "0",
        right: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
        backgroundColor: "#f1fcff",
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      <div className=" bg-white container-fluid h-100">
        <div
          style={{
            position: "fixed",
            zIndex: "2",
            top: "0",
            left: "0",
            width: "45%",
            height: "100vh",
          }}
          className=" d-none d-md-block"
        >
          <img
            src="figma 2.png"
            alt=""
            className="w-100"
            style={{ height: "100%" }}
          />
        </div>
        <div className="container">
          <div className="position-relative pt-5 pb-2 auth-margin ">
            <Link
              to="/createaccount"
              style={{
                fontWeight: "500",
                fontSize: "18px",
                top: "0",
                right: "0",
                color: "#8692A6",
                textDecoration: "none",
              }}
              className="position-absolute my-4"
            >
              Don’t have an account?{" "}
              <span className="primary_color">Sign up</span>
            </Link>
            <form onSubmit={login} className="mx-xl-5 mt-5 px-xl-3 pt-md-4">
              <div
                className="black"
                style={{ fontSize: "1.8rem", fontWeight: "700" }}
              >
                Sign in
              </div>
              <div
                className="black"
                style={{ fontSize: "1.13rem", fontWeight: "400" }}
              >
                Practical staffing needs for sales position across the market.
              </div>
              <div
                style={{ fontSize: "1rem", fontWeight: "500" }}
                className="mt-3 mt-md-4"
              >
                Email*
              </div>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter your email"
                style={{
                  color: "rgba(124, 146, 166, 1)",
                  fontSize: "0.87rem",
                  fontWeight: "500",
                }}
                required
                autoFocus
                className=" py-2 px-3 login_input"
              />
              <div
                style={{ fontSize: "1rem", fontWeight: "500" }}
                className="mt-4"
              >
                Password*
              </div>
              <div className="position-relative">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={show ? "text" : "password"}
                  placeholder="Enter your password"
                  style={{
                    color: "rgba(124, 146, 166, 1)",
                    fontSize: "0.87rem",
                    fontWeight: "500",
                  }}
                  required
                  className=" py-2 px-3 login_input"
                />
                <div
                  onClick={() => setShow(!show)}
                  className="show_password px-1"
                >
                  {show ? "Hide" : "Show"}
                </div>
              </div>
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "400",
                  color: "background: rgba(44, 82, 130, 1)",
                }}
                className="mt-2 mb-3"
              >
                Forgot password?
              </div>
              <button
                type="submit"
                className="rounded primary_bg_color text-center py-3 text-white cursor-pointer w-100 border-0"
              >
                Continue
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
