import React from "react";
import { FaChevronDown } from "react-icons/fa";

export default function Payment() {
  return (
    <article className={`job_search bg-white`}>
      <div
        className="d-none d-md-block"
        style={{
          position: "fixed",
          zIndex: "3",
          left: "0",
          top: "55.98px",
          height: "100vh",
          width: "25%",
        }}
      >
        <img src="./image 30.png" alt="" className="w-100 h-100" />
      </div>
      <div className="job-margin">
        <div className="container">
          <div className="row py-3">
            <div className="col-lg-11 col-12 mx-auto">
              <div
                style={{ fontSize: "24px", fontWeight: "700" }}
                className=" black"
              >
                Post Job
              </div>
              <div className="row">
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: "400",
                    lineHeight: "19.36px",
                  }}
                  className="col-md-12 black"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </div>
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: "400",
                    lineHeight: "19.36px",
                  }}
                  className="mt-2"
                >
                  Lorem Ipsum is simply dummy text of the printing
                </div>
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: "400",
                    lineHeight: "19.36px",
                  }}
                  className="my-1"
                >
                  Lorem Ipsum is simply dummy text of the printing
                </div>
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: "400",
                    lineHeight: "19.36px",
                  }}
                  className=""
                >
                  Lorem Ipsum is simply dummy text of the printing
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-12 col-md-7">
                  <div
                    style={{ fontSize: "24px", fontWeight: "700" }}
                    className=" black my-2"
                  >
                    Billing details
                  </div>
                  <div
                    style={{ fontSize: "1rem", fontWeight: "500" }}
                    className="mt-2"
                  >
                    Email Address*
                  </div>
                  <input
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
                    className="mt-2"
                  >
                    Country
                  </div>
                  <div
                    style={{
                      color: "rgba(223, 225, 230, 1)",
                      background: "#F4F5F7",
                      border: "2px solid #DFE1E6",
                      padding: "14px 0",
                    }}
                    className="rounded d-flex justify-content-between align-items-center my-1 px-3 cursor-pointer"
                  >
                    <div
                      style={{
                        fontSize: "0.87rem",
                        color: "#6B778C",
                        fontWeight: "400",
                      }}
                      className=""
                    >
                      united state of america{" "}
                    </div>
                    <FaChevronDown
                      style={{
                        fontSize: "0.87rem",
                        color: "#6B778C",
                        fontWeight: "400",
                      }}
                    />
                  </div>

                  <div
                    style={{ fontSize: "24px", fontWeight: "700" }}
                    className=" black mb-1 mt-4"
                  >
                    Pay with
                  </div>
                  <div
                    style={{
                      color: "rgba(223, 225, 230, 1)",
                      background: "#F4F5F7",
                      border: "2px solid #DFE1E6",
                      padding: "14px 0",
                    }}
                    className="rounded d-flex justify-content-between align-items-center my-1 px-3 cursor-pointer mt-3 mb-2"
                  >
                    <div>
                      <input
                        className="form-check-input"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        type="radio"
                        checked
                      ></input>{" "}
                      <span
                        style={{
                          fontSize: "0.87rem",
                          color: "#6B778C",
                          fontWeight: "400",
                        }}
                      >
                        Credit card
                      </span>
                    </div>
                    <img src="image 39.png" alt="" className="" />
                  </div>
                  <div
                    style={{
                      color: "rgba(223, 225, 230, 1)",
                      background: "#F4F5F7",
                      border: "2px solid #DFE1E6",
                      padding: "14px 0",
                    }}
                    className="rounded d-flex justify-content-between align-items-center my-1 px-3 cursor-pointer"
                  >
                    <div>
                      <input
                        className="form-check-input"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        type="radio"
                        checked
                      ></input>{" "}
                      <span
                        style={{
                          fontSize: "0.87rem",
                          color: "#6B778C",
                          fontWeight: "400",
                        }}
                      >
                        PayPal
                      </span>
                    </div>
                    <img src="image 40.png" alt="" className="" />
                  </div>

                  <div
                    style={{ fontSize: "1rem", fontWeight: "500" }}
                    className="mt-4"
                  >
                    Card number
                  </div>
                  <input
                    type="text"
                    placeholder="united state of america "
                    style={{
                      color: "rgba(124, 146, 166, 1)",
                      fontSize: "0.87rem",
                      fontWeight: "500",
                    }}
                    required
                    className=" py-2 px-3 login_input"
                  />
                  <div className="row">
                    <div className="col-6">
                      <div
                        style={{ fontSize: "1rem", fontWeight: "500" }}
                        className="mt-1"
                      >
                        Expiration date
                      </div>
                      <input
                        type="text"
                        style={{
                          color: "rgba(124, 146, 166, 1)",
                          fontSize: "0.87rem",
                          fontWeight: "500",
                        }}
                        required
                        className=" py-2 px-3 login_input"
                      />
                    </div>
                    <div className="col-6">
                      <div
                        style={{ fontSize: "1rem", fontWeight: "500" }}
                        className="mt-1"
                      >
                        Security code
                      </div>
                      <input
                        type="text"
                        style={{
                          color: "rgba(124, 146, 166, 1)",
                          fontSize: "0.87rem",
                          fontWeight: "500",
                        }}
                        required
                        className=" py-2 px-3 login_input"
                      />
                    </div>
                  </div>
                  <div
                    style={{ fontSize: "1rem", fontWeight: "500" }}
                    className="mt-1"
                  >
                    Name on card
                  </div>
                  <input
                    type="text"
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
                      fontSize: "20px",
                      fontWeight: "500",
                      lineHeight: "24.2px",
                    }}
                    className="primary_bg_color py-3 w-100 text-center white rounded mt-3 mb-2 cursor-pointer"
                  >
                    Place order
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      lineHeight: "16px",
                    }}
                    className="mt1 black text-center"
                  >
                    By clicking the button, you agree to the{" "}
                    <span className="primary_color cursor-pointer">
                      Terms and condition
                    </span>
                  </div>
                </div>
                <div className="col-12 col-md-5 order-first order-md-last">
                  <div
                    style={{ border: "1px solid #dfe1e6" }}
                    className=" px-2 py-2 my-3"
                  >
                    <div
                      style={{
                        fontSize: "24px",
                        fontWeight: "700",
                        lineHeight: "29.05px",
                      }}
                      className=" black"
                    >
                      Summary
                    </div>
                    <div className="d-flex justify-content-between align-items-center my-3">
                      <div
                        style={{
                          fontSize: "16px",
                          fontWeight: "400",
                          lineHeight: "19.36px",
                        }}
                        className="black"
                      >
                        Single Post Package
                      </div>
                      <div
                        style={{
                          fontSize: "16px",
                          fontWeight: "700",
                          lineHeight: "19.36px",
                        }}
                        className="black"
                      >
                        $15.00
                      </div>
                    </div>
                    <li
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                        lineHeight: "20.48px",
                      }}
                      className="black"
                    >
                      Per new post
                    </li>
                    <li
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                        lineHeight: "20.48px",
                      }}
                      className="black my-2"
                    >
                      7$ Per each repost
                    </li>
                    <li
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                        lineHeight: "20.48px",
                      }}
                      className="black"
                    >
                      Customer service 24/7
                    </li>
                  </div>
                  <div className="d-flex justify-content-end">
                    <div className="float-right">
                      <img src="image 41.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
