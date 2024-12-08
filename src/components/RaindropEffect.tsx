import { useEffect } from 'react';
import "./raindropEffect.css";

export default function RaindropEffect() {
  useEffect(() => {
    const rainContainer = document.querySelector('.rain-container') as HTMLElement;

    const createRaindrop = () => {
      const raindrop = document.createElement('div');
      raindrop.classList.add('raindrop');
      raindrop.style.left = `${Math.random() * 100}vw`;
      raindrop.style.animationDuration = `${Math.random() * 2 + 1}s`;

      rainContainer.appendChild(raindrop);

      setTimeout(() => {
        raindrop.remove();
      }, 3000);
    };

    const intervalId = setInterval(createRaindrop, 100);

    return () => clearInterval(intervalId);
  }, []);

  return <div className="rain-container absolute top-0 left-0 w-full h-full overflow-hidden"></div>;
};
