import React, { useState } from "react";
import "./PokemonCard.css";

/* Renders a single pokemon card. */
function PokemonCard() {
  const[isFlipped, flipCard] = useFlip();
  };
  return (
    <div onClick={flipCard}>
      {isFlipped ? 'back' : 'front'}
    </div>
  );

export default PokemonCard;
