import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar.component";
import SearchBar from "./components/SearchBar.component";
import CardGrid from "./components/CardGrid.component";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

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

  return (
    <div className="app">
      <Navbar />
      <div className="container">
        <SearchBar onSearch={handleSearch} />
        <CardGrid cards={cardData} />
      </div>
    </div>
  );
}

export default App;
