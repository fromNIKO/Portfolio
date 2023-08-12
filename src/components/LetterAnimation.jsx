import React, { useState, useEffect } from 'react';

const LetterAnimation = ({ text }) => {
  const [visibleText, setVisibleText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setVisibleText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [text]);

  return <div>{visibleText}</div>;
};

export default LetterAnimation;