import React from 'react'
import { useMemo } from 'react';

 const Fibonacci = () => {
  const fibonacci = (n) => {
    if (n <= 2) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
  };

  useMemo(() => {
    return fibonacci;
  });


  return (
    <>
      Fibonacci of n {fibonacci(5)}
    </>
  )
}

export default Fibonacci