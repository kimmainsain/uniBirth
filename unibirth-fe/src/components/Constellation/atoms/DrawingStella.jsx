import React, { useState } from "react";
import axios from "axios";
const ConstellationCreator = () => {
  const GridCell = ({ x, y, shining, onClick }) => (
    <rect
      x={x * 50}
      y={y * 50}
      onClick={onClick}
      width={50}
      height={50}
      fill={shining ? "yellow" : "black"}
    />
  );

  const Line = ({ from, to, shining }) => (
    <line
      x1={from.x * 50 + 25}
      y1={from.y * 50 + 25}
      x2={to.x * 50 + 25}
      y2={to.y * 50 + 25}
      stroke={shining ? "orange" : "none"}
    />
  );

  const [grid, setGrid] = useState(
    Array.from({ length: 10 }, () => Array(10).fill(false)),
  );
  const [lines, setLines] = useState([]);
  const [lastStar, setLastStar] = useState(null);

  const onClickCell = (x, y) => {
    const newGrid = grid.slice();
    newGrid[y][x] = !newGrid[y][x];
    setGrid(newGrid);

    if (newGrid[y][x] === false) {
      const newLines = lines.filter(
        (line) =>
          !(
            (line.from.x === x && line.from.y === y) ||
            (line.to.x === x && line.to.y === y)
          ),
      );
      setLines(newLines);
    }

    if (lastStar && (lastStar.x !== x || lastStar.y !== y)) {
      setLines([...lines, { from: lastStar, to: { x, y } }]);
    }

    setLastStar({ x, y });
  };

  const onSave = async () => {
    console.log("grid:", grid);
    console.log("lines:", lines);

    try {
      const response = await axios.post("https://your-api-url.com/save", {
        grid,
        lines,
      });

      console.log(response.data);
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <svg width={500} height={500}>
        {grid.map((row, y) =>
          row.map((cell, x) => (
            <GridCell
              key={`${x}-${y}`}
              x={x}
              y={y}
              shining={cell}
              onClick={() => onClickCell(x, y)}
            />
          )),
        )}
        {lines.map((line, i) => (
          <Line
            key={i}
            from={line.from}
            to={line.to}
            shining={
              grid[line.from.y][line.from.x] && grid[line.to.y][line.to.x]
            }
          />
        ))}
      </svg>
      <button
        className="my-5 rounded-full border-8 border-blue-500 bg-blue-500 text-white"
        onClick={onSave}
      >
        Save
      </button>
    </div>
  );
};

export default ConstellationCreator;
