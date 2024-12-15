import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar.tsx";
import { BooksPage } from "./pages/BooksPage.tsx";
import { ProfilePage } from "./pages/ProfilePage.tsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/books" element={<BooksPage />} />
        <Route path="/profile" element={<ProfilePage />} />

        <Route path="/" element={<Navigate to="/books" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
