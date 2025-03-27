import React, { useState } from "react";

const BackgroundChanger = () => {
  const [color, setColor] = useState("white");

  return (
    <div className={`h-screen flex flex-col items-center justify-center transition-colors duration-300`} style={{ backgroundColor: color }}>
      <h2 className="text-2xl font-bold mb-4">Background Changer</h2>
      <div className="flex space-x-4">
        <button onClick={() => setColor("red")} className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition">Red</button>
        <button onClick={() => setColor("green")} className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition">Green</button>
        <button onClick={() => setColor("blue")} className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition">Blue</button>
      </div>
    </div>
  );
};

export default BackgroundChanger;