import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://worksheet-library.mashupstack.com/books";

function BookManagerApp() {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    published_year: "",
    genre: "",
  });
  const [editingBook, setEditingBook] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get(API_URL);
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const handleAddBook = async () => {
    if (!newBook.title.trim()) {
      alert("Title cannot be empty");
      return;
    }
    try {
      await axios.post(API_URL, newBook);
      setNewBook({ title: "", author: "", published_year: "", genre: "" });
      fetchBooks(); 
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchBooks(); 
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  const handleEdit = (book) => {
    setEditingBook(book);
  };

  const handleSave = async () => {
    if (!editingBook.title.trim()) {
      alert("Title cannot be empty");
      return;
    }
    try {
      await axios.put(`${API_URL}/${editingBook.id}`, editingBook);
      setEditingBook(null);
      fetchBooks();
    } catch (error) {
      console.error("Error updating book:", error);
    }
  };

  const handleCancel = () => {
    setEditingBook(null);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Book Manager App</h1>
      <div style={{ marginBottom: "20px" }}>
        <h3>Add New Book</h3>
        <input
          type="text"
          placeholder="Title"
          value={newBook.title}
          onChange={(e) =>
            setNewBook({ ...newBook, title: e.target.value })
          }
          style={{ marginRight: "10px" }}
        />
        <input
          type="text"
          placeholder="Author"
          value={newBook.author}
          onChange={(e) =>
            setNewBook({ ...newBook, author: e.target.value })
          }
          style={{ marginRight: "10px" }}
        />
        <input
          type="number"
          placeholder="Published Year"
          value={newBook.published_year}
          onChange={(e) =>
            setNewBook({ ...newBook, published_year: e.target.value })
          }
          style={{ marginRight: "10px", width: "120px" }}
        />
        <input
          type="text"
          placeholder="Genre"
          value={newBook.genre}
          onChange={(e) =>
            setNewBook({ ...newBook, genre: e.target.value })
          }
          style={{ marginRight: "10px" }}
        />
        <button onClick={handleAddBook}>Add Book</button>
      </div>

      <h3>Book List</h3>
      {books.length === 0 ? (
        <p>No books found</p>
      ) : (
        <table
          border="1"
          cellPadding="10"
          style={{ width: "100%", borderCollapse: "collapse" }}
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Author</th>
              <th>Published Year</th>
              <th>Genre</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>
                  {editingBook?.id === book.id ? (
                    <input
                      type="text"
                      value={editingBook.title}
                      onChange={(e) =>
                        setEditingBook({ ...editingBook, title: e.target.value })
                      }
                    />
                  ) : (
                    book.title
                  )}
                </td>
                <td>
                  {editingBook?.id === book.id ? (
                    <input
                      type="text"
                      value={editingBook.author}
                      onChange={(e) =>
                        setEditingBook({ ...editingBook, author: e.target.value })
                      }
                    />
                  ) : (
                    book.author
                  )}
                </td>
                <td>
                  {editingBook?.id === book.id ? (
                    <input
                      type="number"
                      value={editingBook.published_year}
                      onChange={(e) =>
                        setEditingBook({
                          ...editingBook,
                          published_year: e.target.value,
                        })
                      }
                      style={{ width: "100px" }}
                    />
                  ) : (
                    book.published_year
                  )}
                </td>
                <td>
                  {editingBook?.id === book.id ? (
                    <input
                      type="text"
                      value={editingBook.genre}
                      onChange={(e) =>
                        setEditingBook({ ...editingBook, genre: e.target.value })
                      }
                    />
                  ) : (
                    book.genre
                  )}
                </td>
                <td>
                  {editingBook?.id === book.id ? (
                    <>
                      <button onClick={handleSave}>Save</button>
                      <button onClick={handleCancel}>Cancel</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => handleEdit(book)}>Edit</button>
                      <button onClick={() => handleDelete(book.id)}>Delete</button>
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

export default BookManagerApp;
