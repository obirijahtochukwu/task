import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Index.css";
import { FaCheck, FaEdgeLegacy, FaUser, FaUsers } from "react-icons/fa";

export default function Task() {
  const [name, setName] = useState("");
  const [dName, setDName] = useState("");
  const [wName, setWName] = useState("");
  const [url, setUrl] = useState("");
  const [active, setActive] = useState("first");

  const [tab, setTab] = useState(1);
  // eslint-disable-next-line
  const [tabs, setTabs] = useState([
    { txt: 1, selected: false },
    { txt: 2, selected: false },
    { txt: 3, selected: false },
    { txt: 4, selected: false },
  ]);

  const submit = (txt) => {
    if (txt === 1) {
      setTab(txt);
    } else if (txt === 2 && name && dName) {
      setTab(txt);
    } else if (txt === 3 && name && dName && wName && url) {
      setTab(txt);
    } else if (txt === 4 && name && dName && wName && url) {
      setTab(txt);
    }
  };

  return (
    <div className="container-fluid bg-white pt-5 pb-5">
      <div className="row">
        <div className="col-12 col-sm-8 col-md-5 col-lg-4 mx-auto">
          <div className="d-flex justify-content-center align-items-center mb-5">
            <FaEdgeLegacy className="logo" />
            <div className="text-center logo-text mx-1">Eden</div>
          </div>
          <div className="d-flex ">
            {tabs.map(({ txt }, index) => {
              return (
                <div
                  key={index}
                  onClick={() => submit(txt)}
                  className={txt > 1 && txt < 4 ? "col-4" : "col-2"}
                >
                  <div className="d-flex align-items-center">
                    <div
                      style={{
                        background: `${txt <= tab ? "blueviolet" : ""}`,
                      }}
                      className={txt > 1 ? "bar" : ""}
                    ></div>
                    <div
                      style={{
                        background: `${txt <= tab ? "blueviolet" : ""}`,
                        color: `${txt <= tab ? "white" : "black"}`,
                      }}
                      className="num"
                    >
                      {txt}
                    </div>
                    <div
                      style={{
                        background: `${txt <= tab ? "blueviolet" : ""}`,
                      }}
                      className={txt < 4 ? "bar" : ""}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
          {tab === 1 && (
            <TabOne
              name={name}
              dName={dName}
              setName={setName}
              setDName={setDName}
              setTab={setTab}
            />
          )}
          {tab === 2 && (
            <TabTwo
              name={wName}
              dName={url}
              setName={setWName}
              setDName={setUrl}
              setTab={setTab}
            />
          )}
          {tab === 3 && (
            <TabThree setTab={setTab} active={active} setActive={setActive} />
          )}
          {tab === 4 && <TabFour setTab={setTab} name={name} />}
        </div>
      </div>
    </div>
  );
}

const TabOne = ({ name, dName, setName, setDName, setTab }) => {
  return (
    <div className="mt-5">
      <h1 className="text-center">Welcome! First things first...</h1>
      <div className="text-center  mb-5 mt-3 txt">
        You can always change them later.
      </div>

      <form action="">
        <div className="mb-1">
          <b> Full Name</b>
        </div>
        <input
          className="input py-2 px-3"
          required
          autoFocus
          type="text"
          placeholder="Steve Jobs"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="mt-3 mb-1">
          <b>Display Name</b>
        </div>
        <input
          className="input py-2 px-3"
          value={dName}
          onChange={(e) => setDName(e.target.value)}
          required
          type="text"
          placeholder="Steve"
        />
      </form>
      <div
        onClick={() => {
          if (name && dName) {
            setTab(2);
          }
        }}
        className="text-center btn_ mt-3"
      >
        create workspace
      </div>
    </div>
  );
};
const TabTwo = ({ name, dName, setName, setDName, setTab }) => {
  return (
    <div className="mt-5">
      <h1 className="text-center">Let's setup a home for all your work</h1>
      <div className="text-center  mb-5 mt-3 txt">
        You can always create another workspace later.
      </div>

      <form action="">
        <div className="mb-1">
          <b> Workspace Name</b>
        </div>
        <input
          className="input py-2 px-3"
          required
          autoFocus
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Steve Jobs"
        />
        <div className="mt-3 mb-1">
          <b>Workspace URL</b> <small className="text-muted">(optional)</small>
        </div>
        <div className="d-flex align-items-stretch">
          <div className="link py-2 px-3">www.eden.com/</div>
          <input
            style={{ borderRadius: "0 1.89px 1.89px 0" }}
            className="input py-2 px-3"
            required
            value={dName}
            onChange={(e) => setDName(e.target.value)}
            type="text"
            placeholder="Steve"
          />
        </div>
      </form>
      <div
        onClick={() => {
          if (name && dName) {
            setTab(3);
          }
        }}
        className="text-center btn_ mt-3"
      >
        create workspace
      </div>
    </div>
  );
};
const TabThree = ({ setTab, active, setActive }) => {
  return (
    <div className="mt-5">
      <h1 className="text-center">How are you planning to use Eden?</h1>
      <div className="text-center mb-5 mt-3 txt">
        We'll streamline your setup experience accordingly.
      </div>

      <form action="" className="row">
        <div className="col-6">
          <div
            onClick={() => setActive("first")}
            className="profile p-2 p-sm-3"
            style={{ borderColor: `${active === "first" ? "blueviolet" : ""}` }}
          >
            <FaUser
              className="icon mb-3"
              style={{
                color: `${active === "first" ? "blueviolet" : ""}`,
              }}
            />
            <div className="mb-2">
              <b>For myself</b>
            </div>
            <div className="text">
              Write better. Think more clearly, stay organized
            </div>
          </div>
        </div>
        <div className="col-6">
          <div
            onClick={() => setActive("second")}
            className="profile p-2 p-sm-3"
            style={{
              borderColor: `${active === "second" ? "blueviolet" : ""}`,
            }}
          >
            <FaUsers
              className="icon mb-3"
              style={{
                color: `${active === "second" ? "blueviolet" : ""}`,
              }}
            />
            <div className="mb-2">
              <b>With my team</b>
            </div>
            <div className="text">
              Wikis, docs, tasks & projects, all in one place.
            </div>
          </div>
        </div>
      </form>
      <div
        onClick={() => {
          if (active) {
            setTab(4);
          }
        }}
        className="text-center btn_ mt-3"
      >
        create workspace
      </div>
    </div>
  );
};

const TabFour = ({ name, setTab }) => {
  return (
    <div className="mt-5 tex-center">
      <div className="d-flex justify-content-center">
        <div className="text-center check">
          <FaCheck />
        </div>
      </div>
      <h1 className="text-center mt-4 mb-3">Congratulations, {name}!</h1>
      <div className="text-center txt">You have completed</div>
      <div
        onClick={() => {
          setTab(1);
        }}
        className="text-center btn_ mt-3"
      >
        launch eden
      </div>
    </div>
  );
};
