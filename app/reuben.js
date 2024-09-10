"use client";
import React, { useEffect, useState } from "react";
export default function Reubens() {
  const [reubens, setReubens] = useState([]);
  useEffect(() => {
    const intervalId = setInterval(() => {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      setReubens((prevReubens) => {
        const newReubens = [...prevReubens, { x, y }];
        if (newReubens.length > 20) {
          newReubens.shift();
        }
        return newReubens;
      });
    }, 200);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      {reubens.map(({ x, y }, index) => (
        <div
          className="reuben"
          style={{ left: x + "px", top: y + "px" }}
          key={index}
        >
          Reuben!
        </div>
      ))}
    </div>
  );
}
