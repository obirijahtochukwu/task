import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

function Index() {
  const [checked, setChecked] = useState(true);
  const [check, setCheck] = useState(false);
  // eslint-disable-next-line
  const [job, setJob] = useState(false);

  return (
    <div className="container-fluid bg-white">
      <div className="container-lg">
        <div className="margin pb-md-5 pt-4">
          <div className="row justify-content-center">
            <div
              className={`${job && "d-none"} py-4 mb-md-5 col-lg-10`}
              style={{ bottom: "0" }}
            >
              <div className="d-flex justify-content-between align-items-center">
                <div
                  style={{ fontSize: "1.87rem", fontWeight: "700" }}
                  className="black"
                >
                  Account info
                </div>
                <div className="rounded cursor-pointer primary_bg_color mx-2">
                  <div className="d-flex align-items-center text-white px-3 py-2">
                    <div
                      className=""
                      style={{ fontSize: "14px", fontWeight: "500" }}
                    >
                      Edit Profile
                    </div>
                  </div>
                </div>
              </div>

              <section className="row mt-3">
                <div className="col-12 col-md-6 my-2">
                  <div
                    style={{ fontSize: "12px", fontWeight: "500" }}
                    className=""
                  >
                    Status
                  </div>
                  <div
                    style={{
                      color: "rgba(223, 225, 230, 1)",
                      background: "#F4F5F7",
                      border: "2px solid #DFE1E6",
                    }}
                    className="rounded my-1 py-2 px-2"
                  >
                    <div
                      style={{
                        fontSize: "0.87rem",
                        color: "#6B778C",
                        fontWeight: "400",
                      }}
                      className=""
                    >
                      Dan Dani
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 my-2">
                  <div
                    style={{ fontSize: "12px", fontWeight: "500" }}
                    className=""
                  >
                    State
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
                      California
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
                <div className="col-12 col-md-6 my-2">
                  <div
                    style={{ fontSize: "12px", fontWeight: "500" }}
                    className=""
                  >
                    Phone
                  </div>
                  <div
                    style={{
                      color: "rgba(223, 225, 230, 1)",
                      background: "#F4F5F7",
                      border: "2px solid #DFE1E6",
                    }}
                    className="rounded my-1 py-2 px-2"
                  >
                    <div
                      style={{
                        fontSize: "0.87rem",
                        color: "#6B778C",
                        fontWeight: "400",
                      }}
                      className=""
                    >
                      XXXXXXXXXXX
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 my-2">
                  <div
                    style={{ fontSize: "12px", fontWeight: "500" }}
                    className=""
                  >
                    Gender
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
                      Male
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
              </section>

              <article className="row mt-4">
                <div
                  style={{ fontSize: "1.87rem", fontWeight: "700" }}
                  className="black"
                >
                  Notification
                </div>
                <div className="">
                  <div className="d-flex align-items-center my-3">
                    <div
                      onClick={() => setChecked(!checked)}
                      className={checked ? "check_box true" : "check_box"}
                    >
                      <div className={checked ? "boxtrue" : "box"}></div>
                    </div>
                    <div className="mx-2">
                      I don't want to receive email notifications for this
                      request
                    </div>
                  </div>
                  <div className="d-flex align-items-center my-3">
                    <div
                      onClick={() => setCheck(!check)}
                      className={check ? "check_box true" : "check_box"}
                    >
                      <div className={check ? "boxtrue" : "box"}></div>
                    </div>
                    <div className="mx-2">
                      I don't want to receive email notifications for this
                      request
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div
              className="d-none d-lg-block"
              style={{ marginLeft: "0rem", width: "7%" }}
            ></div>
          </div>
          <article className={`${!job && "d-none"} job_search `}>
            <div className="container-fluid"></div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Index;
