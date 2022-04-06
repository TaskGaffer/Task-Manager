import React, {useState} from 'react';
import Task from '../components/Task';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';


const TasksContainer = ({ title, id, tasks }) => {
  tasks.sort((a, b) => a.task_order - b.task_order)
  const [column, setColumn] = useState(tasks)

  const taskList = []
  column.forEach((task, index) => {
    taskList.push(
      <Task key={index} id={task._id} taskText={task.task} progress={task.progress} position={index} />
    )
  });

  const onDragEndHandler = ({ source, destination }) => {

    // Make sure we have a valid destination
    if (destination === undefined || destination === null) return null;

    //if the index is the same, the item isn't moving
    if ( destination.index === source.index) return null;

    // make a new list without the dragged item
    const newColumn = column.filter((_, index) => index !== source.index);
    // Then insert the item at the right location
    newColumn.splice(destination.index, 0, column[source.index]);

    //reset task_order
      newColumn.forEach((task,index) => {
        task.task_order = index
      })
    console.log(newColumn);
    // Update the state
    return setColumn(newColumn);
  }

  return (
    <DragDropContext onDragEnd={onDragEndHandler}>
    <Droppable droppableId={`${title}${id}`}>
      {(provided) => (
        <div className='taskColumn' {...provided.droppableProps} ref={provided.innerRef}>
          <h1 className='columnTitle'>{title}</h1>
          <div className='taskList'>
            {taskList}
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
    </DragDropContext>
  )
}

export default TasksContainer;