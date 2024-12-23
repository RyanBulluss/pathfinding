import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Cell = ({ toggleCell, yIdx, xIdx, cell, mouseDown, setMouseDown, toggleOneWall }) => {
  return (
    <div
      className='border flex justify-center items-center text-white'
      onMouseOver={() => toggleCell(yIdx, xIdx)}
      onMouseDown={() => {
        if (!mouseDown) {
          toggleOneWall(yIdx, xIdx)
        }
      }}
      style={{ backgroundColor: cell.status === "wall" ? "black" :
          cell.status === "end" ? "green" :
          cell.status === "searched" ? "yellow" :
          cell.status === "route" ? "green" :
          cell.status === "start" ? "green" : "" }}  
    >
      <div className='h-0 flex justify-center items-center'>
      {cell.status === "start" &&   <FontAwesomeIcon icon={faArrowRight} className="" />}
      {cell.status === "end" &&   <FontAwesomeIcon icon={faMapMarkerAlt} className="" />}
      </div>
    </div>
  )
}

export default Cell