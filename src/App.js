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

function App() {
  const user = useGlobalContext();

  useEffect(() => {
    const email = JSON.parse(localStorage.getItem("email"));
    if (email) {
      user.setEmail(email);
    }
  }, [user]);

  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/user-profile" element={<UserProfile />} />
      </Routes>
    </div>
  );
}

export default App;
