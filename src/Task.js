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
    const mugu = setInterval(() => {
      forward();
    }, 6000);

    return () => {
      clearInterval(mugu);
    };
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
  const vp = document.querySelector("html");
  const scrollY = document.getElementById("div");
  scrollY.addEventListener("scroll", (event) => {
    setActive(scrollY.scrollTop);
  });
  return (
    <div>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus magni
      vitae error aliquid alias repudiandae expedita voluptatem labore porro
      nobis dolore doloremque quam cum eius natus rem, a quibusdam itaque.
      <div
        style={{
          transform: `rotte(${active * -20}deg)`,
          overflow: "scroll",
          width: "150px",
          height: "150px",
        }}
        id="div"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam porro
        incidunt cupiditate illo, velit assumenda facere omnis culpa accusamus
        saepe commodi reiciendis repellendus pariatur quidem ullam debitis qui
        doloribus eum.
      </div>
      {active}
      <div className="container-fluid px-0 d-none">
        <div className="d-flex">
          {lists.map(({ url }, index) => {
            return (
              <div
                key={index}
                className={`${index === active && " v"} w-100 n col-12`}
                style={{ transform: `${index < active && "translte(100%)"}` }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                  }}
                  className="header"
                >
                  <video
                    src={url}
                    style={{
                      transform: `${
                        (index === 1 && "scale(2.5),") ||
                        (index === 0 && "scale(0.6),")
                      }`,
                    }}
                    loop
                    muted
                    autoPlay={"autoplay"}
                    preload="auto"
                  ></video>
                  <div
                    className={`${
                      index === active && " show"
                    } center text- text-white mx-auto row`}
                  >
                    <div className="d-flex justify-content-center align-items-center">
                      <div
                        className={`${
                          index === active && " show"
                        } col-m mx-auto text-center`}
                      >
                        <h2
                          style={{
                            fontSize: "70px",
                            fontWeight: "lighter",
                            fontFamily: "serif",
                          }}
                        >
                          How we create 360° Value
                        </h2>
                        <h5
                          style={{
                            fontSize: "1.8rem",
                            fontWeight: "lighter",
                            textShadow: "1px 1px 3px #4a4a4a",
                          }}
                          className="text"
                        >
                          adipisicing elit. Unde reprehenderit quos provident i
                        </h5>
                      </div>
                    </div>
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
