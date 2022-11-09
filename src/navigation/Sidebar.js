import { useState } from "react";
import { FaAlignJustify, FaTimes } from "react-icons/fa";
import "./Sidebar.css";

function SideBar() {
  const [show, setShow] = useState(false);
  const links = [
    { text: "home" },
    { text: "how it works" },
    { text: "contact us" },
  ];

  return (
    <div className="container d-md-none">
      <div className="position-relative d-flex align-items-cen justify-content-between px-2 py-3">
        <div className="position-relative">
          <img
            src="./Natural.png"
            className=""
            width="100px"
            height="auto"
            alt=""
          />
          <img
            style={{ bottom: "-40%", left: "0" }}
            src="closer.png"
            className=" position-absolute"
            width="80px"
            height="auto"
            alt=""
          />
        </div>
        <FaAlignJustify
          onClick={() => setShow(true)}
          className="mx-2 primary_color cursor-pointer"
          style={{ fontSize: "1.3rem" }}
        />
      </div>

      {/* SIDEBAR */}
      <div className={show ? "sidebar show" : "sidebar"}>
        <div className={show ? "sidebar_content true" : "sidebar_content"}>
          <FaTimes onClick={() => setShow(false)} className="closebar white" />
          <div
            className="align-items-start d-flex flex-column py-4 px-2"
            style={{ height: "60vh" }}
          >
            <div className="mx-auto text-center">
              {links.map(({ text }, index) => {
                return (
                  <div
                    key={index}
                    className="link text-capitalize primary_color cursor-pointer my-2"
                    style={{ fontSize: "1.3rem", fontWeight: "500" }}
                  >
                    {text}
                  </div>
                );
              })}
            </div>
            <div className="mt-auto mx-auto text-center">
              <div
                style={{ fontSize: "1rem", fontWeight: "500" }}
                className="primary_text mx-3 my-2 text-capitalize primary_color cursor-pointer"
              >
                Login for recruiters
              </div>
              <div
                style={{ fontSize: "1.3rem", fontWeight: "500" }}
                className="rounded primary_bg_color py-2 px-4 cursor-pointer text-white"
              >
                <div className="text-white">Login for closers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
