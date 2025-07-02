import { useState, useEffect } from 'react';

export function useTimer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return count;
}
