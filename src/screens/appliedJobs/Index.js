import React from "react";
import "./Index.css";

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
    {
      title: "Front Counter Attendant",
      text: "Sprinkle Dreams",
      img: "Rectangle 36.png",
    },
  ];

  return (
    <div className={` container-fluid bg-white py-5`}>
      <div className="container-lg">
        <div className="margin h-100">
          <div className="row">
            <div className="col-lg-11 mx-auto">
              <div
                style={{ fontSize: "1.87rem", fontWeight: "700" }}
                className="black col-12 col-md-11 mx-auto mb-4"
              >
                Applied Jobs
              </div>
              {jobs.map(({ text, title, img }, index) => {
                return (
                  <div className=" col-12 col-md-11 mx-auto" key={index}>
                    <div className="jobs_card py-4 px-3 my-3 cursor-pointer">
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
                  </div>
                );
              })}
            </div>
            <div className="col-lg-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
