import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingMain from "./LandingMain.jsx";
import LandingAdmin from "./AdminComponent/Landing.jsx";
import LandingUser from "./UserComponent/LandingUser.jsx";
import SigninAdmin from "./AdminComponent/Signin.jsx";
import SignupAdmin from "./AdminComponent/Signup.jsx";
import Appbar from "./Appbar.jsx";
import AddCourse from "./AdminComponent/AddCourse.jsx";
import Courses from "./AdminComponent/Courses.jsx";
import Course from "./AdminComponent/Course.jsx";
import { userState } from "./store/atoms/user.js";
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
          </Routes>
        </Router>
      </div>
    </RecoilRoot>
  );
}

function InitUser() {
  const setUser = useSetRecoilState(userState);
  const init = async () => {
    try {
      const response = await axios.get($, { BASE_URL } / admin / me, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });

      if (response.data.username) {
        setUser({
          isLoading: false,
          userEmail: response.data.username,
        });
      } else {
        setUser({
          isLoading: false,
          userEmail: null,
        });
      }
    } catch (e) {
      setUser({
        isLoading: false,
        userEmail: null,
      });
    }
  };

  useEffect(() => {
    init();
  }, []);

  return <></>;
}

export default App;
