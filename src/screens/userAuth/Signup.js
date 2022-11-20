import React, { useState } from "react";
import { useGlobalContext } from "../../context";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./Index.css";
import { FaCheck } from "react-icons/fa";

export default function Signup() {
  const user = useGlobalContext();
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  // eslint-disable-next-line
  const [type, setType] = useState("sales");
  const [success, setSuccess] = useState(false);

  const login = (e) => {
    e.preventDefault();
    const data = { name, phone, email, address, password, type };
    localStorage.setItem("auth", JSON.stringify(data));
    user.setData(data);
    setName("");
    setEmail("");
    setPhone("");
    setEmail("");
    setPassword("");
    setAddress("");
    setSuccess(true);
  };

  return (
    <div
      className="position-fixed "
      style={{
        zIndex: "5",
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
      <div className="container">
        <div
          style={{
            position: "fixed",
            zIndex: "2",
            top: "0",
            left: "0",
            width: "20%",
            height: "100vh",
          }}
          className="d-none d-md-block"
        >
          <img
            src="image 27.png"
            alt=""
            className="w-100"
            style={{ height: "100vh" }}
          />
        </div>
        <div className="container-fluid">
          <div className="pt-5 pb-2 auth-margin position-relative ">
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
              className="mx-auto mb-4 mt-4"
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
                className="mt-3"
              >
                Your full name*
              </div>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                containerStyle={{
                  border: "1px solid #dfe1e6",
                  borderRadius: "6px",
                }}
                containerClass="py-0"
                inputStyle={{ paddingTop: "1.4rem", paddingBottom: "1.4rem" }}
                inputClass="px-3"
                country="us"
                placeholder="+1"
                value={phone}
                disableDropdown={true}
                onChange={() => setPhone(phone)}
              />
              <div
                style={{ fontSize: "1rem", fontWeight: "500" }}
                className="mt-3"
              >
                Address*
              </div>
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
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
                  fontSize: "1rem",
                  fontWeight: "500",
                  color: "background: rgba(44, 82, 130, 1)",
                }}
                className="my-3 col-sm-9 col-lg-6"
              >
                By continuing, you agree to name Terms of Use. Read our Privacy
                Policy.
              </div>
              <button
                type="submit"
                className="rounded primary_bg_color text-center py-3 text-white cursor-pointer w-100 border-0"
              >
                Create account
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className={`${success && "show"} account_success`}>
        <div className="col-11 col-sm-10 col-md-6 col-lg-5 text-center bg-white mx-auto py-5 px-5 position-relative">
          <div
            style={{
              width: "103.33px",
              height: "102.5px",
              border: "0.3rem solid rgba(101, 202, 117, 1)",
              borderRadius: "100%",
            }}
            className="bg-white d-flex align-items-center justify-content-center mx-auto mt-5"
          >
            <FaCheck
              style={{
                width: "41.33px",
                height: "30.75px",
                color: "rgba(101, 202, 117, 1)",
              }}
              className=""
            />{" "}
          </div>
          <div
            style={{
              fontWeight: "700",
              fontSize: "18px",
              lineHeight: "21.78px",
            }}
            className="primary_color mb-1 mt-3"
          >
            Account Creation Successful
          </div>
          <div
            style={{
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "28px",
              color: "rgba(134, 146, 166, 1)",
            }}
            className=""
          >
            Thanks for registering with job portal. Your account has been
            created.
          </div>
          <Link to="/jobs" className="link">
            <div
              style={{
                fontWeight: "500",
                fontSize: "20px",
                lineHeight: "24.2px",
              }}
              className="primary_bg_color white rounded py-3 mb-5 mt-2 cursor-pointer "
            >
              Searching
            </div>
          </Link>

          <div style={{ fontSize: "2rem" }} className="">
            <Link
              to="/job-list"
              style={{
                top: "0.6rem",
                right: "1rem",
                color: "rgba(170, 159, 159, 1)",
              }}
              className="position-absolute cursor-pointer link"
            >
              X
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
