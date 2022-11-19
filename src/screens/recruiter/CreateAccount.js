import React, { useState } from "react";
import { useGlobalContext } from "../../context";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./Index.css";

export default function CreateAccount() {
  const user = useGlobalContext();
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [company, setCompany] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line
  const [type, setType] = useState("recruiter");
  const [success, setSuccess] = useState(false);

  const Signup = (e) => {
    e.preventDefault();
    const data = { name, phone, email, address, company, password, type };
    localStorage.setItem("auth", JSON.stringify(data));
    user.setData(data);
    setName("");
    setPhone("");
    setEmail("");
    setAddress("");
    setEmail("");
    setCompany("");
    setPassword("");
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
      <div className="">
        <div
          style={{
            position: "fixed",
            zIndex: "2",
            top: "0",
            left: "0",
            width: "40%",
            height: "100vh",
          }}
          className=" d-none d-md-block"
        >
          <img
            src="image 27.png"
            alt=""
            className="w-100 "
            style={{ height: "100vh" }}
          />
        </div>
        <div className="container-fluid">
          <div className="position-relative pt-5 pb-2 auth-margin ">
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
              onSubmit={Signup}
              style={{ marginTop: "" }}
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
                Create an account and let us find the best sales talent that
                satisfy your company’s requirements
              </div>
              <div
                style={{ fontSize: "1rem", fontWeight: "500" }}
                className="mt-3"
              >
                Recruiter name*
              </div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Recruiter name"
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
                Phone number*
              </div>
              <PhoneInput
                country="us"
                value={phone}
                onChange={() => setPhone(phone)}
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
                className="mt-3"
              >
                Address*
              </div>
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                placeholder="State"
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
                className="mt-3"
              >
                Company's name*
              </div>
              <input
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                type="text"
                placeholder="Company name"
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
                className="my-3"
              >
                By continuing, you agree to name Terms of Use. Read our Privacy
                Policy.
              </div>
              <button
                type="submit"
                className="rounded primary_bg_color text-center py-2 text-white cursor-pointer w-100 border-0"
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
            <span className="bg-warning rounded p-1 black">created</span>.
          </div>
          <Link to="/recruiter-profile" className="link">
            <div
              style={{
                fontWeight: "500",
                fontSize: "20px",
                lineHeight: "24.2px",
              }}
              className="primary_bg_color white rounded py-3 mb-5 mt-2 cursor-pointer "
            >
              Start Recruiting
            </div>
          </Link>

          <div style={{ fontSize: "2rem" }} className="">
            <Link
              to="/recruiter-profile"
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
