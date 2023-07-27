// 먼저 필요한 라이브러리와 컴포넌트를 import 합니다.
import React, { useState } from "react";
import { Stage, Layer, Rect, Line, Circle } from "react-konva";
import Button1 from "../../../common/atoms/Button1";

const App = () => {
  // 각각의 상태를 초기화 합니다.
  // points는 선택된 점들의 목록입니다.
  // lines는 연결된 선들의 목록입니다.
  // grid는 격자의 상태입니다.
  const [points, setPoints] = useState([]);
  const [lines, setLines] = useState([]);
  const [grid, setGrid] = useState([]);

  // 사용자가 격자를 클릭했을 때 처리하는 함수입니다.
  const handleGridClick = (i, j) => {
    const x = i * 50 + 25;
    const y = j * 50 + 25;
    grid[i][j] = true;
    console.log(
      `Clicked at grid position (${i}, ${j}), which corresponds to canvas coordinates (${x}, ${y})`,
    );

    // points에 새로운 점을 추가합니다.
    const newPoints = [...points, { x, y }];
    setPoints(newPoints);

    // 만약 points의 길이가 짝수라면 새로운 선을 추가합니다.
    // 이는 점 두 개가 연결되어 선을 형성하기 때문입니다.
    if (newPoints.length % 2 === 0) {
      // 최근 두 점을 가져와서 선을 형성합니다.
      const lastTwoPoints = newPoints.slice(-2);
      const newLine = [
        lastTwoPoints[0].x,
        lastTwoPoints[0].y,
        lastTwoPoints[1].x,
        lastTwoPoints[1].y,
      ];

      // 이미 동일한 선이 없는 경우에만 새로운 선을 추가합니다.
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
      }
    }
  };

  // 격자를 초기화합니다.
  if (grid.length === 0) {
    const rows = 10; // 격자의 행 수를 설정합니다.
    const cols = 10; // 격자의 열 수를 설정합니다.
    const tempGrid = Array(rows)
      .fill()
      .map(() => Array(cols).fill(false)); // 초기 격자는 모두 false로 설정합니다.
    setGrid(tempGrid);
  }

  return (
    <div>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          {/* 격자를 그립니다. */}
          {grid &&
            grid.map((row, i) =>
              row.map((col, j) => (
                <Rect
                  key={`${i}-${j}`}
                  x={i * 50}
                  y={j * 50}
                  width={50}
                  height={50}
                  stroke="black"
                  strokeWidth={1}
                  onTap={() => handleGridClick(i, j)} // 셀이 클릭되면 handleGridClick 함수를 호출합니다.
                />
              )),
            )}
          {/* 점들을 그립니다. */}
          {points.map((point, i) => (
            <Circle key={i} x={point.x} y={point.y} radius={5} fill="red" />
          ))}
          {/* 선들을 그립니다. */}
          {lines.map((line, i) => (
            <Line key={i} points={line} stroke="red" tension={1} />
          ))}
        </Layer>
      </Stage>
      <Button1
        className="font-TAEBAEKmilkyway"
        value="초기화"
        onClick={() => {
          setPoints([]);
          setLines([]);
          setGrid(grid.map((row) => row.map((col) => false)));
        }}
      ></Button1>
      <Button1
        className="font-TAEBAEKmilkyway"
        value="콘솔에 띄우기"
        onClick={() => {
          // grid 배열을 탐색하는데, 반환값이 true라면 화면에 그 좌표를 출력
          grid.map((row, i) =>
            row.map((col, j) => {
              if (col === true) {
                console.log(`(${i}, ${j})`);
              }
              return null; // 모든 경우에 대해 값을 반환합니다.
            }),
          );
        }}
      ></Button1>
    </div>
  );
};

export default App;
