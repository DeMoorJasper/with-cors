const cors = require("cors");

module.exports = (callback, options = {}) => {
  return (req, res) =>
    cors(options)(req, res, () => {
      callback(req, res);
    });
};
