import { Navigate } from "react-router-dom";
import "./Index.css";
import { useGlobalContext } from "../../context";

export default function Index(params) {
  const user = useGlobalContext();

  const cards = [
    {
      text: "align-items-center",
      title: "Sales assistant ",
      img: "image 35.png",
    },
    {
      text: "align-items-center",
      title: "Sales assistant ",
      img: "image 35.png",
    },
    {
      text: "align-items-center",
      title: "Sales assistant ",
      img: "image 35.png",
    },
    {
      text: "align-items-center",
      title: "Sales assistant ",
      img: "image 35.png",
    },
    {
      text: "align-items-center",
      title: "Sales assistant ",
      img: "image 35.png",
    },
    {
      text: "align-items-center",
      title: "Sales assistant ",
      img: "image 35.png",
    },
    {
      text: "align-items-center",
      title: "Sales assistant ",
      img: "image 35.png",
    },
    {
      text: "align-items-center",
      title: "Sales assistant ",
      img: "image 35.png",
    },
    {
      text: "align-items-center",
      title: "Sales assistant ",
      img: "image 35.png",
    },
    {
      text: "align-items-center",
      title: "Sales assistant ",
      img: "image 35.png",
    },
    {
      text: "align-items-center",
      title: "Sales assistant ",
      img: "image 35.png",
    },
    {
      text: "align-items-center",
      title: "Sales assistant ",
      img: "image 35.png",
    },
  ];

  const icons = [
    { icon: "image 38.png", text: "Pharmaceutical" },
    { icon: "image 38 (1).png", text: "Insurance" },
    { icon: "image 38 (2).png", text: "Education" },
    { icon: "image 38 (3).png", text: "High Tech" },
    { icon: "image 38 (4).png", text: "Health" },
  ];

  if (user.email) {
    return <Navigate to="/user-profile" replace="true" />;
  }

  return (
    <article>
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-12 col-md-7 col-lg-5">
            <div
              style={{ fontSize: "2rem", fontWeight: "700", color: "##16171C" }}
            >
              A wide variety of sales jobs are{" "}
              <span className="primary_color">available</span> for you
            </div>
            <div style={{ fontSize: "18px", fontWeight: "300" }}>
              Natural Closers will filter through and deliver the best options,
              whether you’re looking for a job or searching for someone to fill
              a sales position within your company.
            </div>
            <div className="d-sm-flex d-block align-items-center my-3">
              <div
                style={{ border: "0.1rem solid #4897d8", width: "fit-content" }}
                className="primary_bg_color px-2 py-2 rounded my-2 d-flex align-items-center text-white"
              >
                <img src="searc 1.png" width="40px" alt="" />
                <div
                  className="text-white"
                  style={{ fontSize: "1.1rem", fontWeight: "500" }}
                >
                  Create sales job
                </div>
              </div>
              <div
                style={{ border: "0.1rem solid #4897d8", width: "fit-content" }}
                className="rounded d-flex cursor-pointer px-2 py-2 mx-sm-2 align-items-center primary_color"
              >
                <img src="image 13.png" width="40px" alt="" />
                <div style={{ fontSize: "1rem", fontWeight: "500" }}>
                  Find sales job
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-5 col-lg-6 mx-auto">
            <img src="./image 32.png" alt="" className="w-100" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="my-5 row">
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
        <div className="row my-5">
          {cards.map(({ text, title, img }, index) => {
            return (
              <div className="col-6 col-sm-4 col-md-3">
                <div
                  className={
                    index === 1
                      ? "rounded px-2 py-2 my-2 primary_bg_color"
                      : "rounded px-2 py-2 my-2 cursor-pointer"
                  }
                  style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
                >
                  <img src={img} alt="" />
                  <div
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: "700",
                      color: `${
                        index === 1 ? "white" : "rgba(130, 130, 130, 1)"
                      }`,
                    }}
                  >
                    {title}
                  </div>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: "700",
                      color: `${
                        index === 1 ? "white" : "rgba(130, 130, 130, 1)"
                      }`,
                    }}
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
        <div className="row my-5">
          <div
            style={{ fontSize: "2.6rem", fontWeight: "600" }}
            className="text-center"
          >
            Choose Your Industry
          </div>
          {icons.map(({ icon, text }, index) => {
            return (
              <div className="col-5 col-md-3 col-lg-2 mx-auto mt-3">
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
        </div>
      </div>

      <div className="container">
        <div className="row my-5 py-3 align-items-center">
          <div className="col-12 col-lg-5">
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
          <div className="col-12 col-md-10 order-lg-first col-lg-6 my-4 mx-auto">
            <img src="./image 20 (1).png" alt="" className="w-100" />
          </div>
          <div className="col-12 col-lg-5 my-4 my-lg-5 mx-auto">
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
          <div className="col-12 col-md-10 col-lg-6 mx-auto">
            <img src="./image 21.png" alt="" className="w-100" />
          </div>
        </div>
      </div>

      <footer
        className="container-fluid py-lg-4 px-lg-5"
        style={{ backgroundColor: "#CFEFFE" }}
      >
        <div className="d-lg-flex d-block justify-content-between align-items-start rounded py-3 px-4 py-md-5">
          <div className="position-relative my-lg-1 mx-lg-3 my-4">
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
          <div className="">
            <h4 className=" mb-2">Contact us</h4>
            <div
              className="black"
              style={{ fontSize: "0.8rem", fontWeight: "300" }}
            >
              Our customer service representatives are available to answers any
              questions or concerns during [work hours] at [phone number/email
              address]
            </div>
          </div>
          <div className="mx-lg-2">
            <h4 className="mb-2 mt-3 mt-lg-0">About us</h4>
            <div
              className="black"
              style={{ fontSize: "0.8rem", fontWeight: "300" }}
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
                className="py-2 px-1 rounded"
                type="email"
                name=""
                placeholder="Enter your email..."
                id=""
              />
              <div
                style={{ width: "fit-content" }}
                className="rounded primary_bg_color py-2 px-4 mx-2 my-2 my-sm-0"
              >
                <div
                  style={{ fontSize: "1.1rem", fontWeight: "100" }}
                  className="text-white cursor-pointer"
                >
                  Subscribe
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </article>
  );
}
