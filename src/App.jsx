import Nav from "./Nav";
import Cell from "./Cell";
import { createGrid, directions } from "./utils";
import { useEffect, useState } from "react";

function App() {
  const [state, setState] = useState(createGrid(20, 20));
  const [mouseDown, setMouseDown] = useState(false);
  const [checkPoints, setCheckPoints] = useState({
    start: { x: 0, y: 0 },
    end: { x: 19, y: 19 },
  });
  const [paths, setPaths] = useState([]);
  const [finding, setFinding] = useState(false);
  const [showingPath, setShowingPath] = useState(false);

  function resetState() {
    setState(createGrid(20, 20));
    setMouseDown(false);
    setCheckPoints({
      start: { x: 0, y: 0 },
      end: { x: 19, y: 19 },
    });
    setPaths([]);
    setFinding(false);
    setShowingPath(false);
  }
  
  function toggleCell(yIdx, xIdx) {
    if (!mouseDown) return;
    if (mouseDown === "clear" || mouseDown === "wall") toggleWall(yIdx, xIdx);
    if (mouseDown === "start" || mouseDown === "end")
      moveCheckpoint(yIdx, xIdx);
  }

  function toggleWall(yIdx, xIdx) {
    const newState = [...state];
    const status = newState[yIdx][xIdx].status;
    if (status === "clear" || status === "wall") {
      newState[yIdx][xIdx].status = mouseDown;
    }
    setState(newState);
  }

  function moveCheckpoint(yIdx, xIdx) {
    const newState = [...state];
    const status = newState[yIdx][xIdx].status;
    if (status === "clear" || status === "wall") {
      newState[yIdx][xIdx].status = mouseDown;
    }
    if (status === "start" || status === "end") return;
    newState[checkPoints[mouseDown].y][checkPoints[mouseDown].x].status =
      "clear";
    setCheckPoints((points) => {
      const newPoints = { ...points };
      newPoints[mouseDown] = { x: xIdx, y: yIdx };
      return newPoints;
    });
    setState(newState);
  }

  function toggleOneWall(yIdx, xIdx) {
    const newState = [...state];
    const status = newState[yIdx][xIdx].status;

    if (status === "clear" || status === "wall") {
      newState[yIdx][xIdx].status = status === "clear" ? "wall" : "clear";
    }

    setMouseDown(newState[yIdx][xIdx].status);
    setState(newState);
  }

  function findPath() {
    if (paths.length === 0) {
      return setPaths([[checkPoints.start]]);
    }
    if (paths.length === 1 && paths[0] === false) {
      return console.log("Couldn't find route");
    }

    let newPaths = [];
    let newState = [...state];
    let foundPath = false;

    paths.forEach((path) => {
      directions.forEach((dir) => {
        const currentPos = path[path.length - 1];
        const newPos = { y: currentPos.y + dir.y, x: currentPos.x + dir.x };
        if (
          newPos.y < state.length &&
          newPos.y >= 0 &&
          newPos.x < state[0].length &&
          newPos.x >= 0 &&
          !foundPath
        ) {
          const status = state[newPos.y][newPos.x].status;
          if (status === "end") {
            foundPath = [...path, newPos];
            // setFinding(false);
          }
          if (status === "clear") {
            newPaths.push([...path, newPos])
            newState[newPos.y][newPos.x].status = "searched";
          }
        }
      });

      if (foundPath) {
        setPaths([foundPath]);
        setShowingPath(foundPath);
        // foundPath.forEach((p, idx) => {
        //   if (idx !== 0 && idx !== foundPath.length - 1)
        //   newState[p.y][p.x].status = "route"
        // })
        setFinding(false)
        console.log("Path found")
      } else {
        setState(newState)
        setPaths(newPaths);
      }
    });
  }

  useEffect(() => {
    if (!finding) return;
    const interval = setInterval(() => {
      findPath();
    }, [50]);

    return () => {
      clearInterval(interval);
    };
  }, [paths, state, finding]);

  useEffect(() => {
    if (!showingPath) return;
    const interval = setInterval(() => {
      if (showingPath.length < 3) return setShowingPath(false)
      const p = showingPath[1];
      const newState = [...state];
      newState[p.y][p.x].status = "route";
      setState(newState);
      setShowingPath(sp => {
        const newPath = [...showingPath];
        newPath.splice(1 , 1);
        return newPath;
      })
      
    }, [10]);

    return () => {
      clearInterval(interval);
    };
  }, [paths, state, finding, showingPath]);

  return (
    <div
      className="min-h-[100vh] bg-slate-200"
      onMouseUp={() => setMouseDown(false)}
    >
      <Nav setFinding={setFinding} resetState={resetState}></Nav>
      <div className="flex justify-center items-center bg-slate-800 h-[90vh] select-none">
        <div className="grid grid-cols-20  h-[60vh] w-[60vh] bg-slate-400 items-stretch">
          {state.map((row, yIdx) =>
            row.map((cell, xIdx) => (
              <Cell
                toggleCell={toggleCell}
                yIdx={yIdx}
                xIdx={xIdx}
                cell={cell}
                mouseDown={mouseDown}
                setMouseDown={setMouseDown}
                toggleOneWall={toggleOneWall}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
