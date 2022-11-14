import React from "react";
import { FaAngleDoubleRight, FaChevronRight } from "react-icons/fa";

export default function Subscription() {
  return (
    <div className="margin bg-white">
      <div className="container-fluid py-5">
        <div className="row">
          <div className="col-10">
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
              program. Be updated with the latest sales resume applications from
              distinguished candidates.
            </div>
          </div>
        </div>
        <div className="row my-4">
          <div className="col-11 col-md-6 col-xl-4 mx-auto mx-md-0 my-3">
            <div className="rounded px-4 py-3 primary_bg_color h-100">
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
                className="d-flex align-items-center my-2"
              >
                <FaAngleDoubleRight />
                <div className="white mx-2">Customer service 24/7</div>
              </div>
              <div
                className="rounded px-2 py-2 white my-4"
                style={{
                  background: "rgba(147, 193, 231, 1)",
                  width: "fit-content",
                }}
              >
                Start 14 days free trial{" "}
                <span
                  style={{ borderRadius: "50%" }}
                  className="bg-white py-1 px-1 mx-2 black"
                >
                  <FaChevronRight />{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="col-11 col-md-6 col-xl-4 mx-auto mx-md-0 my-3">
            <div
              style={{ background: "rgba(147, 193, 231, 1)" }}
              className="rounded px-4 py-3 h-100"
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
                className="d-flex align-items-center my-2"
              >
                <FaAngleDoubleRight />
                <div className="white mx-2">Customer service 24/7</div>
              </div>
              <div
                className="rounded px-2 py-2 white my-4 primary_bg_color"
                style={{
                  width: "fit-content",
                }}
              >
                Start 14 days free trial{" "}
                <span
                  style={{ borderRadius: "50%" }}
                  className="bg-white py-1 px-1 mx-2 black"
                >
                  <FaChevronRight />{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
