import React, { useState } from "react";
import { FaChevronDown, FaShare, FaSistrix } from "react-icons/fa";
import PreviewJob from "./PreviewJob";

export default function Jobs() {
  const [preview, setPreview] = useState(false);

  const jobs = [
    {
      title: "Job headline Job headline ",
      salary: "20k-50k",
      duration: "Full Time",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.",
      contract: "1 - 3day",
      location: "Location",
      time: "1 day ago.",
      job: "Job Description",
    },
    {
      title: "Job headline Job headline ",
      salary: "20k-50k",
      duration: "Full Time",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.",
      contract: "1 - 3day",
      location: "Location",
      time: "1 day ago.",
      job: "Job Description",
    },
    {
      title: "Job headline Job headline ",
      salary: "20k-50k",
      duration: "Full Time",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.",
      contract: "1 - 3day",
      location: "Location",
      time: "1 day ago.",
      job: "Job Description",
    },
    {
      title: "Job headline Job headline ",
      salary: "20k-50k",
      duration: "Full Time",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.",
      contract: "1 - 3day",
      location: "Location",
      time: "1 day ago.",
      job: "Job Description",
    },
    {
      title: "Job headline Job headline ",
      salary: "20k-50k",
      duration: "Full Time",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.",
      contract: "1 - 3day",
      location: "Location",
      time: "1 day ago.",
      job: "Job Description",
    },
    {
      title: "Job headline Job headline ",
      salary: "20k-50k",
      duration: "Full Time",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.",
      contract: "1 - 3day",
      location: "Location",
      time: "1 day ago.",
      job: "Job Description",
    },
    {
      title: "Job headline Job headline ",
      salary: "20k-50k",
      duration: "Full Time",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.",
      contract: "1 - 3day",
      location: "Location",
      time: "1 day ago.",
      job: "Job Description",
    },
    {
      title: "Job headline Job headline ",
      salary: "20k-50k",
      duration: "Full Time",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.",
      contract: "1 - 3day",
      location: "Location",
      time: "1 day ago.",
      job: "Job Description",
    },
    {
      title: "Job headline Job headline ",
      salary: "20k-50k",
      duration: "Full Time",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.",
      contract: "1 - 3day",
      location: "Location",
      time: "1 day ago.",
      job: "Job Description",
    },
    {
      title: "Job headline Job headline ",
      salary: "20k-50k",
      duration: "Full Time",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.",
      contract: "1 - 3day",
      location: "Location",
      time: "1 day ago.",
      job: "Job Description",
    },
    {
      title: "Job headline Job headline ",
      salary: "20k-50k",
      duration: "Full Time",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.",
      contract: "1 - 3day",
      location: "Location",
      time: "1 day ago.",
      job: "Job Description",
    },
  ];

  return (
    <div className="">
      <article className={`job_search ${preview && "d-none"} `}>
        <div className="container-fluid">
          <div className="row align-items-stretch">
            <div className="col-11 col-md-9 col-lg-8 mx-auto">
              <div className="">
                <div
                  style={{ fontSize: "27px", fontWeight: "700" }}
                  className="primary_color my-3"
                >
                  Find the job you want
                </div>
                <div
                  style={{ background: "rgba(185, 223, 254, 0.5)" }}
                  className="row py-2 my-2 rounded"
                >
                  <div className="col-12 col-md-4">
                    <div
                      style={{
                        color: "rgba(223, 225, 230, 1)",
                        background: "#F4F5F7",
                        border: "2px solid #DFE1E6",
                      }}
                      className="rounded d-flex justify-content-between align-items-center my-1 py-2 px-2 cursor-pointer w-100"
                    >
                      <div
                        style={{
                          fontSize: "0.87rem",
                          color: "#6B778C",
                          fontWeight: "400",
                        }}
                        className=""
                      >
                        Sales type
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
                        Job type
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
                  <div className="col-12 col-md-4">
                    <div
                      style={{
                        color: "rgba(223, 225, 230, 1)",
                        background: "#F4F5F7",
                        border: "2px solid #DFE1E6",
                      }}
                      className="rounded d-flex justify-content-between align-items-center my-1 py-2 px-2 cursor-pointer w-100"
                    >
                      <div
                        style={{
                          fontSize: "0.87rem",
                          color: "#6B778C",
                          fontWeight: "400",
                        }}
                        className=""
                      >
                        Role
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
                        Industry
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
                  <div className="col-12 col-md-4">
                    <div className="d-flex">
                      <div className="w-100">
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
                            Role
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
                          style={{
                            color: "rgba(223, 225, 230, 1)",
                            background: "#F4F5F7",
                            border: "2px solid #DFE1E6",
                          }}
                          className="rounded d-flex justify-content-between align-items-center my-1 py-2 px-2 cursor-pointer w-100"
                        >
                          <div
                            style={{
                              fontSize: "0.87rem",
                              color: "#6B778C",
                              fontWeight: "400",
                            }}
                            className=""
                          >
                            Industry
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
                      <div
                        style={{
                          fontSize: "2.7rem",
                          backgroundColor: "rgba(241, 147, 6, 1)",
                          fontWeight: "400",
                        }}
                        className="d-flex align-items-center black my-1 px-2 rounded mx-1"
                      >
                        <FaSistrix />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5">
                <div
                  className="black mt-4 mb-3 mx-1"
                  style={{ fontSize: "18px", fontWeight: "500" }}
                >
                  Jobs we found that may interest you in
                </div>
                <div className="row">
                  {jobs.map(
                    (
                      {
                        time,
                        title,
                        duration,
                        salary,
                        desc,
                        job,
                        location,
                        contract,
                      },
                      index
                    ) => {
                      return (
                        <div
                          style={{
                            borderTop: "0.1px solid rgba(221, 221, 221, 1)",
                            borderBottom: "0.1px solid rgba(221, 221, 221, 1)",
                            borderRight: "4px solid #4897D8",
                            borderLeft: "4px solid #4897D8",
                            borderRadius: "8px",
                          }}
                          className="col-12 my-2 pt-3"
                          key={index}
                        >
                          <div className="d-flex justify-content-between ">
                            <div className="">
                              <span
                                style={{
                                  fontSize: "1.7rem",
                                  fontWeight: "700",
                                }}
                                className="black"
                              >
                                {title}
                              </span>{" "}
                              <br />
                              <span
                                className="mx-1"
                                style={{ fontSize: "1rem", fontWeight: "400" }}
                              >
                                {location}
                              </span>
                              <span
                                className="mx-1"
                                style={{ fontSize: "1rem", fontWeight: "400" }}
                              >
                                {duration}
                              </span>
                              <span
                                className="mx-1"
                                style={{ fontSize: "1rem", fontWeight: "400" }}
                              >
                                {salary}
                              </span>
                              <span
                                className="mx-1"
                                style={{ fontSize: "1rem", fontWeight: "400" }}
                              >
                                {contract}
                              </span>
                            </div>
                            <img src="-- Replace Me --.png" alt="" />
                          </div>
                          <div className="d-flex align-items-center mt-2 mb-2">
                            <div
                              style={{ fontSize: "24px", fontWeight: "700" }}
                              className=""
                            >
                              {job}
                            </div>
                            <div className="mx-2">{time}</div>
                          </div>
                          <div className="">{desc}</div>
                          <div className="d-flex justify-content-between align-items-center my-4">
                            <div className="d-flex">
                              <div
                                style={{
                                  background: "rgba(241, 147, 6, 1)",
                                  fontSize: "14px",
                                  fontWeight: "500",
                                }}
                                className="rounded white px-3 py-2"
                              >
                                Apply by click
                              </div>
                              <div
                                style={{
                                  fontSize: "14px",
                                  fontWeight: "500",
                                }}
                                className="rounded primary_bg_color py-2 px-3 mx-2"
                              >
                                <div className="white">
                                  <FaShare /> Share
                                </div>
                              </div>
                            </div>
                            <div
                              onClick={() => setPreview(true)}
                              className="primary_color cursor-pointer"
                            >
                              Show more
                            </div>
                          </div>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            </div>
            <div className="col-md-2 col-lg-3 d-none d-md-block">
              <img src="./image 30.png" alt="" className="w-100 job_img" />
            </div>
          </div>
        </div>
      </article>
      <PreviewJob jobs={jobs} setPreview={setPreview} preview={preview} />
    </div>
  );
}
