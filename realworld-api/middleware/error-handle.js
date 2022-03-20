const util = require('util');

module.exports = () => (err, req, res, next) => {
  res.status(500).json({
    // err: err.message
    err: util.format(err)
  });
};
