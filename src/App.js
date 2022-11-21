import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useGlobalContext } from "./context";
import Home from "./screens/home/Index";
import Navbar from "./navigation/Navbar";
import Sidebar from "./navigation/Sidebar";
import Login from "./screens/userAuth/Login";
import Signup from "./screens/userAuth/Signup";
import CreateAccount from "./screens/recruiter/CreateAccount";
import UserProfile from "./screens/userProfile/Index";
import RecruiterProfile from "./screens/recruiterProfile/Index";
import AppliedJobs from "./screens/appliedJobs/Index";
import Jobs from "./screens/myJobs/Index";
import Subscription from "./screens/subscriptions/Subscription";
import Candidates from "./screens/candidates/Candidates";
import JobsList from "./screens/jobs/Jobs";
import PreviewJob from "./screens/jobs/PreviewJob";
import SignIn from "./screens/recruiter/Login";
import CreateJob from "./screens/createteJob/CreateJob";
import Payment from "./screens/payment/Payment";

function App() {
  const user = useGlobalContext();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("auth"));
    if (data) {
      user.setData(data);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            (!user.data.email && <Home />) ||
            (user.data.type === "sales" && <JobsList />) ||
            (user.data.type === "recruiter" && <CreateJob />)
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route
          path="/user-profile"
          element={user.data.type === "sales" && <UserProfile />}
        />
        <Route
          path="/recruiter-profile"
          element={user.data.type === "recruiter" && <RecruiterProfile />}
        />
        <Route
          path="/applied-jobs"
          element={user.data.type === "sales" && <AppliedJobs />}
        />
        <Route
          path="/jobs"
          element={user.data.type === "recruiter" && <Jobs />}
        />
        <Route
          path="/subscription"
          element={user.data.type === "recruiter" && <Subscription />}
        />
        <Route
          path="/candidates"
          element={user.data.type === "recruiter" && <Candidates />}
        />
        <Route
          path="/payment"
          element={user.data.type === "recruiter" && <Payment />}
        />
        <Route
          path="/preview-job"
          element={user.data.type === "recruiter" && <PreviewJob />}
        />
      </Routes>
    </div>
  );
}

export default App;
