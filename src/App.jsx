import Nav from "./Nav";
import Cell from "./Cell";
import { createGrid } from "./utils";
import { useState } from "react";

function App() {
  const [state, setState] = useState(createGrid(20, 20));
  const [mouseDown, setMouseDown] = useState(false);
  const [checkPoints, setCheckPoints] = useState({start: {x:0, y:0}, end: {x:19, y:19}})

  function toggleCell(yIdx, xIdx) {
    if (!mouseDown) return;
    if (mouseDown === "clear" || "wall") toggleWall(yIdx, xIdx);
    if (mouseDown === "start" || "end") moveCheckpoint(yIdx, xIdx);

    
  }

  function toggleWall(yIdx, xIdx) {
    const newState = [...state];
    const status = newState[yIdx][xIdx].status
    if (status === "clear" || status === "wall") {
      newState[yIdx][xIdx].status = mouseDown;
    }
    setState(newState);
  }

  function moveCheckpoint(yIdx, xIdx) {
    const newState = [...state];
    const status = newState[yIdx][xIdx].status
    if (status === "clear" || status === "wall") {
      newState[yIdx][xIdx].status = mouseDown;
    }
    setState(newState);
  }

  function toggleOneWall(yIdx, xIdx, cell) {
    const newState = [...state];

    
    const status = newState[yIdx][xIdx].status
    if (status === "clear" || status === "wall") {
      newState[yIdx][xIdx].status = status === "clear" ? "wall" : "clear";
    }

    setState(newState);
  }

  return (
    <div
      className="min-h-[100vh] bg-slate-200"
      onMouseUp={() => setMouseDown(false)}
    >
      <Nav></Nav>
      <div className="flex justify-center items-center bg-slate-800 h-[90vh] select-none">
        <div
          className="grid grid-cols-20  h-[60vh] w-[60vh] bg-slate-400 items-stretch"
        >
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
