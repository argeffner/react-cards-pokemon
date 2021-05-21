import React, {useState} from 'react';

const useFlipCard = (initialState = true) => {
const [up, setUp] = useState(initialState);
  const flipCard = () => {
    setUp(isUp => !isUp);
  };
  return [up, flipCard]
};

export default useFlipCard;