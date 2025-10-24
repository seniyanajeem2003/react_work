import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

function StudentsListPage() {
  const [students, setStudents] = useState([]);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) return;
   axios.get("https://worksheet-student.mashupstack.com/students", {
  headers: { Authorization: `Bearer ${user.token}` },
})

      .then((res) => setStudents(res.data))
      .catch(() => alert("Error fetching students"));
  }, [user]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="p-4">
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-bold">Students List</h2>
        <button onClick={handleLogout} className="bg-red-500 text-white p-2 rounded">
          Logout
        </button>
      </div>

      <ul>
        {students.map((s) => (
          <li key={s.id} className="border p-2 mb-2 rounded">
            {s.name} - {s.age} years
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentsListPage;
