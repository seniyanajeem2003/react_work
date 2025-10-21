import React, { useState } from "react";

function BookListApp() {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ name: "", author: "", date: "" });
  const [searchTerm, setSearchTerm] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingName, setEditingName] = useState("");
  const handleAddBook = () => {
    if (newBook.name.trim() === "") {
      alert("Book name cannot be empty");
      return;
    }

    const book = {
      id: books.length + 1,
      name: newBook.name,
      author: newBook.author,
      date: newBook.date,
    };

    setBooks([...books, book]);
    setNewBook({ name: "", author: "", date: "" }); // Clear input fields
  };
  const handleDelete = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  const handleEdit = (book) => {
    setEditingId(book.id);
    setEditingName(book.name);
  };

  const handleSave = (id) => {
    if (editingName.trim() === "") {
      alert("Book name cannot be empty");
      return;
    }

    const updatedBooks = books.map((book) =>
      book.id === id ? { ...book, name: editingName } : book
    );
    setBooks(updatedBooks);
    setEditingId(null);
    setEditingName("");
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditingName("");
  };

  const filteredBooks = books.filter(
    (book) =>
      book.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Book List Management App</h1>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Book Name"
          value={newBook.name}
          onChange={(e) => setNewBook({ ...newBook, name: e.target.value })}
          style={{ marginRight: "10px" }}
        />
        <input
          type="text"
          placeholder="Author Name"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
          style={{ marginRight: "10px" }}
        />
        <input
          type="date"
          value={newBook.date}
          onChange={(e) => setNewBook({ ...newBook, date: e.target.value })}
          style={{ marginRight: "10px" }}
        />
        <button onClick={handleAddBook}>Add Book</button>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search by book or author"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: "300px" }}
        />
      </div>

      {filteredBooks.length > 0 ? (
        <table
          border="1"
          cellPadding="10"
          style={{ width: "100%", borderCollapse: "collapse" }}
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>Book Name</th>
              <th>Author Name</th>
              <th>Publish Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks.map((book) => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>
                  {editingId === book.id ? (
                    <input
                      type="text"
                      value={editingName}
                      onChange={(e) => setEditingName(e.target.value)}
                    />
                  ) : (
                    book.name
                  )}
                </td>
                <td>{book.author}</td>
                <td>{book.date}</td>
                <td>
                  {editingId === book.id ? (
                    <>
                      <button onClick={() => handleSave(book.id)}>Save</button>
                      <button onClick={handleCancel}>Cancel</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => handleEdit(book)}>Edit</button>
                      <button onClick={() => handleDelete(book.id)}>
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No books found</p>
      )}
    </div>
  );
}

export default BookListApp;
