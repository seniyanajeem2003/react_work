import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from "react-router-dom";


function Home() {
  const students = ["Riya", "Alex", "John", "Neha"];
  const navigate = useNavigate();

  const goToStudent = () => {
    navigate("/student/Riya"); 
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Student List</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {students.map((name) => (
          <li key={name} style={{ margin: "10px" }}>
           
            <Link to={`/student/${name}`} style={{ textDecoration: "none", color: "blue" }}>
              {name}
            </Link>
          </li>
        ))}
      </ul>

      <button onClick={goToStudent} style={{ marginTop: "20px", padding: "8px 15px" }}>
        Go to Student (Riya)
      </button>
    </div>
  );
}


function Student() {
  const { name } = useParams(); 
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Welcome, {name}!</h2>
      <Link to="/" style={{ textDecoration: "none", color: "green" }}>
         Back to Home
      </Link>
    </div>
  );
}


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student/:name" element={<Student />} />
      </Routes>
    </Router>
  );
}

