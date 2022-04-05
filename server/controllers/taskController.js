const db = require('../models/model');

const taskController = {};

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
    });
  }
};

// delete task
taskController.deleteTask = async (req, res, next) => {
  try {
    // await database query
  } catch (err) {
    // do something w/ err
    return next({
      log: `Cannot delete task. ERROR: ${err}`,
      message: { err: 'Error occurred in taskController.deleteTask' },
    });
  }
};

// change order
taskController.changeTaskOrder = async (req, res, next) => {
  try {
    // await database query
  } catch (err) {
    // do something w/ err
    return next({
      log: `Cannot change task order. ERROR: ${err}`,
      message: { err: 'Error occurred in taskController.changeTaskOrder' },
    });
  }
};

// change progress
taskController.changeTaskProgress = async (req, res, next) => {
  try {
    // await database query
  } catch (err) {
    // do something w/ err
    return next({
      log: `Cannot change task progress. ERROR: ${err}`,
      message: { err: 'Error occurred in taskController.changeTaskProgress' },
    });
  }
};

module.exports = taskController;
