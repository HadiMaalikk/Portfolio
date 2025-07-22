import { useEffect, useState } from "react";
import Arrowhead from "/public/arrowheadwhite.svg"; // adjust path

const Cursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <img
      src={Arrowhead}
      alt="cursor"
      className="fixed top-0 left-0 w-6 h-6 mix-blend-difference pointer-events-none z-[9999]"
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`,
      }}
    />
  );
};

export default Cursor;
