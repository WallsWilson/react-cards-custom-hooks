import React, { useState} from "react";

function useFlip() {
    const [isFlipped, setIsFlipped] = useState(false);

    function flipCard() {
        setIsFlipped(isUp => !isUp);
    }
    
      return [isFlipped, flipCard];
}

export default useFlip