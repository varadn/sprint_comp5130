import React from "react";
import Card from "./Card.component";

interface CardData {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
}

interface CardGridProps {
  cards: CardData[];
}

function CardGrid({ cards }: CardGridProps): React.ReactElement {
  return (
    <div className="card-grid">
      {cards.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
          imageUrl={card.imageUrl}
        />
      ))}
    </div>
  );
}

export default CardGrid;
