import { useState, useEffect } from "react";

interface UseDebounceProps {
  value: string;
  delay: number;
}

export default function useDebounce({ value, delay }: UseDebounceProps) {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debounceValue;
}
