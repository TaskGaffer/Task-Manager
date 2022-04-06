const db = require('../models/model');

const headerController = {};

<<<<<<< HEAD
// get headers
headerController.getHeader = async (req, res, next) => {
  try {
    // await database query
  } catch (err) {
    // do something w/ err
    return next({
      log: `Cannot get headers. ERROR: ${err}`,
      message: { err: 'Error occurred in headerController.getHeader' },
    });
  }
};

// new header
headerController.newHeader = async (req, res, next) => {
  try {
    // await database query
  } catch (err) {
    // do something w/ err
    return next({
      log: `Cannot add new header. ERROR: ${err}`,
=======
// new header
headerController.newHeader = async (req, res, next) => {
  const query = {
    text: `INSERT INTO header (header, user_id) VALUES($1, $2) RETURNING _id;`,
    values: [req.body.header, req.body.user_id],
  };
  try {
    // await database query
    const response = await db.query(query.text, query.values);
    console.log(response.rows[0]._id);
    const header_id = response.rows[0]._id;
    res.locals.headerId = header_id;
    return next();
  } catch (err) {
    // do something w/ err
    return next({
      log: `Cannot insert new header. ERROR: ${err}`,
>>>>>>> dev
      message: { err: 'Error occurred in headerController.newHeader' },
    });
  }
};
<<<<<<< HEAD
=======

// get headers
headerController.getHeader = async (req, res, next) => {
  const query = {
    text: `SELECT * FROM header WHERE user_id = $1;`,
    values: [req.body.user_id],
  };
  try {
    // await database query
    const response = await db.query(query.text, query.values);
    console.log(response.rows);
    const allUserHeaders = response.rows;
    res.locals.headers = allUserHeaders;
    return next();
  } catch (err) {
    // do something w/ err
    return next({
      log: `Cannot get headers. ERROR: ${err}`,
      message: { err: 'Error occurred in headerController.getHeader' },
    });
  }
};
>>>>>>> dev

module.exports = headerController;
