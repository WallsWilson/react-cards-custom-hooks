import React, { useState } from "react";
import backOfCard from "./back.png";
import "./PlayingCard.css"
import isFacingUp from "./hooks";
import useFlip from "./hooks";

/* Renders a single playing card. */
function PlayingCard() {
  const [isFlipped, flipCard] = useFlip();
  return (
    <div onClick={flipCard}>
      {isFlipped ? 'back' : 'front'}
    </div>
  );
}

export default PlayingCard;
