import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Index.css";

export default function Task() {
  return (
    <div className="container-fluid bg-white pt-5 pb-5">
      <div className="row justify-content-center">
        <div className="col-9 col-md-5 col-lg-5 col-xl-4 mt-3">
          <div
            style={{ boxShadow: "0 0 15px 3px rgba(0, 0, 0, .2)" }}
            className="rounded w-100 h-100 pb-4 px-3 pt-3"
          >
            <div className="d-flex align-items-center mb-4">
              <div
                style={{ fontSize: "21px", fontWeight: "600" }}
                className="text-muted"
              >
                Upcoming Leaves
              </div>
              <div className="bg- px-2 py-1 mx-3">2</div>
            </div>
            <div
              style={{ fontSize: "19px", fontWeight: "600" }}
              className="text-muted"
            >
              Brother's Wedding
            </div>
            <div className="d-flex align-items-center justify-content-between mt-1 w-100">
              <div className="_badge px-3 py-1">25th Dec 2022</div>
              <div className="mx-2 text-muted">to</div>
              <div className="_badge px-3 py-1">25th Dec 2022</div>
            </div>
            <div
              style={{ fontSize: "19px", fontWeight: "600" }}
              className="text-muted mt-4"
            >
              Foreign Tour
            </div>
            <div className="d-flex align-items-center justify-content-between mt-1 mb-5">
              <div className="_badge px-3 py-1">25th Dec 2022</div>
              <div className="mx-2">to</div>
              <div className="_badge px-3 py-1">25th Dec 2022</div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="mx-1"></div>
              <div className="all px-2 py-2">see all</div>
            </div>
          </div>
        </div>
        <div className="col-9 col-md-5 col-lg-5 col-xl-4 mt-3">
          <div
            style={{ boxShadow: "0 0 15px 3px rgba(0, 0, 0, .2)" }}
            className="rounded w-100 h-100 pb-4 px-3 pt-3"
          >
            <div className="d-flex align-items-center mb-4">
              <div
                style={{ fontSize: "21px", fontWeight: "700" }}
                className="text-muted"
              >
                Upcoming Holidays
              </div>
              <div className="bg- px-2 py-1 mx-3">2</div>
            </div>
            <div
              style={{ fontSize: "19px", fontWeight: "600" }}
              className="text-muted"
            >
              Christmass Day
            </div>
            <div className="d-flex align-items-center justify-content-start mt-1 w-100">
              <div className="_badge px-3 py-1">25th Dec 2022</div>
            </div>
            <div
              style={{ fontSize: "19px", fontWeight: "600" }}
              className="text-muted mt-4"
            >
              New Years Day
            </div>
            <div className="d-flex align-items-center justify-content-start mt-1 mb-5">
              <div className="_badge px-3 py-1">25th Dec 2022</div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="mx-1"></div>
              <div className="all px-2 py-2">see all</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
