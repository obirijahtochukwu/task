import React, { useState } from "react";
import { FaChevronDown, FaShare, FaSistrix } from "react-icons/fa";

export default function Jobs() {
  const [readMore, setReadMore] = useState(false);
  const [id, setId] = useState();
  const show = (index) => {
    setReadMore(!readMore);
    setId(index);
  };

  const jobs = [
    {
      title: "Job headline Job headline Job headline Job headline ",
      salary: "20k-50k",
      duration: "Full Time",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.",
      contract: "1 - 3day",
      location: "Location",
      time: "1 day ago",
      job: "Job Description",
    },
    {
      title: "Job headline Job headline Job headline Job headline ",
      salary: "20k-50k",
      duration: "Full Time",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.",
      contract: "1 - 3day",
      location: "Location",
      time: "1 day ago",
      job: "Job Description",
    },
    {
      title: "Job headline Job headline Job headline Job headline ",
      salary: "20k-50k",
      duration: "Full Time",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.",
      contract: "1 - 3day",
      location: "Location",
      time: "1 day ago",
      job: "Job Description",
    },
    {
      title: "Job headline Job headline Job headline Job headline ",
      salary: "20k-50k",
      duration: "Full Time",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.",
      contract: "1 - 3day",
      location: "Location",
      time: "1 day ago",
      job: "Job Description",
    },
    {
      title: "Job headline Job headline Job headline Job headline ",
      salary: "20k-50k",
      duration: "Full Time",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.",
      contract: "1 - 3day",
      location: "Location",
      time: "1 day ago",
      job: "Job Description",
    },
    {
      title: "Job headline Job headline Job headline Job headline ",
      salary: "20k-50k",
      duration: "Full Time",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.",
      contract: "1 - 3day",
      location: "Location",
      time: "1 day ago",
      job: "Job Description",
    },
    {
      title: "Job headline Job headline Job headline Job headline ",
      salary: "20k-50k",
      duration: "Full Time",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.",
      contract: "1 - 3day",
      location: "Location",
      time: "1 day ago",
      job: "Job Description",
    },
    {
      title: "Job headline Job headline Job headline Job headline ",
      salary: "20k-50k",
      duration: "Full Time",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.",
      contract: "1 - 3day",
      location: "Location",
      time: "1 day ago",
      job: "Job Description",
    },
    {
      title: "Job headline Job headline Job headline Job headline ",
      salary: "20k-50k",
      duration: "Full Time",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.",
      contract: "1 - 3day",
      location: "Location",
      time: "1 day ago",
      job: "Job Description",
    },
    {
      title: "Job headline Job headline Job headline Job headline ",
      salary: "20k-50k",
      duration: "Full Time",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.",
      contract: "1 - 3day",
      location: "Location",
      time: "1 day ago",
      job: "Job Description",
    },
    {
      title: "Job headline Job headline Job headline Job headline ",
      salary: "20k-50k",
      duration: "Full Time",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.",
      contract: "1 - 3day",
      location: "Location",
      time: "1 day ago",
      job: "Job Description",
    },
  ];

  return (
    <div className="">
      <article className={`job_search`}>
        <div className="container-fluid px-4">
          <div className="">
            <div className="modal-margin">
              <div className="container">
                <div
                  style={{ fontSize: "27px", fontWeight: "700" }}
                  className="primary_color my-3"
                >
                  Find the job you want
                </div>
                <div
                  style={{
                    background: "rgba(185, 223, 254, 0.5)",
                  }}
                  className="d-md-flex py-2 px-md-2 my-2 rounded align-items-stretch w-100"
                >
                  <div className="col-12 colx">
                    <div
                      style={{
                        color: "rgba(223, 225, 230, 1)",
                        background: "#F4F5F7",
                        border: "2px solid #DFE1E6",
                      }}
                      className="rounded d-flex justify-content-between align-items-center py-2 px-2 cursor-pointer w-100"
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
                      className="rounded d-flex justify-content-between align-items-center mt-1 py-2 px-2 cursor-pointer"
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
                  <div className="col-12 colx">
                    <div className="mx-md-2 my-1 my-md-0">
                      <div
                        style={{
                          color: "rgba(223, 225, 230, 1)",
                          background: "#F4F5F7",
                          border: "2px solid #DFE1E6",
                        }}
                        className="rounded d-flex justify-content-between align-items-center py-2 px-2 cursor-pointer w-100"
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
                        className="rounded d-flex justify-content-between align-items-center mt-1 py-2 px-2 cursor-pointer"
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
                  </div>
                  <div className="col-12 colx">
                    <div className="d-flex">
                      <div className="w-100">
                        <div
                          style={{
                            color: "rgba(223, 225, 230, 1)",
                            background: "#F4F5F7",
                            border: "2px solid #DFE1E6",
                          }}
                          className="rounded d-flex justify-content-between align-items-center py-2 px-2 cursor-pointer"
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
                          className="rounded d-flex justify-content-between align-items-center py-2 px-2 cursor-pointer mt-1 w-100"
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
                    </div>
                  </div>
                  <div className="col-12 colx-1">
                    <div
                      style={{
                        fontSize: "2.7rem",
                        backgroundColor: "rgba(241, 147, 6, 1)",
                        fontWeight: "400",
                      }}
                      className="d-flex align-items-center justify-content-center black py-1 mt-1 mt-md-0 px-2 rounded h-100 w-100 mx-md-2"
                    >
                      <FaSistrix />
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div
                  className="black mt-4 mb-3 mx-1"
                  style={{ fontSize: "18px", fontWeight: "500" }}
                >
                  Jobs we found that may interest you in
                </div>
                <div className="container">
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
                              borderBottom:
                                "0.1px solid rgba(221, 221, 221, 1)",
                              borderRight: "7px solid #4897D8",
                              borderLeft: "7px solid #4897D8",
                              borderRadius: "8px",
                            }}
                            className="col-12 my-2 pt-3 bg-white"
                            key={index}
                          >
                            <div className="d-flex justify-content-between align-items-strecth">
                              <div className="">
                                <span
                                  style={{
                                    fontSize: "28px",
                                    fontWeight: "700",
                                    lineHeight: "33.89px",
                                  }}
                                  className="black"
                                >
                                  {title}
                                </span>{" "}
                                <div className=" mt-2">
                                  <span
                                    className=" mt-3"
                                    style={{
                                      fontSize: "24px",
                                      fontWeight: "700",
                                    }}
                                  >
                                    Company
                                  </span>
                                  <span
                                    className="mx-2 mt-3"
                                    style={{
                                      fontSize: "1rem",
                                      fontWeight: "400",
                                    }}
                                  >
                                    {location}
                                  </span>
                                  <span
                                    className="mx-2 mt-3"
                                    style={{
                                      fontSize: "1rem",
                                      fontWeight: "400",
                                    }}
                                  >
                                    {duration}
                                  </span>
                                  <span
                                    className="mx-2 mt-3"
                                    style={{
                                      fontSize: "1rem",
                                      fontWeight: "400",
                                    }}
                                  >
                                    {salary}
                                  </span>
                                  <span
                                    className="mx-2 mt-3"
                                    style={{
                                      fontSize: "1rem",
                                      fontWeight: "400",
                                    }}
                                  >
                                    {contract}
                                  </span>
                                </div>
                              </div>
                              <img
                                src="-- Replace Me --.png"
                                className=""
                                alt=""
                              />
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
                            <div className="">
                              {id === index && readMore
                                ? desc
                                : desc.substring(0, 300)}
                            </div>
                            {id}
                            <div className="d-flex justify-content-between align-items-center my-4">
                              <div className="d-sm-flex d-block">
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
                                  className="rounded d-flex justify-content-center primary_bg_color py-2 px-3 mx-sm-2 mt-1 mt-sm-0"
                                >
                                  <div className="white">
                                    <FaShare /> Share
                                  </div>
                                </div>
                              </div>
                              <div
                                onClick={() => show(index)}
                                className="primary_color cursor-pointer link  mx-3"
                              >
                                {index === id && readMore
                                  ? "Show less"
                                  : "Show more"}
                              </div>
                            </div>
                          </div>
                        );
                      }
                    )}
                    <div
                      style={{
                        fontSize: "14px",
                        fontWeight: "500",
                        width: "fit-content",
                      }}
                      className="rounded primary_bg_color py-2 px-3 mt-1 mx-0 cursor-pointer"
                    >
                      <div className="white">Load more results</div>
                    </div>
                  </div>
                </div>
                <div className="pt-3">
                  <hr />
                  <div className="d-md-flex d-block container justify-content-between align-items-center my-4">
                    <div style={{ fontSize: "14px" }} className="black my-3">
                      &copy;2002, All right reserved.
                    </div>
                    <div className="d-md-flex d-block align-items-center">
                      <div className="">
                        <a
                          href="#8"
                          style={{ fontSize: "14px" }}
                          className="black "
                        >
                          Privacy Policy
                        </a>
                      </div>
                      <div className="my-1">
                        <a
                          href="#8"
                          style={{ fontSize: "14px" }}
                          className="black mx-md-4"
                        >
                          Terms of Service
                        </a>
                      </div>
                      <div className="">
                        <a
                          href="#8"
                          style={{ fontSize: "14px" }}
                          className="black"
                        >
                          Cookies Settings
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                position: "fixed",
                zIndex: "3",
                right: "0",
                top: "55.98px",
                height: "100vh",
                width: "15%",
              }}
              className=" d-none d-md-block"
            >
              <img src="./image 30.png" alt="" className="w-100 h-100" />
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
