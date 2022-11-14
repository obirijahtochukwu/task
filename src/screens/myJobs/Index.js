import React, { useState } from "react";
import {
  FaChevronDown,
  FaEdit,
  FaRegCircle,
  FaUpload,
  FaEye,
  FaArrowLeft,
} from "react-icons/fa";

export default function Index() {
  const [job, setJob] = useState(false);

  const jobs = [
    {
      title: "Front Counter Attendant",
      text: "Sprinkle Dreams",
      img: "Rectangle 36.png",
    },
    {
      title: "Front Counter Attendant",
      text: "Sprinkle Dreams",
      img: "Rectangle 36.png",
    },
    {
      title: "Front Counter Attendant",
      text: "Sprinkle Dreams",
      img: "Rectangle 36.png",
    },
    {
      title: "Front Counter Attendant",
      text: "Sprinkle Dreams",
      img: "Rectangle 36.png",
    },
  ];

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
    <div className="margin ">
      <div className={`${job && "d-none"} container-fluid bg-white py-4`}>
        <div className="row">
          <div className="d-flex  align-items-center justify-content-between mb-4  col-12 col-md-11 mx-auto">
            <div
              style={{ fontSize: "1.87rem", fontWeight: "700" }}
              className="black"
            >
              My Jobs
            </div>
            <div
              onClick={() => setJob(true)}
              className="rounded cursor-pointer primary_bg_color py-2 px-2 white"
            >
              + Add another job
            </div>
          </div>
          {jobs.map(({ text, title, img }, index) => {
            return (
              <div className=" col-12 col-md-11 mx-auto" key={index}>
                <div className="jobs_card justify-content-between py-4 px-3 my-2 cursor-pointer">
                  <div className="d-flex align-items-center ">
                    <img
                      src={img}
                      alt=""
                      className=""
                      width="94.72px"
                      height="97.67px"
                    />
                    <div className="mx-2">
                      <div
                        style={{
                          FontSize: "30px",
                          fontWeight: "500",
                          color: "#6B778C",
                        }}
                        className=""
                      >
                        {title}
                      </div>
                      <div
                        style={{
                          FontSize: "24px",
                          fontWeight: "400",
                          color: "#A4AFC0",
                        }}
                        className=""
                      >
                        {text}
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center ">
                    <div
                      style={{ background: "rgba(241, 147, 6, 1)" }}
                      className="d-flex align-items-center white mx-1 py-2 px-2 rounded"
                    >
                      <FaEdit />
                      <div className="mx-1 d-none d-md-block">Edit</div>
                    </div>
                    <div
                      style={{ background: "rgba(241, 147, 6, 1)" }}
                      className="d-md-flex align-items-center white rounded px-2 py-2 d-none"
                    >
                      <FaRegCircle />
                      <div className="mx-1">inprogress</div>
                      <FaChevronDown />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <article className={`${!job && "d-none"} job_search bg-white`}>
        <div className="container-fluid">
          <div className="row align-items-stretch">
            <div className="col-md-2 col-lg-3 col-xl-4 d-none d-md-block">
              <img src="./image 30.png" alt="" className="w-100 job_img" />
            </div>
            <div className="col-12 col-sm-12 col-md-10 col-lg-9 col-xl-8 mx-auto mb-5">
              <div className="d-sm-flex d-block justify-content-between align-items-start mt-3 mt-sm-5">
                <div className="">
                  <div
                    onClick={() => setJob(false)}
                    style={{ width: "fit-content" }}
                    className="primary_bg_color px-2 py-2 white rounded my-4 align-items-center d-flex cursor-pointer"
                  >
                    <FaArrowLeft />
                    <div className=" mx-1">BACK</div>
                  </div>
                  <div
                    style={{ fontSize: "30px", fontWeight: "700" }}
                    className="primary_color"
                  >
                    Create a job{" "}
                  </div>
                  <div className="d-block position-relative mb-sm-5">
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
                  <div
                    style={{
                      fontSize: "0.87rem",
                      fontWeight: "400",
                      color: "#7A869A",
                    }}
                    className="mt-4 mt-sm-5"
                  >
                    We recommend using a 200x200 or higher-res square image,
                    such as your Twitter or Facebook avatar
                  </div>
                  <div className="d-flex align-items-center mt-4">
                    <div className="rounded cursor-pointer primary_bg_color">
                      <div className="d-flex align-items-center text-white px-2 py-2">
                        <div>
                          <FaUpload className="mx-2" />{" "}
                        </div>
                        <div
                          className="d-non"
                          style={{ fontSize: "0.87rem", fontWeight: "500" }}
                        >
                          Upload Resume
                        </div>
                      </div>
                    </div>
                    <div className="primary_color mx-1">no file chosen</div>
                  </div>
                </div>
                <div
                  style={{ background: "#f2f9ff", border: "1px solid #ECECEC" }}
                  className="rounded pt-2 px-2 my-3 my-sm-0"
                >
                  <ul>
                    <div
                      style={{ fontSize: "1.3rem", fontWeight: "700" }}
                      className=""
                    >
                      Tips
                    </div>
                    <li>
                      Lorem Ipsum is simply dummy text of the printing printing
                      my text
                    </li>
                    <li>
                      Lorem Ipsum is simply dummy text of the printing printing
                      my text
                    </li>
                    <li>
                      Lorem Ipsum is simply dummy text of the printing printing
                      my text
                    </li>
                    <li>
                      Lorem Ipsum is simply dummy text of the printing printing
                      my text
                    </li>
                  </ul>
                </div>
              </div>
              <div className="d-flex align-items-center my-4">
                <div
                  style={{ fontSize: "1.1rem", fontWeight: "700" }}
                  className="black"
                >
                  General information
                </div>
                <hr className="hr_line" />
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
                      <div className="col-6 my-2">
                        <div
                          style={{ fontSize: "0.75rem", fontWeight: "500" }}
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
                              fontSize: "0.87rem",
                              color: "#6B778C",
                              fontWeight: "400",
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
                  style={{ fontSize: "1.1rem", fontWeight: "700" }}
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
                  Qualifications
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

              <div className="col-7 my-3">
                <div
                  style={{ fontSize: "17px", fontWeight: "500" }}
                  className=""
                >
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
                  <div className="rounded cursor-pointer primary_bg_color mx-2">
                    <div className="d-flex align-items-center text-white px-2 py-2">
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
    </div>
  );
}
