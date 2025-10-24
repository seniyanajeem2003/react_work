import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../redux/authSlice";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    try {
      const res = await axios.post("https://worksheet-student.mashupstack.com/login", {
        email,
        password,
      });

      const userData = { email, token: res.data.token };
      dispatch(setUser(userData));
      localStorage.setItem("user", JSON.stringify(userData));

      navigate("/students");
    } catch (error) {
      console.log("Full error:", error);
      console.log("Error response:", error.response);

      const apiError =
        error.response?.data?.message ||
        error.response?.data?.error ||
        "Login failed. Please try again.";
      setErrorMsg(apiError);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin} style={{ display: "inline-block", textAlign: "left" }}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>

        <div style={{ marginTop: "10px" }}>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>

        <button type="submit" style={{ marginTop: "15px" }}>Login</button>

        {errorMsg && <p style={{ color: "red", marginTop: "10px" }}>{errorMsg}</p>}
      </form>
    </div>
  );
}

export default LoginPage;
