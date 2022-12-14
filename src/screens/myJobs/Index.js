import React from "react";
import { FaChevronDown, FaEdit, FaRegCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Index() {
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
  ];
  // eslint-disable-next-line
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
      <div className={` container-fluid bg-white py-5`}>
        <div className="row">
          <div className="col-lg-11 pr-lg-2">
            <div className="d-flex  align-items-center justify-content-between mb-4  col-12 col-md-11 mx-auto">
              <div
                style={{ fontSize: "30px", fontWeight: "700" }}
                className="black"
              >
                My Jobs
              </div>
              <Link
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  borderRadius: "3px",
                }}
                to="/"
                className=" cursor-pointer primary_bg_color py-2 px-2 white link"
              >
                + Add another job
              </Link>
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
                        style={{
                          background: "rgba(241, 147, 6, 1)",
                          borderRadius: "3px",
                        }}
                        className="d-flex align-items-center white mx-1 py-2 px-2"
                      >
                        <FaEdit />
                        <div className="mx-1 d-none d-md-block">Edit</div>
                      </div>
                      <div
                        style={{
                          background: "rgba(241, 147, 6, 1)",
                          borderRadius: "3px",
                        }}
                        className="d-md-flex align-items-center white px-2 py-2 d-none"
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
      </div>
    </div>
  );
}
