import { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

function MyComponent() {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    // Después de 5 segundos, ocultar el confeti
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);

    // Limpia el temporizador cuando el componente se desmonta
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showConfetti && (
        <Confetti
          width={400}
          height={400}
          numberOfPieces={200}
        />
      )}
    </div>
  );
}

export default MyComponent;

