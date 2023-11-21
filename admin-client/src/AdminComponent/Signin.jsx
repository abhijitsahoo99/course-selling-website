import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Card, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../config.js";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { adminState } from "../store/atoms/Admin.js";

function SigninAdmin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const setAdmin = useSetRecoilState(adminState);

  const [error, setError] = useState(null);

  const handleSignIn = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/admin/login`, {
        username: email,
        password: password,
      });

      if (response.status === 200) {
        const data = response.data;
        localStorage.setItem("token", data.token);
        setAdmin({ adminEmail: email, isLoading: false });
        navigate("/courses");
      }
    } catch (error) {
      setError("User not found. Please sign up.");
      alert("User not found. Please sign up.");
    }
  };

  return (
    <div>
      <div
        style={{
          paddingTop: 150,
          marginBottom: 10,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography variant={"h6"}>
          Welcome back to EduCourse. Sign in below.
        </Typography>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card variant={"outlined"} style={{ width: 400, padding: 20 }}>
          <TextField
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            fullWidth={true}
            label="Email"
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            fullWidth={true}
            label="Password"
            variant="outlined"
            type={"password"}
          />
          <br />
          <br />
          <Button size={"large"} variant="contained" onClick={handleSignIn}>
            {" "}
            Sign In
          </Button>
          {error && <div style={{ color: "red", marginTop: 10 }}>{error}</div>}
        </Card>
      </div>
    </div>
  );
}

export default SigninAdmin;
