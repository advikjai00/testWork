import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (starValue) => {
    setRating(starValue);
  };

  return (
    <>
    <div className='relative'>
      <div style={{ position: 'relative', top: '50%', left: '30%', transform: 'translate(-50%, -50%)' }}>
        {[...Array(5)].map((_, index) => {
          const starValue = index + 1;
          const curve = (starValue - 3) * (starValue - 3) * -10; // Opposite direction curve calculation
          return (
            <FaStar
              key={index}
              onClick={() => handleStarClick(starValue)}
              size={50}
              style={{ position: 'absolute', left: `${index * 50}px`, bottom: `${curve}px`, transition: 'bottom 0.3s', cursor: 'pointer', color: starValue <= rating ? '#c800ff' : '#ccc' }}
            />
          );
        })}
      </div>
    </div>
      <p className='mt-10 text-white'>You rated: {rating} stars</p>
    </>
  );
};

export default StarRating;
