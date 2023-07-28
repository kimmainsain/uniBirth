import React, { useState, useEffect } from "react";
import { Stage, Layer, Rect, Line, Circle } from "react-konva";
import Button1 from "../../../common/atoms/Button1";

const GridCustomConstellation = () => {
  const [points, setPoints] = useState([]);
  const [lines, setLines] = useState([]);
  const [grid, setGrid] = useState([]);
  const [axiosLines, setAxiosLines] = useState([]);
  const [shouldDeduplicate, setShouldDeduplicate] = useState(false);
  const [lastPoints, setLastPoints] = useState([]);

  useEffect(() => {
    if (shouldDeduplicate) {
      deDuplication(lastPoints);
      setShouldDeduplicate(false);
    }
  }, [shouldDeduplicate, lastPoints]);

  const deDuplication = (input) => {
    const array = Array.isArray(input) ? input : [input];
    array.forEach((point) => {
      const yIndex = (point.centerY - 25) / 50;
      const xIndex = (point.centerX - 25) / 50;
      const existingPoint = points.find(
        (p) => p.centerX === point.centerX && p.centerY === point.centerY,
      );
      if (!existingPoint) {
        setGrid((prevGrid) => {
          const newGrid = [...prevGrid];
          console.log(prevGrid[yIndex][xIndex]);
          newGrid[yIndex][xIndex] = false;
          return newGrid;
        });
      }
    });
  };

  const handleBeforeClick = () => {
    let newPoints, newLines, newAxiosLines;
    if (points.length === 0) return;
    if (points.length % 2 === 1) {
      const lastPoint = points[points.length - 1];
      newPoints = points.slice(0, points.length - 1);
      setLastPoints([lastPoint]);
    } else if (points.length % 2 === 0) {
      const lastTwoPoints = points.slice(-2);
      newPoints = points.slice(0, points.length - 2);
      newLines = lines.slice(0, lines.length - 1);
      newAxiosLines = axiosLines.slice(0, axiosLines.length - 1);
      setLastPoints(lastTwoPoints);
      setLines(newLines);
      setAxiosLines(newAxiosLines);
    }
    setPoints(newPoints);
    setShouldDeduplicate(true);
  };

  const handleGridClick = (y, x) => {
    const centerY = y * 50 + 25;
    const centerX = x * 50 + 25;
    setGrid((prevGrid) => {
      const newGrid = [...prevGrid];
      newGrid[y][x] = true;
      return newGrid;
    });

    const newPoints = [...points, { centerY, centerX }];
    setPoints(newPoints);

    if (newPoints.length % 2 === 0) {
      const lastTwoPoints = newPoints.slice(-2);
      const newLine = [
        lastTwoPoints[0].centerX,
        lastTwoPoints[0].centerY,
        lastTwoPoints[1].centerX,
        lastTwoPoints[1].centerY,
      ];
      const saveLine = [
        (lastTwoPoints[0].centerY - 25) / 50,
        (lastTwoPoints[0].centerX - 25) / 50,
        (lastTwoPoints[1].centerY - 25) / 50,
        (lastTwoPoints[1].centerX - 25) / 50,
      ];
      if (
        !lines.some(
          (line) =>
            (line[0] === newLine[0] &&
              line[1] === newLine[1] &&
              line[2] === newLine[2] &&
              line[3] === newLine[3]) ||
            (line[0] === newLine[2] &&
              line[1] === newLine[3] &&
              line[2] === newLine[0] &&
              line[3] === newLine[1]),
        )
      ) {
        setLines([...lines, newLine]);
        setAxiosLines([...axiosLines, saveLine]);
      }
    }
  };

  if (grid.length === 0) {
    const rows = 10;
    const cols = 10;
    const tempGrid = Array(rows)
      .fill()
      .map(() => Array(cols).fill(false));
    setGrid(tempGrid);
  }

  return (
    <div>
      <div className="flex h-full w-full items-center justify-center">
        <Stage width={500} height={500}>
          <Layer>
            {grid &&
              grid.map((yValue, y) =>
                yValue.map((xValue, x) => (
                  <Rect
                    key={`${x}-${y}`}
                    y={y * 50}
                    x={x * 50}
                    width={50}
                    height={50}
                    stroke="black"
                    strokeWidth={1}
                    onTap={() => handleGridClick(y, x)}
                  />
                )),
              )}

            {points.map((point, y) => (
              <Circle
                key={y}
                x={point.centerX}
                y={point.centerY}
                radius={5}
                fill="red"
              />
            ))}

            {lines.map((line, y) => (
              <Line key={y} points={line} stroke="red" tension={1} />
            ))}
          </Layer>
        </Stage>
      </div>
      <Button1
        className="font-TAEBAEKmilkyway"
        value="초기화"
        onClick={() => {
          setPoints([]);
          setLines([]);
          setGrid(grid.map((yValue) => yValue.map((xValue) => false)));
          setAxiosLines([]);
          setLastPoints([]);
          setShouldDeduplicate(false);
        }}
      ></Button1>
      <Button1
        className="font-TAEBAEKmilkyway"
        value="콘솔에 띄우기"
        onClick={() => {
          grid.map((yValue, y) =>
            yValue.map((xValue, x) => {
              if (xValue === true) {
                console.log(`(${y}, ${x})`);
              }
              return null;
            }),
          );
          console.log(`points: ${JSON.stringify(points)}`);
          console.log(`lines: ${JSON.stringify(lines)}`);
          console.log(`axiosLines: ${JSON.stringify(axiosLines)}`);
        }}
      ></Button1>
      <Button1
        className="font-TAEBAEKmilkyway"
        value="직전으로 돌아가기"
        onClick={handleBeforeClick}
      ></Button1>
    </div>
  );
};

export default GridCustomConstellation;
