import React from "react";
import SearchBar from "../components/SearchBar.component";
import CardGrid from "../components/CardGrid.component";

interface CardData {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
}

interface HomeProps {
  cards: CardData[];
  onSearch: (query: string) => void;
}

function Home({ cards, onSearch }: HomeProps): React.ReactElement {
  return (
    <div className="container">
      <SearchBar onSearch={onSearch} />
      {cards.length === 0 ? (
        <div className="no-results">
          <p>No study rooms found matching your search. Try different keywords!</p>
        </div>
      ) : (
        <CardGrid cards={cards} />
      )}
    </div>
  );
}

export default Home;
