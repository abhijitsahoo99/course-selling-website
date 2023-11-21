import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingMain from "./LandingMain.jsx";
import LandingAdmin from "./AdminComponent/Landing.jsx";
import LandingUser from "./UserComponent/Landing.jsx";
import SigninAdmin from "./AdminComponent/Signin.jsx";
import SignupAdmin from "./AdminComponent/Signup.jsx";
import SigninUser from "./UserComponent/SignIn.jsx";
import SignupUser from "./UserComponent/SignUp.jsx";
import Appbar from "./Appbar.jsx";
import AddCourse from "./AdminComponent/AddCourse.jsx";
import Courses from "./AdminComponent/Courses.jsx";
import Course from "./AdminComponent/Course.jsx";
import { adminState } from "./store/atoms/Admin.js";
import { RecoilRoot, useSetRecoilState } from "recoil";
import axios from "axios";
import { BASE_URL } from "./config.js";
import { useEffect } from "react";

function App() {
  return (
    <RecoilRoot>
      <div
        style={{ width: "100vw", height: "100vh", backgroundColor: "#eeeeee" }}
      >
        <Router>
          <Appbar />
          <InitUser />
          <Routes>
            <Route path={"/"} element={<LandingMain />} />
            <Route path={"/admin"} element={<LandingAdmin />} />
            <Route path={"/addcourse"} element={<AddCourse />} />
            <Route path={"/course/:courseId"} element={<Course />} />
            <Route path={"/courses"} element={<Courses />} />
            <Route path={"/signinadmin"} element={<SigninAdmin />} />
            <Route path={"/signupadmin"} element={<SignupAdmin />} />
            <Route path={"/user"} element={<LandingUser />} />
            <Route path={"/signinuser"} element={<SigninUser />} />
            <Route path={"/signupuser"} element={<SignupUser />} />
          </Routes>
        </Router>
      </div>
    </RecoilRoot>
  );
}

function InitUser() {
  const setAdmin = useSetRecoilState(adminState);
  const init = async () => {
    try {
      const response = await axios.get($, { BASE_URL } / admin / me, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });

      if (response.data.username) {
        setAdmin({
          isLoading: false,
          adminEmail: response.data.username,
        });
      } else {
        setAdmin({
          isLoading: false,
          adminEmail: null,
        });
      }
    } catch (e) {
      setAdmin({
        isLoading: false,
        adminEmail: null,
      });
    }
  };

  useEffect(() => {
    init();
  }, []);

  return <></>;
}

export default App;
