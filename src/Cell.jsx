import React from 'react'

const Cell = ({ toggleWall, yIdx, xIdx, cell, mouseDown, setMouseDown, toggleOneWall }) => {
  return (
    <div
      className='border'
      onMouseOver={() => toggleWall(yIdx, xIdx)}
      onMouseDown={() => {
        if (!mouseDown) {
          toggleOneWall(yIdx, xIdx, cell)
          setMouseDown(cell.status);
        }
      }}
      style={{ backgroundColor: cell.status === "wall" ? "black" : "" }}  
    ></div>
  )
}

export default Cell