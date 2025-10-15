import React from "react";

interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
}

function Card({ title, description, imageUrl }: CardProps): React.ReactElement {
  return (
    <div className="card">
      {imageUrl && (
        <div className="card-image">
          <img src={imageUrl} alt={title} />
        </div>
      )}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
}

export default Card;
