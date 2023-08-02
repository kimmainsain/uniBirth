import React, { useState, useEffect, useRef } from "react";
import { Stage, Layer, Rect, Line, Circle } from "react-konva";
import Button1 from "../../../common/atoms/Button1";

const GridCustomConstellation = () => {
  const [points, setPoints] = useState([]);
  const [lines, setLines] = useState([]);
  const [grid, setGrid] = useState([]);
  const [lineList, setlineList] = useState([]);
  const [shouldDeduplicate, setShouldDeduplicate] = useState(false);
  const [lastPoints, setLastPoints] = useState([]);
  const [pointList, setPointList] = useState([]);
  const stageRef = useRef(null);

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
    let newPoints, newLines, newlineList;
    if (points.length === 0) return;
    if (points.length % 2 === 1) {
      const lastPoint = points[points.length - 1];
      newPoints = points.slice(0, points.length - 1);
      setLastPoints([lastPoint]);
    } else if (points.length % 2 === 0) {
      const lastTwoPoints = points.slice(-2);
      newPoints = points.slice(0, points.length - 2);
      newLines = lines.slice(0, lines.length - 1);
      newlineList = lineList.slice(0, lineList.length - 1);
      setLastPoints(lastTwoPoints);
      setLines(newLines);
      setlineList(newlineList);
    }
    setPoints(newPoints);
    setShouldDeduplicate(true);
  };

  const handleSaveClick = () => {
    const url = stageRef.current.toDataURL(); // Stage를 Data URL로 변환
    const link = document.createElement("a");
    console.log(url);
    console.log(link);
    // link.download = "my-custom-constellation.png"; // 파일명
    // link.href = url;
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
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
        setlineList([...lineList, saveLine]);
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
        <Stage width={500} height={500} ref={stageRef}>
          <Layer>
            {grid &&
              grid.map((yValue, y) =>
                yValue.map((xValue, x) => (
                  <Rect
                    key={`${y}-${x}`}
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
          setlineList([]);
          setLastPoints([]);
          setShouldDeduplicate(false);
        }}
      ></Button1>
      <Button1
        className="font-TAEBAEKmilkyway"
        value="콘솔에 띄우기"
        onClick={() => {
          const tempPointList = [];
          grid.forEach((yValue, y) => {
            yValue.forEach((xValue, x) => {
              if (xValue === true) {
                tempPointList.push([y, x]);
              }
            });
          });
          console.log(`tempPointList: ${JSON.stringify(tempPointList)}`);
          setPointList(tempPointList);
          console.log(`points: ${JSON.stringify(points)}`);
          console.log(`lines: ${JSON.stringify(lines)}`);
          console.log(`lineList: ${JSON.stringify(lineList)}`);
          console.log(`pointList: ${JSON.stringify(pointList)}`);
        }}
      ></Button1>
      <Button1
        className="font-TAEBAEKmilkyway"
        value="직전으로 돌아가기"
        onClick={handleBeforeClick}
      ></Button1>
      <Button1
        className="font-TAEBAEKmilkyway"
        value="저장하기"
        onClick={handleSaveClick}
      ></Button1>
    </div>
  );
};

export default GridCustomConstellation;
