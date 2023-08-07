import React, { useState, useEffect, useRef } from "react";
import { Stage, Layer, Rect, Line, Circle } from "react-konva";
import Button1 from "../../../common/atoms/Button1";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../../api/useFirebaseApi";
import useConstellationApi from "../../../api/useConstellationApi";
import { useRecoilState } from "recoil";
import { boardSizeState } from "../../../recoil/atoms";
import { useNavigation } from "../../../hooks/useNavigation";

const GridCustomConstellation = ({
  planetId,
  constellationName,
  constellationDescp,
  pointList,
  lineList,
}) => {
  const [points, setPoints] = useState([]);
  const [lines, setLines] = useState([]);
  const [grid, setGrid] = useState([]);
  const [shouldDeduplicate, setShouldDeduplicate] = useState(false);
  const [lastPoints, setLastPoints] = useState([]);
  const linesAndPointsLayerRef = useRef(null);
  const boardSize = useRecoilState(boardSizeState);
  const stageSize = boardSize[0] * 50;
  const containerStyle = boardSize[0] === 5 ? "max-w-md mx-auto" : "w-full";
  const [templatePointSize, setTemplatePointsSize] = useState(0);
  const [templateLineSize, setTemplateLinesSize] = useState(0);
  const { navigateToDetailConstellation } = useNavigation();

  useEffect(() => {
    if (shouldDeduplicate) {
      deDuplication(lastPoints);
      setShouldDeduplicate(false);
    }
  }, [shouldDeduplicate, lastPoints]);

  useEffect(() => {
    if (pointList && lineList) {
      console.log("pointList", pointList);
      console.log("lineList", lineList);
      setTemplatePointsSize(pointList.length);
      setTemplateLinesSize(lineList.length);
      const updateGrid = grid.map((y) => y.slice());
      pointList.forEach((point) => {
        const yIndex = point[0];
        const xIndex = point[1];
        updateGrid[yIndex][xIndex] = true;
      });
      setGrid(updateGrid);
      setPoints(
        pointList.map((point) => ({
          centerY: point[0] * 50 + 25,
          centerX: point[1] * 50 + 25,
        })),
      );

      setLines(
        lineList.map((line) => [
          line[0] * 50 + 25,
          line[1] * 50 + 25,
          line[2] * 50 + 25,
          line[3] * 50 + 25,
        ]),
      );
      console.log(lines);
    }
  }, [pointList, lineList]);

  const deDuplication = (input) => {
    // points 배열에서 중복된 값 제거
    const array = input;
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
    if (
      points.length === templatePointSize &&
      lines.length === templateLineSize
    ) {
      handleResetClick(); // 템플릿 크기와 동일하면 초기화
      return;
    }
    let newPoints, newLines;
    if (points.length === 0) return;
    if (points.length % 2 === 1) {
      const lastPoint = points[points.length - 1];
      newPoints = points.slice(0, points.length - 1);
      setLastPoints([lastPoint]);
    } else if (points.length % 2 === 0) {
      const lastTwoPoints = points.slice(-2);
      newPoints = points.slice(0, points.length - 2);
      newLines = lines.slice(0, lines.length - 1);
      setLastPoints(lastTwoPoints);
      setLines(newLines);
    }
    setPoints(newPoints);
    setShouldDeduplicate(true);
  };

  const removeDuplicate = (lines) => {
    const uniquePoints = [];
    grid.forEach((yValue, y) => {
      yValue.forEach((xValue, x) => {
        if (xValue === true) {
          uniquePoints.push([y, x]);
        }
      });
    });
    const uniqueLines = [];
    const duplicateLines = [];
    console.log(lines);
    for (const line of lines) {
      const reversedLine = [line[2], line[3], line[0], line[1]];
      const isDuplicate = duplicateLines.some(
        (uniqueLine) =>
          (uniqueLine[0] === line[0] &&
            uniqueLine[1] === line[1] &&
            uniqueLine[2] === line[2] &&
            uniqueLine[3] === line[3]) ||
          (uniqueLine[0] === reversedLine[0] &&
            uniqueLine[1] === reversedLine[1] &&
            uniqueLine[2] === reversedLine[2] &&
            uniqueLine[3] === reversedLine[3]),
      );

      if (!isDuplicate) {
        duplicateLines.push(line);
        uniqueLines.push([
          (line[0] - 25) / 50,
          (line[1] - 25) / 50,
          (line[2] - 25) / 50,
          (line[3] - 25) / 50,
        ]);
      }
    }
    return [uniquePoints, uniqueLines];
  };

  const handleSaveClick = () => {
    const [uniquePoints, uniqueLines] = removeDuplicate(lines);
    const imageUrl = linesAndPointsLayerRef.current.toDataURL();
    const [header, data] = imageUrl.split(",");
    const mimeType = header.split(";")[0].split(":")[1];
    const binary = atob(data);
    const array = Uint8Array.from(binary, (c) => c.charCodeAt(0));
    const imageName = `constellation-${new Date().getTime()}.png`;
    const storageRef = ref(storage, `images/${imageName}`);
    const uploadTask = uploadBytesResumable(storageRef, array, {
      contentType: mimeType,
    });
    console.log(uploadTask);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
      },
      (error) => {
        console.error("Upload failed:", error);
      },
      async () => {
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          const constellation = {
            planetId: planetId[0],
            title: constellationName[0],
            description: constellationDescp[0],
            lineList: uniqueLines,
            pointList: uniquePoints,
            imageUrl: downloadURL,
            boardSize: boardSize[0],
          };
          console.log(constellation);
          const response =
            await useConstellationApi.constellationsPostConstellation(
              constellation,
            );
          console.log(response); // 성공 처리
          console.log(response.resultData.constellationId);
          navigateToDetailConstellation(response.resultData.constellationId);
        } catch (error) {
          if (error.code === "storage/object-not-found") {
            console.error("Failed to get download URL:", error);
          } else {
            console.error("Failed to post constellation:", error); // 에러 처리
          }
        }
      },
    );
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
        lastTwoPoints[0].centerY,
        lastTwoPoints[0].centerX,
        lastTwoPoints[1].centerY,
        lastTwoPoints[1].centerX,
      ];
      setLines([...lines, newLine]);
    }
  };

  if (grid.length === 0) {
    const rows = boardSize[0];
    const cols = boardSize[0];
    const tempGrid = Array(rows)
      .fill()
      .map(() => Array(cols).fill(false));
    setGrid(tempGrid);
  }

  const handelConsoleClick = () => {
    const [uniquePoints, uniqueLines] = removeDuplicate(lines);
    console.log(uniquePoints);
    console.log(uniqueLines);
  };

  const handleResetClick = () => {
    setPoints([]);
    setLines([]);
    setGrid(grid.map((yValue) => yValue.map((xValue) => false)));
    setLastPoints([]);
    setShouldDeduplicate(false);
  };

  return (
    <div>
      <div>
        <p className="font-TAEBAEKmilkyway">지금 행성명: {planetId}</p>
        <p className="font-TAEBAEKmilkyway">
          지금 별자리명: {constellationName}
        </p>
        <p className="font-TAEBAEKmilkyway">
          지금 별자리설명: {constellationDescp}
        </p>
        <p className="font-TAEBAEKmilkyway">지금 보드사이즈: {boardSize}</p>
      </div>
      <div
        className={`flex h-full w-full items-center justify-center ${containerStyle}`}
      >
        <Stage width={stageSize} height={stageSize}>
          <Layer ref={linesAndPointsLayerRef}>
            {points.map((point, y) => (
              <Circle
                key={y}
                x={point.centerX}
                y={point.centerY}
                radius={5}
                fillRadialGradientStartRadius={0}
                fillRadialGradientEndRadius={5}
                fillRadialGradientColorStops={[0, "#FFD700", 1, "#FFFFFF"]}
                shadowBlur={5}
              />
            ))}

            {lines.map((line, y) => (
              <Line
                key={y}
                points={[line[1], line[0], line[3], line[2]]}
                stroke="#8B8680"
                shadowColor="#FFFFFF"
                shadowBlur={5}
                tension={1}
              />
            ))}
          </Layer>
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
                    stroke="#DDDDDD"
                    strokeWidth={1}
                    onTap={() => handleGridClick(y, x)}
                    zIndex={2}
                  />
                )),
              )}
          </Layer>
        </Stage>
      </div>
      <Button1
        className="font-TAEBAEKmilkyway"
        value="초기화"
        onClick={handleResetClick}
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
      <Button1
        className="font-TAEBAEKmilkyway"
        value="콘솔에 띄우기"
        onClick={handelConsoleClick}
      ></Button1>
    </div>
  );
};

export default GridCustomConstellation;
