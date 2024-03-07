import React, { useState, useEffect } from 'react';

const WORDS = [
  'Productivity',
  'Efficiency',
  'Passion',
  'Creativity',
];

const WordSwapper = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % WORDS.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return <span>{WORDS[count]}</span>;
};

export default WordSwapper;