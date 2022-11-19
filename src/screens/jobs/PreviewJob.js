import React from "react";
import { FaEdit, FaShare } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function PreviewJob() {
  const jobs = [
    {
      title: "Job headline Job headline Job headline Job headline ",
      salary: "20k-50k",
      duration: "Full Time",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.",
      contract: "1 - 3day",
      location: "Location",
      time: "1 day ago.",
      job: "Job Description",
      req: "Requirements",
      reqiurements:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.",
      qualify: "Qualifications",
      Qualifications:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.",
    },
  ];

  return (
    <article className={` job_search `}>
      <div className="container-fluid bg-white">
        <div className="">
          <div
            style={{
              position: "fixed",
              zIndex: "3",
              left: "0",
              top: "55.98px",
              height: "100vh",
              width: "25%",
            }}
            className=" d-none d-md-block "
          >
            <img src="./image 30.png" alt="" className="w-100 h-100" />
          </div>
          <div className="row">
            <div className="col-11 col- mx-auto">
              <div className="modal_margin">
                <div className="mb-">
                  <div className="d-flex justify-content-between">
                    <Link
                      to="/jobs-list"
                      style={{
                        fontSize: "14px",
                        fontWeight: "500",
                        width: "fit-content",
                      }}
                      className="rounded primary_bg_color py-2 px-3 my-4 cursor-pointer link"
                    >
                      <div className="white">Back</div>
                    </Link>
                    <div
                      style={{
                        fontSize: "14px",
                        fontWeight: "500",
                        width: "fit-content",
                      }}
                      className="rounded primary_bg_color py-2 px-3 my-4 cursor-pointer"
                    >
                      <div className="white">
                        <FaEdit /> Edit{" "}
                      </div>
                    </div>
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
                          req,
                          reqiurements,
                          qualify,
                          Qualifications,
                        },
                        index
                      ) => {
                        return (
                          <div
                            style={{
                              borderTop: "0.1px solid rgba(221, 221, 221, 1)",
                              borderBottom:
                                "0.1px solid rgba(221, 221, 221, 1)",
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
                                  style={{
                                    fontSize: "1rem",
                                    fontWeight: "400",
                                  }}
                                >
                                  {location}
                                </span>
                                <span
                                  className="mx-1"
                                  style={{
                                    fontSize: "1rem",
                                    fontWeight: "400",
                                  }}
                                >
                                  {duration}
                                </span>
                                <span
                                  className="mx-1"
                                  style={{
                                    fontSize: "1rem",
                                    fontWeight: "400",
                                  }}
                                >
                                  {salary}
                                </span>
                                <span
                                  className="mx-1"
                                  style={{
                                    fontSize: "1rem",
                                    fontWeight: "400",
                                  }}
                                >
                                  {contract}
                                </span>
                              </div>
                              <img src="-- Replace Me --.png" alt="" />
                            </div>
                            <div className="d-flex align-items-center mt-4">
                              <div
                                style={{ fontSize: "24px", fontWeight: "700" }}
                                className=""
                              >
                                {job}
                              </div>
                              <div className="mx-2">{time}</div>
                            </div>
                            <div style={{ fontSize: "1.125rem" }} className="">
                              {desc}
                            </div>
                            <div
                              style={{ fontSize: "24px", fontWeight: "700" }}
                              className="mt-4"
                            >
                              {req}
                            </div>
                            <div style={{ fontSize: "1.125rem" }} className="">
                              {reqiurements}
                            </div>
                            <div
                              style={{ fontSize: "24px", fontWeight: "700" }}
                              className="mt-4"
                            >
                              {qualify}
                            </div>
                            <div style={{ fontSize: "1.125rem" }} className="">
                              {Qualifications}
                            </div>
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
                      className="rounded primary_bg_color py-2 px-3 my-2 cursor-pointer"
                    >
                      <div className="white">Publish Job</div>
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
