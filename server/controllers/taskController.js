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
/*
  const frontArray = [
    {
      _id: 10,
      task_order: 3,
    },
    {
      _id: 9,
      task_order: 2,
    },
    {
      _id: 11,
      task_order: 4,
    },
    {
      _id: 12,
      task_order: 5,
    },
    {
      _id: 13,
      task_order: 6,
    },
    {
      _id: 14,
      task_order: 7,
    },
  ];
  
  */
// change order AAAAAHHHHHHHHH!!!!!!
taskController.changeTaskOrder = async (req, res, next) => {
  try {
    // const responses = [];
    // async function loopQueries() {
    //   for (let i = 0; i < req.body.length; i++) {
    //     const query = {
    //       text: `UPDATE tasks SET task_order=$1 WHERE _id=$2 RETURNING _id;`,
    //       values: [req.body[i].new_taskOrder, req.body[i].task_id],
    //     };
    //     const response = await db.query(query.text, query.values);
    //     console.log('RESPONSE', response);
    //     responses.push(response);
    //   }
    // }
    // loopQueries();
    const responses = [];
    // await database query
    console.log('REQ.BODY', req.body);
    for (let i = 0; i < req.body.length; i++) {
      const query = {
        text: `UPDATE tasks SET task_order=$1 WHERE _id=$2 RETURNING _id;`,
        values: [req.body[i].new_taskOrder, req.body[i].task_id],
      };
      const response = await db.query(query.text, query.values);
      console.log('RESPONSE', response);
      responses.push(response);
    }
    console.log('RESPONSES ARRAY', responses);
    res.locals.changedOrder = responses;
    return next();
  } catch (err) {
    // do something w/ err
    return next({
      log: `Cannot get tasks. ERROR: ${err}`,
      message: { err: 'Error occurred in taskController.getTasks' },
    });
  }
};

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
