const express = require('express');
const cors = require('cors');
const path = require('path');
const userController = require('./controllers/userController.js');
const headerController = require('./controllers/headerController.js');
const taskController = require('./controllers/taskController.js');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

/////// USER ROUTES
// new user
app.post('/users/newUser', userController.newUser, (req, res) => {
  return res.status(200).json(res.locals);
});
// user login
app.get('/users/login', userController.login, (req, res) => {
  return res.status(200).json(res.locals);
});

/////// HEADER ROUTES
// new header
app.post('/header/newHeader', headerController.newHeader, (req, res) => {
  return res.status(200).json(res.locals);
});
// get headers
app.post('/header/getAllHeaders', headerController.getHeader, (req, res) => {
  return res.status(200).json(res.locals);
});

/////// TASK ROUTES
// post task
app.post('/tasks/newTask', taskController.postTask, (req, res) => {
  return res.status(200).json(res.locals);
});
// get tasks
app.post('/tasks/getTasks', taskController.getTasks, (req, res) => {
  return res.status(200).json(res.locals);
});
// delete task
app.delete('/tasks/deleteTask', taskController.deleteTask, (req, res) => {
  return res.status(200).json(res.locals);
});

// get All headers and All Tasks
app.get('/all/getAll', headerController.getAll, (req, res) => {
  return res.status(200).json(res.locals);
});

//COULDN"T GET THIS FEATURE TO WORK WITH TIME RESTRAINTS
// change order (drag and drop)
// app.patch(
//   '/tasks/changeTaskOrder',
//   taskController.changeTaskOrder,
//   (req, res) => {
//     return res.status(200).json(res.locals);
//   }
// );

// change progress (not started, in progress, complete)
app.patch(
  '/tasks/changeTaskProgress',
  taskController.changeTaskProgress,
  (req, res) => {
    return res.status(200).json(res.locals);
  }
);
// change task
app.patch('/tasks/changeTask', taskController.changeTask, (req, res) => {
  return res.status(200).json(res.locals);
});

/////// UNKNOWN ROUTE HANDLER
app.use('/*', (req, res) => {
  return res.status(404).send('Request sent to unknown page');
});

/////// GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.stats).json(errorObj.message);
});

//////// PORT/SERVER
app.listen(PORT, () => {
  console.log(`listening on the port ${PORT}`);
});
module.exports = app;
