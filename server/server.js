const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// UNKNOWN ROUTE HANDLER
app.use('/*', (req, res) =>
  res.status(404).send('Request sent to unknown page')
);

// GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occured' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.stats).json(errorObj.message);
});

// PORT/SERVER
app.listen(PORT, () => {
  console.log(`listening on the port ${PORT}`);
});
module.exports = app;
