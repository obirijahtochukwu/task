import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { links } from "./db";

export const Sidebar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <nav
      className="container-fluid py-1 bg-white d-md-none"
      tyle={{ zIndex: "5", position: "sticky", top: "0", left: "0" }}
    >
      <div className="d-flex justify-content-between align-items-center">
        <div className="logo">museumverse</div>
        <FaBars onClick={() => setOpen(true)} className="logo cursor" />
      </div>

      <section className={`${open && "show"} sidebar`}>
        <div className="sidebar_content pt-5">
          {links.map(({ txt, icon }, index) => {
            return (
              <div
                key={index}
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "500",
                  transition: "all 0.3s ease-in-out",
                }}
                className="d-flex align-items-center px-4 py-2  text-uppercase hover cursor"
              >
                <div className="">{icon}</div>
                <div className=" mx-3">{txt}</div>
              </div>
            );
          })}
          <div
            onClick={() => setOpen(false)}
            className="close_btn pb-1 px-1 cursor"
          >
            <FaTimes />{" "}
          </div>
        </div>
      </section>
    </nav>
  );
};

export const Nav = () => {
  return (
    <article
      style={{ zIndex: "5", position: "sticky", top: "0", left: "0" }}
      className="container-fluid d-none d-md-block bg-white py-2"
    >
      <div className="d-flex justify-content-between align-items-center">
        <div
          style={{
            fontSize: "24px",
          }}
          className="logo"
        >
          museumverse
        </div>
        <div className="d-flex align-items-center">
          {links.map(({ txt, icon }, index) => {
            return (
              <div
                key={index}
                style={{
                  fontSize: "15px",
                  fontWeight: "600",
                  color: "rgba(0,0,0, .6)",
                }}
                className={`${
                  index === 1 && "brown"
                } d-flex align-items-center mx-2  text-uppercase cursor1`}
              >
                <div className="mx-2">{icon}</div>
                <div className="  pt-1">{txt}</div>
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
};
