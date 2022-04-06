import React, {useState} from 'react';
import Task from '../components/Task';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';

const TasksContainer = ({ title, id, tasks, data, setData }) => {
  tasks.sort((a, b) => a.task_order - b.task_order)
  const [column, setColumn] = useState(tasks)
  const [addTask, setAddTask] = useState('');

  

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
  const addTaskHandler = () => {
    const changeColumn = data.find((el) => el.header_id === id)
    const indexChange = data.indexOf(changeColumn)
    const newData = data;
    newData[indexChange].tasks.push({
      _id: newData[indexChange].tasks.length,
      task: addTask,
      task_order: newData[indexChange].tasks.length,
      progress: 'incomplete'
    })
    setAddTask('')
    setData([...newData])
  }

  const taskInputHandler = (e) => {
    setAddTask(e.target.value)
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
            <div className='addTask'>
            <TextField size='small'
              value={addTask}
              onChange={taskInputHandler}
            />
              <Button size='small' onClick={addTaskHandler} style={{ fontSize: '10px' }}>Add Task</Button>
          </div>
        </div>
      )}
    </Droppable>
    </DragDropContext>
  )
}

export default TasksContainer;