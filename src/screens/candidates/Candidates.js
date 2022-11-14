import React from "react";
import { FaSistrix, FaChevronDown, FaTrash } from "react-icons/fa";
import "./Index.css";

export default function Candidates() {
  const data = [
    {
      title: "Job Title",
      category: "Text",
      status: "New",
      candidate: "Jane Rotanson",
      date: "00/00/0000",
      resume: "View Resumes",
    },
    {
      title: "Job Title",
      category: "Text",
      status: "New",
      candidate: "Jane Rotanson",
      date: "00/00/0000",
      resume: "View Resumes",
    },
    {
      title: "Job Title",
      category: "Text",
      status: "New",
      candidate: "Jane Rotanson",
      date: "00/00/0000",
      resume: "View Resumes",
    },
    {
      title: "Job Title",
      category: "Text",
      status: "New",
      candidate: "Jane Rotanson",
      date: "00/00/0000",
      resume: "View Resumes",
    },
    {
      title: "Job Title",
      category: "Text",
      status: "New",
      candidate: "Jane Rotanson",
      date: "00/00/0000",
      resume: "View Resumes",
    },
    {
      title: "Job Title",
      category: "Text",
      status: "New",
      candidate: "Jane Rotanson",
      date: "00/00/0000",
      resume: "View Resumes",
    },
  ];
  return (
    <div className="margin">
      <div className="container-fluid bg-white py-5">
        <div
          style={{ fontWeight: "700", fontSize: "1.87rem" }}
          className=" black"
        >
          Canditates
        </div>
        <div className="d-flex my-3">
          <div
            style={{
              color: "rgba(223, 225, 230, 1)",
              background: "#F4F5F7",
              border: "2px solid #DFE1E6",
            }}
            className="d-flex align-items-center rounded px-2 black"
          >
            <input
              style={{
                color: "rgba(223, 225, 230, 1)",
                background: "#F4F5F7",
                border: "none",
              }}
              type="text"
              name="text"
              placeholder="Text..."
              id=""
              className="py-2 black"
            />
            <div className="">
              <FaSistrix style={{ fontSize: "1.5rem" }} />
            </div>
          </div>
          <div
            style={{
              color: "rgba(223, 225, 230, 1)",
              background: "#F4F5F7",
              border: "2px solid #DFE1E6",
            }}
            className="rounded d-flex justify-content-between align-items-center py-2 px-2 cursor-pointer mx-2"
          >
            <div
              style={{
                fontSize: "0.87rem",
                color: "#6B778C",
                fontWeight: "400",
              }}
              className=" mx-2"
            >
              All Jobs
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
            className="rounded d-flex justify-content-between align-items-center py-2 px-2 cursor-pointer"
          >
            <div
              style={{
                fontSize: "0.87rem",
                color: "#6B778C",
                fontWeight: "400",
              }}
              className=" mx-2"
            >
              All Dates
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

        <article className=" overflow overflow-auto">
          <div className="d-flex table_ pb-2 pt-3 align-items-center">
            <div style={{ fontWeight: "700" }} className=" col-5 col-lg-3 ">
              Job Applied for
            </div>
            <div style={{ fontWeight: "700" }} className=" col-5 col-lg-3">
              {"Categories"}
            </div>
            <div className=" col-5 col-lg-3">
              <div
                style={{
                  fontWeight: "700",
                }}
                className="p-1 d-flex align-items-center text-center"
              >
                {"Status"}
              </div>
            </div>
            <div style={{ fontWeight: "700" }} className=" col-5 col-lg-3">
              Candidates
            </div>
            <div style={{ fontWeight: "700" }} className=" col-5 col-lg-3 ">
              Date
            </div>
            <div className="col-5 col-lg-3 ">
              <span className="d-flex align-items-stretch">
                <div
                  style={{ fontWeight: "700" }}
                  className="mx-2 px-2 d-flex align-items-center black"
                >
                  Resumes
                </div>
              </span>
            </div>
          </div>
          {data.map(
            ({ title, category, status, candidate, date, resume }, index) => {
              return (
                <div
                  className="d-flex table_ pb-2 pt-3 align-items-center"
                  key={index}
                >
                  <div className=" col-5 col-lg-3 ">{title}</div>
                  <div className=" col-5 col-lg-3">{category}</div>
                  <div className=" col-5 col-lg-3">
                    <div
                      style={{
                        fontSize: "11px",
                        fontWeight: "700",
                        background: "#F4F5F7",
                        width: "fit-content",
                      }}
                      className="p-1 rounded d-flex align-items-center text-center"
                    >
                      {status}
                    </div>
                  </div>
                  <div className=" col-5 col-lg-3">
                    <img src="./avatar.png" alt="" className="mx-2" />
                    {candidate}
                  </div>
                  <div className=" col-5 col-lg-3">{date}</div>
                  <div className="col-5 col-lg-3 ">
                    <span className="d-flex align-items-stretch">
                      <div
                        style={{ fontSize: "11px", fontWeight: "500" }}
                        className="mx-2 primary_bg_color px-2 rounded white d-flex align-items-center cursor-pointer"
                      >
                        {resume}
                      </div>
                      <div
                        style={{ background: "rgba(241, 112, 112, 1)" }}
                        className="py-2 rounded white px-2 cursor-pointer"
                      >
                        <FaTrash />{" "}
                      </div>
                    </span>
                  </div>
                </div>
              );
            }
          )}
        </article>
      </div>
    </div>
  );
}
