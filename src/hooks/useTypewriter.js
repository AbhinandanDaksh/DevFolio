import { useState, useEffect } from 'react';

/**
 * useTypewriter — cycles through an array of strings with a typing/erasing effect.
 * @param {string[]} words - Array of strings to cycle through
 * @param {number} typeSpeed - ms per character when typing (default 90)
 * @param {number} deleteSpeed - ms per character when deleting (default 50)
 * @param {number} pauseDuration - ms to pause after fully typed (default 1800)
 */
export function useTypewriter(words, typeSpeed = 90, deleteSpeed = 50, pauseDuration = 1800) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words || words.length === 0) return;

    const currentWord = words[wordIndex % words.length];
    let timeout;

    if (!isDeleting) {
      if (text.length < currentWord.length) {
        // Still typing
        timeout = setTimeout(() => {
          setText(currentWord.slice(0, text.length + 1));
        }, typeSpeed);
      } else {
        // Fully typed → pause then start deleting
        timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
      }
    } else {
      if (text.length > 0) {
        // Still deleting
        timeout = setTimeout(() => {
          setText(currentWord.slice(0, text.length - 1));
        }, deleteSpeed);
      } else {
        // Done deleting → move to next word
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, pauseDuration]);

  return text;
}
