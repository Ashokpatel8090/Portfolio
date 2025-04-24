import React, { useState, useEffect } from "react";

const TextChange = () => {
  const texts = ["I'm Ashok Patel", "Hi, I'm Ashok Patel"];
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      if (isTyping) {
        if (charIndex < texts[textIndex].length) {
          setCurrentText((prev) => prev + texts[textIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsTyping(false), 1000);
        }
      } else {
        if (charIndex > 0) {
          setCurrentText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        } else {
          setIsTyping(true);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    };

    const interval = setInterval(handleTyping, 100);
    return () => clearInterval(interval);
  }, [charIndex, isTyping, textIndex, texts]);

  return (
    <span className="text-indigo-600 font-extrabold transition ease-in-out duration-300">
      {currentText}
      <span className="animate-blink">|</span>
    </span>
  );
};

export default TextChange;