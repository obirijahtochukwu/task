import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Task.css";

export default function Task() {
  const [active, setActive] = useState(0);
  const forward = () => {
    if (active === 2) {
      setActive(0);
    } else {
      setActive(active + 1);
    }
  };
  useEffect(() => {
    setInterval(() => {
      forward();
    }, 6000);
    // eslint-disable-next-line
  }, [active]);

  const lists = [
    {
      url: "./v3.mp4",
      text: "lorrrrrrrrr",
    },
    {
      url: "./v1.mp4",
      text: "lorrrrrrrrr",
    },
    {
      url: "./v2.mp4",
      text: "lorrrrrrrrr",
    },
  ];
  return (
    <div>
      <div className="container-fluid px-0   overflow-hdden">
        <div className="d-flex">
          {lists.map(({ url }, index) => {
            return (
              <div
                key={index}
                className={`${index === active && " v"} w-100 n col-12`}
                style={{ transform: `${index < active && "translte(100%)"}` }}
              >
                <div className="header">
                  <video
                    className="w-100"
                    src={url}
                    loop
                    autoPlay={"autoplay"}
                    preload="auto"
                  ></video>
                </div>
                <div
                  className={`${
                    index === active && " show"
                  } center text-center text-white mx-auto row`}
                >
                  <div className="col-md-6 mx-auto">
                    <h3>Lorem ipsum dolor sit amet consectetur</h3>
                    <h5 className="text-center">
                      adipisicing elit. Unde reprehenderit quos provident ipsum.
                      Suscipit inventore tenetur magnam incidunt repellendus
                      error?
                    </h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
