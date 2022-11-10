import React, { useState } from "react";
import { useGlobalContext } from "../../context";
import { Navigate, Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./Index.css";

export default function Signup() {
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
      className="position-fixed "
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
        <div className="col-11 mx-auto col-md-5 col-lg-5 col-xxl-4  position-relative ">
          <Link
            to="/login"
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
            Already have an account?{" "}
            <span className="primary_color">Sign in</span>
          </Link>
          <form
            onSubmit={login}
            style={{ marginTop: "20%" }}
            className="mx-auto mb-4"
          >
            <div
              className="black"
              style={{ fontSize: "1.8rem", fontWeight: "700" }}
            >
              Create your free account
            </div>
            <div
              className="black"
              style={{ fontSize: "1.13rem", fontWeight: "400" }}
            >
              When you create an account with us, we make sure to find a sales
              job or talent that’s a great fit for you.
            </div>
            <div
              style={{ fontSize: "1rem", fontWeight: "500" }}
              className="mt-5"
            >
              Your full name*
            </div>
            <input
              type="text"
              placeholder="Your full name"
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
              className=" py-2 px-3 login_input"
            />
            <div
              style={{ fontSize: "1rem", fontWeight: "500" }}
              className="mt-4"
            >
              Phone number*
            </div>
            <PhoneInput
              containerStyle={{ pointerEvents: "none" }}
              country={"us"}
              value={"this.state.phone"}
              onChange={(phone) => this.setState({ phone })}
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
              style={{ fontSize: "1rem", fontWeight: "500" }}
              className="mt-3"
            >
              Address*
            </div>
            <input
              type="text"
              placeholder="Address"
              style={{
                color: "rgba(124, 146, 166, 1)",
                fontSize: "0.87rem",
                fontWeight: "500",
              }}
              required
              className=" py-2 px-3 login_input"
            />
            <div
              style={{
                fontSize: "1rem",
                fontWeight: "500",
                color: "background: rgba(44, 82, 130, 1)",
              }}
              className="my-3"
            >
              By continuing, you agree to name Terms of Use. Read our Privacy
              Policy.
            </div>
            <button
              type="submit"
              className="rounded primary_bg_color text-center py-2 text-white cursor-pointer mt-5 w-100 border-0"
            >
              Create account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
