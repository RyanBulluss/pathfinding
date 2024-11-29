import Nav from "./Nav";
import Cell from "./Cell";
import { createGrid } from "./utils";
import { useState } from "react";

function App() {
  const [state, setState] = useState(createGrid(20, 20));
  const [mouseDown, setMouseDown] = useState(false);

  function toggleWall(yIdx, xIdx) {
    if (!mouseDown) return;
    const newState = [...state];
    newState[yIdx][xIdx].status = mouseDown;
    setState(newState);
  }

  function toggleOneWall(yIdx, xIdx, cell) {
    const newState = [...state];
    newState[yIdx][xIdx].status = cell.status === "clear" ? "wall" : "clear";
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
                toggleWall={toggleWall}
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
