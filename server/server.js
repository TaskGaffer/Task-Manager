const express = require('express');
const cors = require('cors');
const path = require('path');
const userController = require('./controllers/userController.js');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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
// get headers
app.get('/header', (req, res) => {
  return res.status(200).json(res.locals);
});
// new header
app.post('/header/newHeader', (req, res) => {
  return res.status(200).json(res.locals);
});

/////// TASK ROUTES
// get tasks
app.get('/tasks', (req, res) => {
  return res.status(200).json(res.locals);
});
// post task
app.post('/tasks/newTask', (req, res) => {
  return res.status(200).json(res.locals);
});
// delete task
app.delete('/tasks/deleteTask', (req, res) => {
  return res.status(200).json(res.locals);
});
// change order (drag and drop)
app.put('/tasks/order', (req, res) => {
  return res.status(200).json(res.locals);
});
// change progress (not started, in progress, complete)
app.put('/tasks/progress', (req, res) => {
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
