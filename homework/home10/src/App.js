import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import StudentsListPage from "./pages/StudentsListPage";
import AutoLogin from "./components/AutoLogin";
import checkAuth from "./components/checkAuth";

function App() {
  const ProtectedStudentsList = checkAuth(StudentsListPage);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <AutoLogin>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/students" element={<ProtectedStudentsList />} />
            <Route path="*" element={<RegisterPage />} />
          </Routes>
        </AutoLogin>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
