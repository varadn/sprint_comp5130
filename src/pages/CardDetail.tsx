import React from "react";
import { useParams, useNavigate } from "react-router-dom";

interface CardData {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
}

interface CardDetailProps {
  cards: CardData[];
}

function CardDetail({ cards }: CardDetailProps): React.ReactElement {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const card = cards.find((c) => c.id === parseInt(id || ""));

  if (!card) {
    return (
      <div className="container">
        <div className="card-detail-page">
          <div className="card-detail-container">
            <button className="back-button" onClick={() => navigate("/")}>
              ← Back
            </button>
            <div className="not-found">
              <h2>Study Room Not Found</h2>
              <p>The study room you're looking for doesn't exist.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="card-detail-page">
        <div className="card-detail-container">
          <button className="back-button" onClick={() => navigate("/")}>
            ← Back
          </button>

          <div className="card-detail">
            {card.imageUrl && (
              <div className="card-detail-image">
                <img src={card.imageUrl} alt={card.title} />
              </div>
            )}

            <div className="card-detail-content">
              <h1 className="card-detail-title">{card.title}</h1>

              <div className="card-detail-section">
                <h3>Description</h3>
                <p className="card-detail-description">{card.description}</p>
              </div>

              <div className="card-detail-actions">
                <button className="btn btn-primary btn-reserve">
                  Reserve This Room
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDetail;
