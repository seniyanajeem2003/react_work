import React, { useState } from "react";

export default function StudentListApp() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [klass, setKlass] = useState("");

  const [search, setSearch] = useState("");

  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editRoll, setEditRoll] = useState("");
  const [editKlass, setEditKlass] = useState("");

  const thStyle = { textAlign: "left", padding: "8px 6px", borderBottom: "2px solid #ccc" };
  const tdStyle = { padding: "8px 6px" };

  const isRollUnique = (rollToCheck, excludeId = null) => {
    return !students.some((s) => s.roll === rollToCheck && s.id !== excludeId);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !roll.trim() || !klass.trim()) {
      alert("All fields are required.");
      return;
    }

    if (!isRollUnique(roll.trim())) {
      alert("Roll number must be unique.");
      return;
    }

    const newId = students.length + 1;

    const newStudent = {
      id: newId,
      name: name.trim(),
      roll: roll.trim(),
      klass: klass.trim(),
    };

    setStudents((prev) => [...prev, newStudent]);
    setName("");
    setRoll("");
    setKlass("");
  };

  const handleDelete = (id) => {
    if (!window.confirm("Are you sure you want to delete this student?")) return;
    setStudents((prev) => prev.filter((s) => s.id !== id));
  };

  const startEdit = (student) => {
    setEditingId(student.id);
    setEditName(student.name);
    setEditRoll(student.roll);
    setEditKlass(student.klass);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditName("");
    setEditRoll("");
    setEditKlass("");
  };

  const saveEdit = (id) => {
    if (!editName.trim() || !editRoll.trim() || !editKlass.trim()) {
      alert("All fields are required.");
      return;
    }

    if (!isRollUnique(editRoll.trim(), id)) {
      alert("Roll number must be unique.");
      return;
    }

    setStudents((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, name: editName.trim(), roll: editRoll.trim(), klass: editKlass.trim() } : s
      )
    );

    cancelEdit();
  };

  const filtered = students.filter((s) => s.name.toLowerCase().includes(search.trim().toLowerCase()));

  return (
    <div style={{ padding: 20, fontFamily: "Arial, sans-serif", maxWidth: 900, margin: "0 auto" }}>
      <h1>Student List Management</h1>
      <form
        onSubmit={handleSubmit}
        style={{ marginBottom: 20, display: "grid", gap: 8, gridTemplateColumns: "1fr 1fr 1fr auto" }}
      >
        <input placeholder="Student name" value={name} onChange={(e) => setName(e.target.value)} aria-label="Student name" />
        <input placeholder="Roll number" value={roll} onChange={(e) => setRoll(e.target.value)} aria-label="Roll number" />
        <input
          placeholder="Class (e.g., 10A, Grade 12)"
          value={klass}
          onChange={(e) => setKlass(e.target.value)}
          aria-label="Class"
        />
        <button type="submit">Add Student</button>
      </form>

      <div style={{ marginBottom: 12 }}>
        <input
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: "100%", padding: 8 }}
          aria-label="Search students"
        />
      </div>

      {students.length === 0 ? (
        <div>No students found.</div>
      ) : filtered.length === 0 ? (
        <div>No students found matching "{search}".</div>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={thStyle}>ID</th>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Roll Number</th>
              <th style={thStyle}>Class</th>
              <th style={thStyle}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((s) => (
              <tr key={s.id} style={{ borderTop: "1px solid #ddd" }}>
                <td style={tdStyle}>{s.id}</td>
                <td style={tdStyle}>
                  {editingId === s.id ? <input value={editName} onChange={(e) => setEditName(e.target.value)} /> : s.name}
                </td>

                <td style={tdStyle}>
                  {editingId === s.id ? <input value={editRoll} onChange={(e) => setEditRoll(e.target.value)} /> : s.roll}
                </td>

                <td style={tdStyle}>
                  {editingId === s.id ? <input value={editKlass} onChange={(e) => setEditKlass(e.target.value)} /> : s.klass}
                </td>

                <td style={tdStyle}>
                  {editingId === s.id ? (
                    <>
                      <button onClick={() => saveEdit(s.id)} style={{ marginRight: 8 }}>
                        Save
                      </button>
                      <button onClick={cancelEdit}>Cancel</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => startEdit(s)} style={{ marginRight: 8 }}>
                        Edit
                      </button>
                      <button onClick={() => handleDelete(s.id)}>Delete</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

