import React from 'react'

const Cell = ({ toggleWall, yIdx, xIdx, cell }) => {
  return (
    <div
      className='border'
      onMouseOver={() => toggleWall(yIdx, xIdx)}
      style={{ backgroundColor: cell.status === "wall" ? "black" : "" }}  
    ></div>
  )
}

export default Cell