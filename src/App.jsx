import Nav from "./Nav";
import Cell from "./Cell";
import { createGrid } from "./utils";
import { useState } from "react";

function App() {
  const [state, setState] = useState(createGrid(20, 20));

  return (
    <div className="min-h-[100vh] bg-slate-200">
      <Nav></Nav>
      <div className="flex justify-center items-center bg-slate-800 h-[90vh]">
        <div className="grid grid-cols-20  h-[60vh] w-[60vh] bg-slate-400 items-stretch">
          {state.map((row, yIdx) => row.map((cell, xIdx) => <Cell />))}
        </div>
      </div>
    </div>
  );
}

export default App;
