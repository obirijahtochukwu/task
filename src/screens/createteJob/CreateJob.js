import React from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaUpload, FaEye } from "react-icons/fa";
import "./Index.css";

export default function CreateJob() {
  const infos = [
    { title: "Company name*", text: "Your company name" },
    { title: "Choose industry*", text: "Select" },
    { title: "Role*", text: "Role" },
    { title: "sales Type*", text: "Select" },
    { title: "Experience", text: "Experience" },
    { title: "Salary", text: "Salary" },
    { title: "Country", text: "Location" },
    { title: "State", text: "State" },
  ];

  return (
    <article className={`job_search bg-white`}>
      <div className="container-fluid px-md-5">
        <div className="">
          <div
            className="d-none d-md-block"
            style={{
              position: "fixed",
              zIndex: "3",
              left: "0",
              top: "61.99px",
              height: "100vh",
              width: "17%",
            }}
          >
            <img src="./image 30.png" alt="" className="w-100 h-100" />
          </div>
          <div className="job-margin mb-5 mt-4">
            <div className="d-flex justify-content-between align-items-stretch">
              <div className="col-12 col-sm-5 col-md-5 col-lg-4">
                <div className="row h-100 flex-column">
                  <div
                    style={{ fontSize: "30px", fontWeight: "700" }}
                    className="black mx-2 px-0"
                  >
                    Create a job
                  </div>
                  <div className="mt-auto pt-5">
                    <div
                      style={{
                        fontSize: "14px",
                        fontWeight: "400",
                      }}
                      className=""
                    >
                      We recommend using a 200x200 or higher-res square image,
                      such as your Twitter or Facebook avatar
                    </div>
                    <div className="d-flex align-items-center px-0 mt-3">
                      <div className="rounded cursor-pointer primary_bg_color">
                        <div className="d-flex align-items-center text-white px-2 py-2">
                          <div>
                            <FaUpload className="mx-2" />{" "}
                          </div>
                          <div
                            className="d-non"
                            style={{
                              fontSize: "0.87rem",
                              fontWeight: "500",
                              paddingRight: "8px",
                            }}
                          >
                            Upload
                          </div>
                        </div>
                      </div>
                      <div
                        style={{ color: "rgba(134, 146, 166, 1)" }}
                        className=" mx-2"
                      >
                        no file chosen
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-3 my-md-0 col-12 col-sm-7 col-lg-8">
                <div
                  style={{
                    background: "#f2f9ff",
                    border: "1px solid #ECECEC",
                    paddingRight: "8px",
                    paddingLeft: "24px",
                  }}
                  className="rounded py-4"
                >
                  <div
                    style={{ fontSize: "1.3rem", fontWeight: "700" }}
                    className=""
                  >
                    Tips
                  </div>
                  <li>
                    Lorem Ipsum is simply dummy text of the printing printing my
                    text
                  </li>
                  <li className="mt-2">
                    Lorem Ipsum is simply dummy text of the printing printing my
                    text
                  </li>
                  <li className="mt-2">
                    Lorem Ipsum is simply dummy text of the printing printing my
                    text
                  </li>
                  <li className="mt-2">
                    Lorem Ipsum is simply dummy text of the printing printing my
                    text
                  </li>
                </div>
              </div>
            </div>

            <div className="d-flex align-items-center my-4">
              <div
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "700",
                  width: "388px",
                }}
                className="black"
              >
                General information
              </div>
              <hr className="hr_line" />
            </div>
            <section>
              <div className="row">
                <div className="col-12">
                  <div className="black">Job title*</div>
                  <div
                    style={{
                      color: "rgba(223, 225, 230, 1)",
                      background: "#F4F5F7",
                      border: "2px solid #DFE1E6",
                    }}
                    className="rounded my-1 py-2 px-2 cursor-pointer"
                  >
                    <div
                      style={{
                        fontSize: "0.87rem",
                        color: "#6B778C",
                        fontWeight: "400",
                      }}
                      className=""
                    >
                      Write the best headline for your job
                    </div>
                  </div>
                </div>

                {infos.map(({ title, text }, index) => {
                  return (
                    <div className="col- 12 col-sm-6 my-2">
                      <div
                        style={{ fontSize: "15px", fontWeight: "500" }}
                        className="black"
                      >
                        {title}
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
                            fontSize: "14px",
                            color: "#6B778C",
                            fontWeight: "500",
                          }}
                          className=""
                        >
                          {text}
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
                  );
                })}
              </div>
            </section>

            <div className="d-flex align-items-center my-4">
              <div
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "700",
                  width: "338px",
                }}
                className="black"
              >
                Jobs Description
              </div>
              <hr className="hr_line" />
            </div>

            <div className="col-12">
              <textarea
                placeholder="Text..."
                className="w-100 rounded p-3"
                style={{
                  height: "350px",
                  color: "rgba(134, 146, 166, 1)",
                  background: "#EBECF0",
                  border: "1px solid #8692A6",
                }}
              ></textarea>
            </div>
            <div className="d-flex align-items-center my-4">
              <div
                style={{ fontSize: "1.1rem", fontWeight: "700" }}
                className="black"
              >
                Requirements
              </div>
              <hr style={{ marginLeft: "2rem" }} className="hr_line" />
            </div>

            <div className="col-12">
              <textarea
                placeholder="Text..."
                className="w-100 rounded p-3"
                style={{
                  height: "350px",
                  color: "rgba(134, 146, 166, 1)",
                  background: "#EBECF0",
                  border: "1px solid #8692A6",
                }}
              ></textarea>
            </div>
            <div className="d-flex align-items-center my-4">
              <div
                style={{ fontSize: "1.1rem", fontWeight: "700" }}
                className="black"
              >
                Qualifications
              </div>
              <hr style={{ marginLeft: "2rem" }} className="hr_line" />
            </div>

            <div className="col-12">
              <textarea
                placeholder="Text..."
                className="w-100 rounded p-3"
                style={{
                  height: "350px",
                  color: "rgba(134, 146, 166, 1)",
                  background: "#EBECF0",
                  border: "1px solid #8692A6",
                }}
              ></textarea>
            </div>

            <div className="col-md-7 my-3">
              <div
                style={{ fontSize: "17px", fontWeight: "500" }}
                className="black"
              >
                Email address to receive CV *
              </div>
              <div
                style={{
                  color: "rgba(223, 225, 230, 1)",
                  background: "#F4F5F7",
                  border: "2px solid #DFE1E6",
                }}
                className="rounded my-1 py-2 px-3 cursor-pointer"
              >
                <div
                  style={{
                    fontSize: "0.87rem",
                    color: "#6B778C",
                    fontWeight: "400",
                  }}
                  className=""
                >
                  Your Best Email
                </div>
              </div>
              <div className="d-flex align-items-center mt-3">
                <Link
                  to="/payment"
                  className="rounded cursor-pointer primary_bg_color link"
                >
                  <div className="d-flex align-items-stretch text-white px-4 py-2">
                    <div
                      className="white "
                      style={{ fontSize: "0.87rem", fontWeight: "500" }}
                    >
                      NEXT
                    </div>
                  </div>
                </Link>
                <div className="rounded cursor-pointer primary_bg_color mx-2">
                  <Link
                    to="/preview-job"
                    className="d-flex align-items-center text-white px-2 py-2 link"
                  >
                    <div>
                      <FaEye className="mx-2" />{" "}
                    </div>
                    <div
                      className=""
                      style={{ fontSize: "0.87rem", fontWeight: "500" }}
                    >
                      Preview Job
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
