const db = require('../models/model');

const userController = {};

// post new user
userController.newUser = async (req, res, next) => {
  const query = {
    text: `INSERT INTO users (user_name, password) VALUES($1, $2) RETURNING _id;`,
    values: [req.body.user_name, req.body.password],
  };
  try {
    // await database query
    const response = await db.query(query.text, query.values);
    console.log(response.rows[0]._id);
    const user_id = response.rows[0]._id;
<<<<<<< HEAD
    res.locals.id = user_id;
=======
    res.locals.userId = user_id;
>>>>>>> dev
    return next();
  } catch (err) {
    // do something w/ err
    return next({
      log: `Cannot insert new user. ERROR: ${err}`,
      message: { err: 'Error occurred in userController.newUser' },
    });
  }
};

//  user login
userController.login = async (req, res, next) => {
  const query = {
    text: `SELECT _id FROM users WHERE user_name = $1 AND password = $2;`,
    values: [req.body.user_name, req.body.password],
  };
  try {
    // await database query
    const response = await db.query(query.text, query.values);
    console.log(response.rows[0]._id);
    const user_id = response.rows[0]._id;
<<<<<<< HEAD
    res.locals.id = user_id;
=======
    res.locals.userId = user_id;
>>>>>>> dev
    return next();
  } catch (err) {
    // do something w/ err
    return next({
      log: `Cannot login user. ERROR: ${err}`,
      message: { err: 'Error occurred in userController.login' },
    });
  }
};

module.exports = userController;
