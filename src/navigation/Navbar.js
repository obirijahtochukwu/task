function Navbar() {
  return (
    <div className="container-fluid d-none d-md-block">
      <div className="row px-3 py-3 align-items-center justify-content-between">
        <div className="col-md-1 col-lg-2 ">
          <div className=" justify-content-between">
            <div className="d-block position-relative">
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
          </div>
        </div>
        <div className="col-md-9 col-lg-10 col-xl-8">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <div
                className="primary_text primary_color cursor-pointer"
                style={{ fontWeight: "700" }}
              >
                Home
              </div>
              <div className="primary_text mx-4  mx-lg-5">How it works</div>
              <div className="primary_text">Contact us</div>
            </div>
            <div className="d-flex align-items-center">
              <div className="primary_text mx-3 d-md-none d-lg-flex cursor-pointer">
                Login for recruiters
              </div>
              <div className="rounded primary_bg_color py-2 px-4 cursor-pointer text-white">
                <div className="text-white">Login for closers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Navbar;
