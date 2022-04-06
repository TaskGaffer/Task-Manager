const db = require('../models/model');

const taskController = {};

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
    });
  }
};

// delete task
taskController.deleteTask = async (req, res, next) => {
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
    });
  }
};

// // change order AAAAAHHHHHHHHH!!!!!! COULDN'T GET THIS TO WORK, MOVING ON DUE TO TIME RESTRAINTS
// taskController.changeTaskOrder = async (req, res, next) => {
//   try {
//     /*
//      */
//     const responses = [];
//     // await database query
//     console.log('REQ.BODY', req.body);
//     for (let i = 0; i < req.body.length; i++) {
//       const query = `UPDATE tasks SET task_order=${req.body[i].new_taskOrder} WHERE _id=${req.body[i].task_id} RETURNING _id;`;
//       const response = await db.query(query);
//       console.log('RESPONSE', response);
//       responses.push(response);
//     }
//     console.log('RESPONSES ARRAY', responses);
//     res.locals.changedOrder = responses;
//     return next();
//   } catch (err) {
//     // do something w/ err
//     return next({
//       log: `Cannot get tasks. ERROR: ${err}`,
//       message: { err: 'Error occurred in taskController.getTasks' },
//     });
//   }
// };

// change progress
taskController.changeTaskProgress = async (req, res, next) => {
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
    });
  }
};

module.exports = taskController;
