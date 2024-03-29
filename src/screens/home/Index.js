import { Navigate, Link } from "react-router-dom";
import "./Index.css";
import { useGlobalContext } from "../../context";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import Carousel from "react-elastic-carousel";
export default function Index(params) {
  const user = useGlobalContext();

  const cards = [
    {
      text: "3456 Jobs Available",
      title: "Outside sales representative",
      img: "/flames.png",
    },
    {
      text: "2122 Jobs Available",
      title: "Inside sales representative",
      img: "/flames.png",
    },
    {
      text: "2122 Jobs Available",
      title: (
        <span>
          Sales <div className="mx-3"></div> manager{" "}
        </span>
      ),
      img: "/flames.png",
    },
    {
      text: "935 Jobs Available",
      title: (
        <span>
          Sales <div className="mx-3"></div> manager{" "}
        </span>
      ),
      img: "/flames.png",
    },
    {
      text: "2570 Jobs Available",
      title: (
        <span>
          Director of <div className="mx-5"></div> sales{" "}
        </span>
      ),
      img: "/flames.png",
    },
    {
      text: "1485 Jobs Available",
      title: "Regional sales manager ",
      img: "/flames.png",
    },
    {
      text: "725 Jobs Available",
      title: "Sales operations manager",
      img: "/flames.png",
    },
    {
      text: "1758 Jobs Available",
      title: (
        <span>
          {" "}
          Sales <div className="mx-3"></div> assistant{" "}
        </span>
      ),
      img: "/flames.png",
    },
    {
      text: "2570 Jobs Available",
      title: (
        <span>
          Director of <div className="mx-5"></div> sales{" "}
        </span>
      ),
      img: "/flames.png",
    },
    {
      text: "1485 Jobs Available",
      title: "Regional sales manager",
      img: "/flames.png",
    },
    {
      text: "725 Jobs Available",
      title: "Sales operations manager",
      img: "/flames.png",
    },
    {
      text: "1758 Jobs Available",
      title: (
        <span>
          {" "}
          Sales <div className="mx-3"></div> assistant{" "}
        </span>
      ),
      img: "/flames.png",
    },
  ];

  const icons = [
    { icon: "image 38.png", text: "Pharmaceutical" },
    { icon: "image 38 (1).png", text: "Insurance" },
    { icon: "image 38 (2).png", text: "Education" },
    { icon: "image 38 (3).png", text: "High Tech" },
    { icon: "image 38 (4).png", text: "Health" },
  ];

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 5 },
  ];

  if (user.data.email) {
    return <Navigate to="/user-profile" replace="true" />;
  }

  return (
    <article>
      <div className="container">
        <div className="row align-items-end my-5  py-1">
          <div className="col-12 col-md-8 col-lg-7">
            <div
              style={{
                fontSize: "43px",
                fontWeight: "900",
                color: "##16171C",
                lineHeight: "110%",
              }}
              className="px-0 mx-0 mb-2"
            >
              A wide variety of sales jobs are{" "}
              <span className="primary_color">available</span> for you
            </div>
            <div className="row">
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: "300",
                  lineHeight: "25px",
                }}
                className="col-11 col-lg-10"
              >
                Natural Closers will filter through and deliver the best
                options, whether you’re looking for a job or searching for
                someone to fill a sales position within your company.
              </div>
            </div>
            <div className="d-sm-flex d-block align-items-strect my-5 pt-md-4">
              <Link
                to="/createaccount"
                style={{ border: "0.1rem solid #4897d8", width: "200px" }}
                className="primary_bg_color px-3 py-3 rounded my-2 my-sm-0 d-flex align-items-center text-white link"
              >
                <img
                  src="searc 1.png"
                  style={{ width: "52.8px", height: "52.84px" }}
                  alt=""
                />
                <div
                  className="text-white mx-2"
                  style={{
                    fontSize: "21px",
                    lineHeight: "29px",
                    fontWeight: "500",
                  }}
                >
                  Create a sales job
                </div>
              </Link>
              <Link
                to="/signup"
                style={{ border: "0.1rem solid #4897d8", width: "200px" }}
                className="rounded d-flex cursor-pointer px-3 py-3 mx-sm-2 align-items-center primary_color link"
              >
                <img
                  src="search 1.png"
                  style={{
                    width: "50.8px",
                    height: "50.84px",
                    marginRight: "0.5rem",
                  }}
                  alt=""
                />
                <div
                  style={{
                    fontSize: "21px",
                    lineHeight: "29px",
                    fontWeight: "500",
                  }}
                >
                  Find a sales job
                </div>
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-5 mx-auto">
            <img src="./Untitled design (20).png" alt="" className="w-100" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="my-5 row pb-5">
          <div className="col-md-8">
            <div style={{ fontSize: "2.6rem", fontWeight: "600" }}>
              Choose Your Next Role here
            </div>
            <div style={{ fontSize: "1.3rem", fontWeight: "300" }}>
              There is nothing but career opportunities in sales! Choose within
              a variety of sales positions throughout many different industries.
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row my-5 px-1">
          {cards.map(({ text, title, img }, index) => {
            return (
              <div className="col-6 col-md-4 col-lg-3 my-2">
                <div
                  className={
                    index === 1
                      ? "rounded px-2 py-4 primary_bg_color h-100 row flex-column mx-1"
                      : "rounded px-2 py-4 cursor-pointer h-100 row flex-column mx-1"
                  }
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 1)",
                    gap: "8.41px",
                    boxShadow: "0px 0.20586px 10.0293px #FFEFE0",
                  }}
                >
                  <img
                    src={img}
                    alt=""
                    className=" px-0"
                    style={{ width: "72px", height: "52.03px" }}
                  />
                  <div
                    style={{
                      wordBreak: "break-all",
                      fontSize: "1.3rem",
                      fontWeight: "700",
                      lineHeight: "29.03px",
                      color: `${
                        index === 1 ? "white" : "rgba(130, 130, 130, 1)"
                      }`,
                    }}
                  >
                    {title}
                  </div>
                  <div
                    style={{
                      lineHeight: "22.03px",

                      fontSize: "14.72px",
                      fontWeight: "700",
                      color: `${
                        index === 1 ? "white" : "rgba(130, 130, 130, 1)"
                      }`,
                    }}
                    className="mt-auto"
                  >
                    {text}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="container">
        <div className="row my-5 py-lg-5 alig-items-center">
          <div
            style={{ fontSize: "2.6rem", fontWeight: "600" }}
            className="text-center mb-md-5"
          >
            Choose Your Industry
          </div>
          <div className="row align-items-center justify-content-between">
            <Carousel breakPoints={breakPoints}>
              {icons.map(({ icon, text }, index) => {
                return (
                  <div key={index} className="">
                    <div className="d-flex justify-content-center">
                      <img
                        src={icon}
                        alt=""
                        className=""
                        width="70.32px"
                        height="70.32px"
                      />
                    </div>

                    <div
                      className="primary_color text-center"
                      style={{ fontSize: "1.3rem", fontWeight: "700" }}
                    >
                      {text}
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row my-5 pt-3 pb-5 align-items-center justify-content-between">
          <div className="col-12 col-lg-6 mx-auto mx-lg-0 ">
            <div className="">
              <div className="primary_color primary_text mb-3">For closers</div>
              <div
                style={{ fontSize: "2.2rem", fontWeight: "600" }}
                className=""
              >
                All sales jobs are in one place.
              </div>
              <div
                style={{ fontSize: "1.3rem", fontWeight: "300" }}
                className="black"
              >
                By uploading a detailed resume, adjusting preferences and
                answering the interview questionnaire the system will easily
                filter through job postings suitable for each applicant’s
                desired sales field and benefits.In todays market, salespeople
                have great opportunities for competitive sales positions.
                However not two sales positions are alike, differing in
                everything from salary to benefits.
                <div
                  style={{ width: "fit-content" }}
                  className="rounded primary_bg_color py-2 px-4 mt-4"
                >
                  <div
                    style={{ fontSize: "1.1rem", fontWeight: "100" }}
                    className="text-white cursor-pointer"
                  >
                    Start Here
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-10 order-lg-first col-lg-5 my-4 mx-auto  mx-lg-0">
            <img src="./Untitled design (18).png" alt="" className="w-100" />
          </div>
          <div className="col-12 col-lg-6 mx-auto mt-lg-5 pt-5 mx-lg-0">
            <div className="primary_color primary_text mb-3">
              For Recruiters
            </div>
            <div style={{ fontSize: "2.2rem", fontWeight: "600" }} className="">
              Easily find the right closers for your team.
            </div>
            <div
              style={{ fontSize: "1.3rem", fontWeight: "300" }}
              className="black"
            >
              Create a sales job and start selecting the right candidates ns are
              alike, differing in everything from salary to benefits.
            </div>
            <div className="rounded bg-white p-3 mt-5">
              <div className="primary_color primary_text">Create a job</div>
              <div
                style={{ fontSize: "1.2rem", fontWeight: "300" }}
                className="black bl"
              >
                Easily register and publish your sales job in a few simple steps
              </div>
              <div className="primary_color primary_text mt-5">
                Select candidates
              </div>
              <div
                style={{ fontSize: "1.2rem", fontWeight: "300" }}
                className="black"
              >
                Get a suitable resumes and recruit the next talent for your team
              </div>
            </div>
          </div>
          <div className="col-12 col-md-10 col-lg-5 mx-auto mt-lg-5 pt-5 py-lg-3 mx-lg-0">
            <img src="./Untitled design (19).png" alt="" className="w-100" />
          </div>
        </div>
      </div>

      <footer
        className="container-fluid py-lg-4 px-lg-5 py-3"
        style={{ backgroundColor: "#CFEFFE" }}
      >
        <div className="d-lg-flex d-block justify-content-between align-items-start rounded py-3 px-4 py-md-5">
          <div className="">
            <h4 className=" mb-2">Contact us</h4>
            <div
              className="black"
              style={{ fontSize: "0.8rem", fontWeight: "400" }}
            >
              Our customer service representatives are available to answers any
              questions or concerns during [work hours] at [phone number/email
              address]
            </div>
          </div>
          <div className="mx-lg-4">
            <h4 className="mb-2 mt-3 mt-lg-0">About us</h4>
            <div
              className="black"
              style={{ fontSize: "0.8rem", fontWeight: "400" }}
            >
              Every sales position is distinctive, as is every salesperson has
              their own unique training and experience. Natural Closers is
              committed to being the bridge that connects the right sales talent
              with compatible companies.
            </div>
          </div>
          <div className="">
            <h4 className="mb-2 mt-3 mt-lg-0">Join our community us</h4>
            <div className="d-sm-flex d-block align-items-stretch">
              <input
                style={{ border: "1px solid #000000" }}
                className="py-2 px-2 rounded"
                type="email"
                name=""
                placeholder="Enter your email..."
                id=""
              />
              <div
                style={{ width: "fit-content" }}
                className="rounded primary_bg_color py-2 px-4 mx-sm-2 my-2 my-sm-0"
              >
                <div
                  style={{ fontSize: "1.1rem", fontWeight: "100" }}
                  className="text-white cursor-pointer"
                >
                  Subscribe
                </div>
              </div>
            </div>
            <div className="d-flex mt-3">
              <FaFacebookF
                style={{ fontSize: "1.5rem" }}
                className=" cursor-pointer primary_color"
              />
              <FaInstagram
                style={{ fontSize: "1.5rem" }}
                className="mx-4 cursor-pointer primary_color"
              />
              <FaTwitter
                style={{ fontSize: "1.5rem" }}
                className=" cursor-pointer primary_color"
              />
              <FaLinkedin
                style={{ fontSize: "1.5rem" }}
                className="mx-4 cursor-pointer primary_color"
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="d-md-flex d-block container justify-content-between align-items-center pb-3">
          <div style={{ fontSize: "14px" }} className="black my-3">
            &copy;2002, All right reserved.
          </div>
          <div className="d-md-flex d-block align-items-center">
            <div className="">
              <a href="#8" style={{ fontSize: "14px" }} className="black ">
                Privacy Policy
              </a>
            </div>
            <div className="my-1">
              <a
                href="#8"
                style={{ fontSize: "14px" }}
                className="black mx-md-4"
              >
                Terms of Service
              </a>
            </div>
            <div className="">
              <a href="#8" style={{ fontSize: "14px" }} className="black">
                Cookies Settings
              </a>
            </div>
          </div>
        </div>
      </footer>
    </article>
  );
}
