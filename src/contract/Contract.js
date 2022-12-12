import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaBars,
  FaChevronDown,
  FaIceCream,
  FaRegEye,
  FaRegHeart,
  FaSistrix,
  FaSlidersH,
  FaSortAmountDown,
  FaThLarge,
} from "react-icons/fa";
import "./Index.css";
import { data } from "./db";
import { Nav, Sidebar } from "./Nav";

export default function Contract() {
  return (
    <>
      <Sidebar />
      <Nav />
      <article className="container-fluid mt-4 px-md-5">
        <div className="row justify-content-between align-items-center">
          <div className="col-12 col-sm-8 col-md-7">
            <div className="d-flex align-items-stretch">
              <div
                style={{
                  borderRight: "1px solid rgb(0, 0, 0, 0.1)",
                  paddingRight: "10px",
                }}
                className="d-flex w-100"
              >
                <div
                  style={{
                    border: "1px solid rgb(0, 0, 0, 0.1)",
                    borderRight: "1px solid white",
                    paddingLeft: "19px",
                    borderRadius: "5px 0 0 5px",
                    fontSize: "1.2rem",
                    fontWeight: "500",
                    color: "rgb(0, 0, 0, 0.5)",
                  }}
                  className="bg-white d-flex align-items-center"
                >
                  <FaSistrix />
                </div>
                <input
                  style={{
                    border: "1px solid rgb(0, 0, 0, 0.1)",
                    borderLeft: "1px solid white",
                    borderRadius: "0 5px 5px 0",
                    fontSize: "0.87rem",
                    fontWeight: "500",
                  }}
                  type="text"
                  placeholder="Search from the world's antique collection"
                  className="w-100 px-1 py-2"
                />
              </div>
              <div
                style={{
                  border: "1px solid rgb(0, 0, 0, 0.1)",
                  borderRadius: "5px",
                  background: "rgb(0, 0, 0, 0.006)",
                }}
                className="mx-3 px-3 d-flex align-items-center"
              >
                <FaSlidersH />
                <div
                  style={{ fontSize: "15px", fontWeight: "500" }}
                  className="mx-1"
                >
                  FILTERS
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-4 col-md-5 d-none d-sm-block">
            <div className="d-flex w-100 justify-content-end align-items-center">
              <div className="d-flex cursor align-items-center brown">
                <FaIceCream style={{ transform: "rotate(30deg)" }} />
                <div
                  style={{ fontSize: "15px", fontWeight: "500" }}
                  className=" mx-1"
                >
                  SURPRISE ME
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />

        <div className="d-flex justify-content-between align-items-center mt-4 mb-3">
          <div className="d-flex align-items-center">
            <div className="bg-white rounded px-1 pb-1 cursor">
              <FaBars
                style={{ fontSize: "1.3rem", color: "rgba(0, 0, 0, .3)" }}
              />
            </div>
            <div className="bg-white rounded px-1 pb-1 mx-2 cursor">
              <FaThLarge style={{ fontSize: "1.3rem" }} />
            </div>
          </div>
          <div className="d-flex align-items-center">
            <div
              style={{ color: "rgba(0, 0, 0, .5)", fontWeight: "500" }}
              className="d-flex align-items-center mx-2"
            >
              <FaSortAmountDown className="mx-1" />
              <div className="">Sort By:</div>
            </div>
            <div
              style={{
                fontSize: "0.9rem",
                fontWeight: "500",
                color: "rgba(0, 0, 0, .5)",
                border: "1.5px solid rgba(0, 0, 0, .1)",
                borderRadius: "3px",
              }}
              className="d-flex align-items-center py-1 px-2"
            >
              <div className=" mx-1">RELEVANCE</div>
              <FaChevronDown />
            </div>
          </div>
        </div>
        <div className="row">
          {data.map(({ txt, title, img, css }, index) => {
            return (
              <div className="col-6 col-sm-4 col-md-3 col-xl-2 mb-3">
                <div
                  style={{ boxShadow: "0 2px 4px 0.3px rgba(0,0,0, .2)" }}
                  className={`${css} w-100 pt-5 rounded position-relative`}
                >
                  <img
                    src={img}
                    alt=""
                    style={{
                      width: "100%",
                      height: "120px",
                      objectFit: "contain",
                    }}
                  />
                  <div
                    style={{ borderRadius: "0 0 6px 6px" }}
                    className="bg-white px-3 py-2"
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <div
                        style={{
                          fontSize: "1.2rem",
                          fontWeight: "400",
                          fontFamily: "serif",
                        }}
                        className="text-capitalize"
                      >
                        {title}
                      </div>
                      <div
                        style={{ fontSize: "0.7rem", fontWeight: "600" }}
                        className=""
                      >
                        1300 CE
                      </div>
                    </div>
                    <div
                      style={{
                        height: "1px",
                        backgroundColor: "rgba(0,0,0, .05)",
                      }}
                      className="w-75 my-1"
                    ></div>
                    <div
                      style={{
                        fontSize: "0.8rem",
                        fontWeight: "500",
                        color: "rgba(0,0,0, .5)",
                      }}
                      className=""
                    >
                      {txt}
                    </div>
                  </div>
                  <div className="position-absolute pt-1 mx-2">
                    <div
                      style={{ fontSize: "0.8rem", color: "rgba(0,0,0, .5)" }}
                      className="d-flex align-items-center"
                    >
                      <FaRegHeart /> <div className="mx-1">88</div>
                      <FaRegEye style={{ marginLeft: "4px" }} />{" "}
                      <div className="mx-1">2.2k</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </article>
    </>
  );
}
