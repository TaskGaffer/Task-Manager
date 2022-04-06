import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const Task = ({ id, taskText, progress, position }) => {

  return (
    <Draggable key={position} draggableId={`${position}${taskText}`} index={position}>
      {(provided) => (
        <div ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}>
          <div className='taskCard'>
            {taskText}
          </div>
        </div>
      )}
    </Draggable>
  )
}


export default Task;