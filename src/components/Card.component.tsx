import React from "react";
import { useNavigate } from "react-router-dom";

interface CardProps {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
}

function Card({ id, title, description, imageUrl }: CardProps): React.ReactElement {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/card/${id}`);
  };

  return (
    <div className="card" onClick={handleClick} role="button" tabIndex={0}>
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
