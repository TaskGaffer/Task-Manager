const { Pool } = require('pg');

const myURI =
  'postgres://nqyrosrm:xqLVcaqnAO5L1NyfE9c4I3LyHD14FFH9@ruby.db.elephantsql.com/nqyrosrm';

const pool = new Pool({
  connectionString: myURI,
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
