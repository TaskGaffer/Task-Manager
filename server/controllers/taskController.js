const db = require('../models/model');

const taskController = {};

<<<<<<< HEAD
// get tasks
taskController.getTasks = async (req, res, next) => {
  try {
    // await database query
  } catch (err) {
    // do something w/ err
    return next({
      log: `Cannot get tasks. ERROR: ${err}`,
      message: { err: 'Error occurred in taskController.getTasks' },
    });
  }
};

// post task
taskController.postTask = async (req, res, next) => {
  try {
    // await database query
  } catch (err) {
    // do something w/ err
    return next({
      log: `Cannot post task. ERROR: ${err}`,
      message: { err: 'Error occurred in taskController.postTask' },
=======
// post task
taskController.postTask = async (req, res, next) => {
  const query = {
    text: `INSERT INTO tasks (header_id, task, task_order, progress) VALUES($1, $2, $3, $4) RETURNING _id;`,
    values: [
      req.body.header_id,
      req.body.task,
      req.body.task_order,
      req.body.progress,
    ],
  };
  try {
    // await database query
    const response = await db.query(query.text, query.values);
    console.log(response.rows[0]._id);
    const task_id = response.rows[0]._id;
    res.locals.taskId = task_id;
    return next();
  } catch (err) {
    // do something w/ err
    return next({
      log: `Cannot insert new header. ERROR: ${err}`,
      message: { err: 'Error occurred in headerController.newHeader' },
    });
  }
};

// get tasks
taskController.getTasks = async (req, res, next) => {
  const query = {
    text: `SELECT * FROM tasks WHERE header_id=$1;`,
    values: [req.body.header_id],
  };
  try {
    // await database query
    const response = await db.query(query.text, query.values);
    console.log(response.rows);
    const allTasks = response.rows;
    res.locals.tasks = allTasks;
    return next();
  } catch (err) {
    // do something w/ err
    return next({
      log: `Cannot get tasks. ERROR: ${err}`,
      message: { err: 'Error occurred in taskController.getTasks' },
>>>>>>> dev
    });
  }
};

// delete task
taskController.deleteTask = async (req, res, next) => {
<<<<<<< HEAD
  try {
    // await database query
  } catch (err) {
    // do something w/ err
    return next({
      log: `Cannot delete task. ERROR: ${err}`,
      message: { err: 'Error occurred in taskController.deleteTask' },
=======
  const query = {
    text: `DELETE FROM tasks WHERE _id=$1 RETURNING _id;`,
    values: [req.body.task_id],
  };
  try {
    // await database query
    const response = await db.query(query.text, query.values);
    console.log(response.rows[0]._id);
    const task_id = response.rows[0]._id;
    res.locals.deletedTaskId = task_id;
    return next();
  } catch (err) {
    // do something w/ err
    return next({
      log: `Cannot get tasks. ERROR: ${err}`,
      message: { err: 'Error occurred in taskController.getTasks' },
>>>>>>> dev
    });
  }
};

<<<<<<< HEAD
// change order
taskController.changeTaskOrder = async (req, res, next) => {
  try {
    // await database query
  } catch (err) {
    // do something w/ err
    return next({
      log: `Cannot change task order. ERROR: ${err}`,
      message: { err: 'Error occurred in taskController.changeTaskOrder' },
=======
// change order AAAAAHHHHHHHHH!!!!!!
taskController.changeTaskOrder = async (req, res, next) => {
  const query = {
    text: `UPDATE tasks SET task_order=$1 WHERE _id=$2 RETURNING _id;`,
    values: [req.body.new_progress, req.body.task_id],
  };
  try {
    // await database query
    const response = await db.query(query.text, query.values);
    console.log(response.rows[0]._id);
    const task_id = response.rows[0]._id;
    res.locals.taskId = task_id;
    return next();
  } catch (err) {
    // do something w/ err
    return next({
      log: `Cannot get tasks. ERROR: ${err}`,
      message: { err: 'Error occurred in taskController.getTasks' },
>>>>>>> dev
    });
  }
};

// change progress
taskController.changeTaskProgress = async (req, res, next) => {
<<<<<<< HEAD
  try {
    // await database query
  } catch (err) {
    // do something w/ err
    return next({
      log: `Cannot change task progress. ERROR: ${err}`,
      message: { err: 'Error occurred in taskController.changeTaskProgress' },
=======
  const query = {
    text: `UPDATE tasks SET progress=$1 WHERE _id=$2 RETURNING _id;`,
    values: [req.body.new_progress, req.body.task_id],
  };
  try {
    // await database query
    const response = await db.query(query.text, query.values);
    console.log(response.rows[0]._id);
    const task_id = response.rows[0]._id;
    res.locals.taskId = task_id;
    return next();
  } catch (err) {
    // do something w/ err
    return next({
      log: `Cannot get tasks. ERROR: ${err}`,
      message: { err: 'Error occurred in taskController.getTasks' },
    });
  }
};

// change task
taskController.changeTask = async (req, res, next) => {
  const query = {
    text: `UPDATE tasks SET task=$1 WHERE _id=$2 RETURNING _id;`,
    values: [req.body.new_task, req.body.task_id],
  };
  try {
    // await database query
    const response = await db.query(query.text, query.values);
    console.log(response.rows[0]._id);
    const task_id = response.rows[0]._id;
    res.locals.taskId = task_id;
    return next();
  } catch (err) {
    // do something w/ err
    return next({
      log: `Cannot get tasks. ERROR: ${err}`,
      message: { err: 'Error occurred in taskController.getTasks' },
>>>>>>> dev
    });
  }
};

module.exports = taskController;
