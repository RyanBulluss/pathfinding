import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Cell = ({ toggleCell, yIdx, xIdx, cell, mouseDown, setMouseDown, toggleOneWall }) => {
  return (
    <div
      className='border flex justify-center items-center'
      onMouseOver={() => toggleCell(yIdx, xIdx)}
      onMouseDown={() => {
        if (!mouseDown) {
          toggleOneWall(yIdx, xIdx)
        }
      }}
      style={{ backgroundColor: cell.status === "wall" ? "black" :
          cell.status === "end" ? "" :
          cell.status === "searched" ? "yellow" :
          cell.status === "route" ? "green" :
         cell.status === "start" ? "" : "" }}  
    >
      {cell.status === "start" &&   <FontAwesomeIcon icon={faArrowRight} className="" />}
      {cell.status === "end" &&   <FontAwesomeIcon icon={faMapMarkerAlt} className="" />}
    </div>
  )
}

export default Cell