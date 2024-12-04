import React from 'react'

const Cell = ({ toggleCell, yIdx, xIdx, cell, mouseDown, setMouseDown, toggleOneWall }) => {
  return (
    <div
      className='border'
      onMouseOver={() => toggleCell(yIdx, xIdx)}
      onMouseDown={() => {
        if (!mouseDown) {
          toggleOneWall(yIdx, xIdx)
        }
      }}
      style={{ backgroundColor: cell.status === "wall" ? "black" :
          cell.status === "end" ? "red" :
          cell.status === "searched" ? "yellow" :
          cell.status === "route" ? "green" :
         cell.status === "start" ? "blue" : "" }}  
    ></div>
  )
}

export default Cell