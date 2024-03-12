import React, { useState, useCallback, useEffect } from "react";
import { listCards } from "./utils/api";

export function Cards() {
  const [cards, setCards] = useState([]);

  const formatDate = (dateString) => {
    //to format as Month, DD, YYYY
    // const options = { year: "numeric", month: "long", day: "numeric" };
    // to format as MM/DD/YY
    const options = { month: "2-digit", day: "2-digit", year: "2-digit" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const loadCards = useCallback(async () => {
    const abortController = new AbortController();

    try {
      const response = await listCards(abortController.signal);
      setCards(response);
    } catch (error) {
      console.error(error);
    } finally {
      abortController.abort();
    }
  }, []);

  useEffect(() => {
    loadCards();
  }, []);

  return (
    <>
      <div className="card-wrapper">
        {cards.map((card) => (
          <div className="card" key={card.card_id}>
            <div className="card-title">{card.card_name}</div>
            <div className="card-body">
              <div className="card-body-category">
                Created By: {card.created_by}
              </div>
              <div className="card-body-category">
                Date Created: {formatDate(card.card_date)}
              </div>
              <div className="card-body-category">
                Due Date: {formatDate(card.due_date)}
              </div>
              <div className="card-body-category">Status: {card.status}</div>
              <div className="card-body-category">Type: {card.type}</div>
              <div className="card-body-category">
                Description: {card.description}
              </div>
              <div className="btn-wrapper">
                <button className="btn btn-edit">
                  <i className="fas fa-pencil-alt"></i>
                </button>
                <button className="btn btn-complete">
                  <i className="fas fa-check"></i>
                </button>
                <button className="btn btn-delete">
                  <i className="fas fa-trash-alt"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="btn">New Card</button>
    </>
  );
}
