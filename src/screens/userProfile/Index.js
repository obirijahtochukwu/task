import React, { useState } from "react";
import { FaChevronDown, FaEye, FaUpload } from "react-icons/fa";
import "./Index.css";

export default function Index() {
  const [checked, setChecked] = useState(true);
  const [check, setCheck] = useState(false);

  return (
    <div className={` container-fluid bg-white py-5`}>
      <div className="container-lg">
        <div className="margin h-100">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="d-flex justify-content-between align-items-center">
                <div
                  style={{ fontSize: "1.87rem", fontWeight: "700" }}
                  className="black"
                >
                  Account info
                </div>
                <div className="d-flex align-items-between">
                  <div className="rounded cursor-pointer primary_bg_color mx-2">
                    <div className="d-flex align-items-center text-white px-2 py-2">
                      <div>
                        <FaEye className="mx-2" />{" "}
                      </div>
                      <div
                        className="d-none d-md-block"
                        style={{ fontSize: "0.87rem", fontWeight: "500" }}
                      >
                        My Resume
                      </div>
                    </div>
                  </div>
                  <div className="rounded cursor-pointer primary_bg_color">
                    <div className="d-flex align-items-center text-white px-2 py-2">
                      <div>
                        <FaUpload className="mx-2" />{" "}
                      </div>
                      <div
                        className="d-none d-md-block"
                        style={{ fontSize: "0.87rem", fontWeight: "500" }}
                      >
                        Upload Resume
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <section className="row mt-2">
                <div className="col-12 col-md-6 my-2">
                  <div
                    style={{ fontSize: "0.75rem", fontWeight: "500" }}
                    className=""
                  >
                    Status
                  </div>
                  <div
                    style={{
                      color: "rgba(223, 225, 230, 1)",
                      background: "#F4F5F7",
                      border: "2px solid #DFE1E6",
                    }}
                    className="rounded my-1 py-2 px-2"
                  >
                    <div
                      style={{
                        fontSize: "0.87rem",
                        color: "#6B778C",
                        fontWeight: "400",
                      }}
                      className=""
                    >
                      Dan Dani
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 my-2">
                  <div
                    style={{ fontSize: "0.75rem", fontWeight: "500" }}
                    className=""
                  >
                    State
                  </div>
                  <div
                    style={{
                      color: "rgba(223, 225, 230, 1)",
                      background: "#F4F5F7",
                      border: "2px solid #DFE1E6",
                    }}
                    className="rounded d-flex justify-content-between align-items-center my-1 py-2 px-2 cursor-pointer"
                  >
                    <div
                      style={{
                        fontSize: "0.87rem",
                        color: "#6B778C",
                        fontWeight: "400",
                      }}
                      className=""
                    >
                      California
                    </div>
                    <FaChevronDown
                      style={{
                        fontSize: "0.87rem",
                        color: "#6B778C",
                        fontWeight: "400",
                      }}
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6 my-2">
                  <div
                    style={{ fontSize: "0.75rem", fontWeight: "500" }}
                    className=""
                  >
                    Phone
                  </div>
                  <div
                    style={{
                      color: "rgba(223, 225, 230, 1)",
                      background: "#F4F5F7",
                      border: "2px solid #DFE1E6",
                    }}
                    className="rounded my-1 py-2 px-2"
                  >
                    <div
                      style={{
                        fontSize: "0.87rem",
                        color: "#6B778C",
                        fontWeight: "400",
                      }}
                      className=""
                    >
                      XXXXXXXXXXX
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 my-2">
                  <div
                    style={{ fontSize: "0.75rem", fontWeight: "500" }}
                    className=""
                  >
                    Gender
                  </div>
                  <div
                    style={{
                      color: "rgba(223, 225, 230, 1)",
                      background: "#F4F5F7",
                      border: "2px solid #DFE1E6",
                    }}
                    className="rounded d-flex justify-content-between align-items-center my-1 py-2 px-2 cursor-pointer"
                  >
                    <div
                      style={{
                        fontSize: "0.87rem",
                        color: "#6B778C",
                        fontWeight: "400",
                      }}
                      className=""
                    >
                      Male
                    </div>
                    <FaChevronDown
                      style={{
                        fontSize: "0.87rem",
                        color: "#6B778C",
                        fontWeight: "400",
                      }}
                    />
                  </div>
                </div>
              </section>

              <article className="row mt-4">
                <div
                  style={{ fontSize: "1.87rem", fontWeight: "700" }}
                  className="black"
                >
                  Status
                </div>
                <div className="col-12 col-sm-6 my-2">
                  <div
                    style={{ fontSize: "0.75rem", fontWeight: "500" }}
                    className=""
                  >
                    Status
                  </div>
                  <div
                    style={{
                      color: "rgba(223, 225, 230, 1)",
                      background: "#F4F5F7",
                      border: "2px solid #DFE1E6",
                    }}
                    className="rounded d-flex justify-content-between align-items-center my-1 py-2 px-2 cursor-pointer"
                  >
                    <div
                      style={{
                        fontSize: "0.87rem",
                        color: "#6B778C",
                        fontWeight: "400",
                      }}
                      className=""
                    >
                      Need a Job
                    </div>
                    <FaChevronDown
                      style={{
                        fontSize: "0.87rem",
                        color: "#6B778C",
                        fontWeight: "400",
                      }}
                    />
                  </div>
                </div>
              </article>

              <article className="row mt-4">
                <div
                  style={{ fontSize: "1.87rem", fontWeight: "700" }}
                  className="black"
                >
                  Notification
                </div>
                <div className="">
                  <div className="d-flex align-items-center my-3">
                    <div
                      onClick={() => setChecked(!checked)}
                      className={checked ? "check_box true" : "check_box"}
                    >
                      <div className={checked ? "boxtrue" : "box"}></div>
                    </div>
                    <div className="mx-2">
                      I don't want to receive email notifications for this
                      request
                    </div>
                  </div>
                  <div className="d-flex align-items-center my-3">
                    <div
                      onClick={() => setCheck(!check)}
                      className={check ? "check_box true" : "check_box"}
                    >
                      <div className={check ? "boxtrue" : "box"}></div>
                    </div>
                    <div className="mx-2">
                      I don't want to receive email notifications for this
                      request
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-lg-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
