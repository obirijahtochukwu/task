import React from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronDown, FaUpload, FaEye, FaArrowLeft } from "react-icons/fa";
import "./Index.css";

export default function CreateJob() {
  const history = useNavigate();

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
      <div className="container">
        <div className="">
          <div
            className="d-none d-md-block"
            style={{
              position: "fixed",
              zIndex: "3",
              left: "0",
              top: "55.98px",
              height: "100vh",
              width: "15%",
            }}
          >
            <img src="./image 30.png" alt="" className="w-100 h-100" />
          </div>
          <div className="job-margin mb-5">
            <div className="row justify-content-between align-items-stretch">
              <div className="col-12 col-sm-5 col-md-5 col-lg-4">
                <div className="row h-100 flex-column px-2">
                  <div
                    onClick={() => history(-1)}
                    style={{ width: "fit-content" }}
                    className="rounded primary_bg_color px-3 py-2 white mb-2 cursor-pointer"
                  >
                    <FaArrowLeft /> Back
                  </div>
                  <div
                    style={{ fontSize: "30px", fontWeight: "700" }}
                    className="black mx-0 px-0"
                  >
                    Create a job
                  </div>
                  <div className="d-flex align-items-center mt-auto pt-5 px-0">
                    <div className="rounded cursor-pointer primary_bg_color">
                      <div className="d-flex align-items-center text-white px-2 py-2">
                        <div>
                          <FaUpload className="mx-2" />{" "}
                        </div>
                        <div
                          className="d-non"
                          style={{ fontSize: "0.87rem", fontWeight: "500" }}
                        >
                          Upload
                        </div>
                      </div>
                    </div>
                    <div className="primary_color mx-1">no file chosen</div>
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

            <div className="row align-items-center my-4">
              <div
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "700",
                }}
                className="black col-8 col-md-5 col-lg-4 col-xl-3"
              >
                General information
              </div>
              <div className="col-4 col-md-7 col-lg-8 col-xl-9">
                <hr className="hr_line" />
              </div>
            </div>

            <section>
              <div className="row">
                <div className="col-12">
                  <div className="">Job title*</div>
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
                        style={{ fontSize: "14px", fontWeight: "500" }}
                        className=""
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

            <div className="row align-items-center my-4">
              <div
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "700",
                }}
                className="black col-8 col-md-5 col-lg-3 col-xl-3"
              >
                Jobs Description
              </div>
              <div className="col-4 col-md-7 col-lg-9 col-xl-9">
                <hr className="hr_line" />
              </div>
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

            <div className="col-7 my-3">
              <div style={{ fontSize: "17px", fontWeight: "500" }} className="">
                Email address to receive CV *
              </div>
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
                  Your Best Email
                </div>
              </div>
              <div className="d-flex align-items-between mt-2">
                <div className="rounded cursor-pointer primary_bg_color">
                  <div className="d-flex align-items-stretch text-white px-4 py-2">
                    <div
                      className=" pt-1"
                      style={{ fontSize: "0.87rem", fontWeight: "500" }}
                    >
                      NEXT
                    </div>
                  </div>
                </div>
                <div className="rounded cursor-pointer primary_bg_color mx-2">
                  <div className="d-flex align-items-center text-white px-2 py-2">
                    <div>
                      <FaEye className="mx-2" />{" "}
                    </div>
                    <div
                      className=""
                      style={{ fontSize: "0.87rem", fontWeight: "500" }}
                    >
                      Preview Job
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
