import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { isAdminLoading } from "./store/selectors/isAdminLoading";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { adminState } from "./store/atoms/Admin.js";
import { adminEmailState } from "./store/selectors/adminEmail";

function Appbar() {
  const navigate = useNavigate();
  const adminLoading = useRecoilValue(isAdminLoading);
  const adminEmail = useRecoilValue(adminEmailState);
  const setAdmin = useSetRecoilState(adminState);

  if (adminLoading) {
    return <></>;
  }

  if (adminEmail) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: 4,
          zIndex: 1,
        }}
      >
        <div
          style={{ marginLeft: 10, cursor: "pointer" }}
          onClick={() => {
            navigate("/");
          }}
        >
          <Typography variant={"h6"}>EduCourse</Typography>
        </div>

        <div style={{ display: "flex" }}>
          <div style={{ marginRight: 10, display: "flex" }}>
            <div style={{ marginRight: 10 }}>
              <Button
                onClick={() => {
                  navigate("/addcourse");
                }}
              >
                Add course
              </Button>
            </div>

            <div style={{ marginRight: 10 }}>
              <Button
                onClick={() => {
                  navigate("/courses");
                }}
              >
                Courses
              </Button>
            </div>

            <Button
              variant={"contained"}
              onClick={() => {
                localStorage.setItem("token", null);
                setAdmin({
                  isLoading: false,
                  adminEmail: null,
                });
                navigate("/");
              }}
            >
              Logout
            </Button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: 4,
          zIndex: 1,
        }}
      >
        <div
          style={{ marginLeft: 10, cursor: "pointer" }}
          onClick={() => {
            navigate("/");
          }}
        >
          <Typography variant={"h6"}>EduCourse</Typography>
        </div>
      </div>
    );
  }
}

export default Appbar;
