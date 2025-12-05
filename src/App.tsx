import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar.component";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Search from "./pages/Search";
import Reserve from "./pages/Reserve";
import CardDetail from "./pages/CardDetail";

function App() {
  const [, setSearchQuery] = useState("");

  // Sample card data - replace with your actual data
  const cardData = [
    {
      id: 1,
      title: "Card 1",
      description: "This is the first card",
    },
    {
      id: 2,
      title: "Card 2",
      description: "This is the second card",
    },
    {
      id: 3,
      title: "Card 3",
      description: "This is the third card",
    },
    {
      id: 4,
      title: "Card 4",
      description: "This is the fourth card",
    },
    {
      id: 5,
      title: "Card 5",
      description: "This is the fifth card",
    },
    {
      id: 6,
      title: "Card 6",
      description: "This is the sixth card",
    },
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Add your search logic here
  };

  // Home component is extracted to `src/pages/Home.tsx` and receives cards and onSearch

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home cards={cardData} onSearch={handleSearch} />} />
        <Route path="/card/:id" element={<CardDetail cards={cardData} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
        <Route path="/reserve" element={<Reserve/>} />
        {/* Example extra paths: replace with your actual pages when created */}
        {/* <Route path="/search" element={<SearchResults />} /> */}
        {/* Redirect unknown paths back to home */}
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
