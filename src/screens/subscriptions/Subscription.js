import React from "react";
import { FaAngleDoubleRight, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Subscription() {
  return (
    <div className="margin bg-white">
      <div className="container-fluid">
        <div className="row py-5">
          <div className="col-lg-11 pr-lg-2 mx-auto">
            <div className="row">
              <div className="col-11">
                <div
                  style={{ fontSize: "1.875rem", fontWeight: "700" }}
                  className="black"
                >
                  Subscription Plans
                </div>
                <div
                  style={{ fontSize: "1.125rem", fontWeight: "400" }}
                  className="my-2"
                >
                  Acquire lasting talented sales assets through our subscription
                  program. Be updated with the latest sales resume applications
                  from distinguished candidates.
                </div>
              </div>
            </div>
            <div className="row my-4">
              <div className="col-11 col-md-6 col-xl-5 mx-auto mx-md-0 my-3">
                <div className="rounded px-4 py-5 primary_bg_color h-100">
                  <div
                    style={{ fontSize: "1rem", fontWeight: "600" }}
                    className="white"
                  >
                    Pay Per Post
                  </div>
                  <div className="white position-relative px-1">
                    <span
                      style={{
                        fontSize: "0.7rem",
                        fontWeight: "500",
                        position: "absolute",
                        top: "0.1rem",
                        left: "0",
                      }}
                    >
                      $
                    </span>
                    <span style={{ fontSize: "2.36rem", fontWeight: "800" }}>
                      15
                    </span>
                    <span style={{ fontSize: "1.25rem", fontWeight: "500" }}>
                      /Post{" "}
                    </span>
                  </div>
                  <div
                    style={{ fontSize: "1rem", fontWeight: "400" }}
                    className="white my-4"
                  >
                    No commitments cancel anytime
                  </div>
                  <div
                    style={{ fontSize: "1rem", fontWeight: "600" }}
                    className="white my-3"
                  >
                    Core Features
                  </div>
                  <div
                    style={{ fontSize: "1.25rem", fontWeight: "400" }}
                    className="d-flex align-items-center my-2"
                  >
                    <FaAngleDoubleRight />
                    <div className="white mx-2">Per new post</div>
                  </div>
                  <div
                    style={{ fontSize: "1.25rem", fontWeight: "400" }}
                    className="d-flex align-items-center my-2"
                  >
                    <FaAngleDoubleRight />
                    <div className="white mx-2">7$ Per each repost</div>
                  </div>
                  <div
                    style={{ fontSize: "1.25rem", fontWeight: "400" }}
                    className="d-flex align-items-center my-2 mb-5"
                  >
                    <FaAngleDoubleRight />
                    <div className="white mx-2">Customer service 24/7</div>
                  </div>
                  <Link
                    to="/payment"
                    className="rounded px-2 py-3 white my-4 link"
                    style={{
                      background: "rgba(147, 193, 231, 1)",
                    }}
                  >
                    Start 14 days free trial{" "}
                    <span
                      style={{ borderRadius: "50%" }}
                      className="bg-white py-1 px-1 mx-2 black"
                    >
                      <FaChevronRight />{" "}
                    </span>
                  </Link>
                </div>
              </div>
              <div className="col-11 col-md-6 col-xl-5 mx-auto mx-md-0 my-3">
                <div
                  style={{ background: "rgba(147, 193, 231, 1)" }}
                  className="rounded px-4 py-5 h-100"
                >
                  <div
                    style={{ fontSize: "1rem", fontWeight: "600" }}
                    className="white"
                  >
                    Create Unlimited Jobs
                  </div>
                  <div className="white position-relative px-1">
                    <span
                      style={{
                        fontSize: "0.7rem",
                        fontWeight: "500",
                        position: "absolute",
                        top: "0.1rem",
                        left: "0",
                      }}
                    >
                      $
                    </span>
                    <span style={{ fontSize: "2.36rem", fontWeight: "800" }}>
                      99
                    </span>
                    <span style={{ fontSize: "1.25rem", fontWeight: "500" }}>
                      /Monthly{" "}
                    </span>
                  </div>
                  <div
                    style={{ fontSize: "1rem", fontWeight: "400" }}
                    className="white my-4"
                  >
                    Monthly subscription cancel anytime
                  </div>
                  <div
                    style={{ fontSize: "1rem", fontWeight: "600" }}
                    className="white my-3"
                  >
                    Core Features
                  </div>
                  <div
                    style={{ fontSize: "1.25rem", fontWeight: "400" }}
                    className="d-flex align-items-center my-2"
                  >
                    <FaAngleDoubleRight />
                    <div className="white mx-2">Unlimited new posts</div>
                  </div>
                  <div
                    style={{ fontSize: "1.25rem", fontWeight: "400" }}
                    className="d-flex align-items-center my-2"
                  >
                    <FaAngleDoubleRight />
                    <div className="white mx-2">5$ Per each repost</div>
                  </div>
                  <div
                    style={{ fontSize: "1.25rem", fontWeight: "400" }}
                    className="d-flex align-items-center my-2 mb-5"
                  >
                    <FaAngleDoubleRight />
                    <div className="white mx-2 ">Customer service 24/7</div>
                  </div>
                  <Link
                    to="/payment"
                    className="rounded px-2 py-3 white mt-5 primary_bg_color link w-100"
                  >
                    Start 14 days free trial{" "}
                    <span
                      style={{ borderRadius: "50%" }}
                      className="bg-white py-1 px-1 mx-2 black"
                    >
                      <FaChevronRight />{" "}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
