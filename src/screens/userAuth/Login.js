import React, { useState } from "react";
import { useGlobalContext } from "../../context";
import "./Index.css";
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

  if (user.email) {
    return <Navigate to="/" replace="true" />;
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
      {user.email}
      <div className="row">
        <div className="col-11 d-none d-md-block col-md-6 col-lg-6">
          <img
            src="image 27.png"
            alt=""
            className="w-100 h-100"
            height="100%"
          />
        </div>
        <div className="col-11 mx-auto col-md-5 col-lg-5 col-xxl-4  position-relative">
          <Link
            to="/signup"
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
          <form
            onSubmit={login}
            style={{ marginTop: "20%" }}
            className="mx-auto"
          >
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
              className="mt-5"
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
                fontSize: "01rem",
                fontWeight: "500",
                color: "background: rgba(44, 82, 130, 1)",
                fontFamily: "Roboto",
              }}
              className="mt-2 mb-5"
            >
              Forgot password?
            </div>
            <button
              type="submit"
              className="rounded primary_bg_color text-center py-2 text-white cursor-pointer mt-5 w-100 border-0"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
