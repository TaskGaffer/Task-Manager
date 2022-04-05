const db = require('../models/model');

const headerController = {};

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
      message: { err: 'Error occurred in headerController.newHeader' },
    });
  }
};

module.exports = headerController;
