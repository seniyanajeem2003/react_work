import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setErrorMsg(""); 

    try {
      const res = await axios.post(
        "https://worksheet-student.mashupstack.com/register",
        {
          user_name: userName, 
          email: email,
          password: password,
        }
      );

      alert("Registration successful! You can now log in.");
      navigate("/login");
    } catch (error) {
      console.log("Registration error:", error.response?.data);
      const apiError =
        error.response?.data?.message ||
        error.response?.data?.error ||
        "Registration failed";
      setErrorMsg(apiError);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Register</h2>
      <form onSubmit={handleRegister} style={{ display: "inline-block", textAlign: "left" }}>
        <div>
          <label>User Name:</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>

        <div style={{ marginTop: "10px" }}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div style={{ marginTop: "10px" }}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" style={{ marginTop: "15px" }}>
          Register
        </button>

        {errorMsg && (
          <p style={{ color: "red", marginTop: "10px" }}>{errorMsg}</p>
        )}
      </form>
    </div>
  );
}

export default RegisterPage;
