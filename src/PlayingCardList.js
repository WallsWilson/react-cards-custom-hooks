import React, { useState } from "react";
import uuid from "uuid";
import axios from "axios";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";
import useAxios from "./useAxios";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function PlayingCardList() {
  const [cards, addCard] = useAxios("https://deckofcardsapi.com/api/deck/new/draw/");

  return (
    <div>
      <button onClick={addCard}>Add a Card</button>
      {cards.map(card=> (
        <img key={card.id} src={card.image} alt={card.code} />
      ))}
    </div>
  );
}

export default PlayingCardList;
