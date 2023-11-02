import React, { useState } from 'react';


function Card({ frontImage, backText }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardFlip}>
      <div className="cardFront">
        <img src={frontImage} alt="Front of the card" />
      </div>

      <div className='backCardBlock'>
        <div className="cardBack">
          <p>{backText}</p>
          <div className='btnShop'>
            <a href="/product">Ir a la tienda</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
