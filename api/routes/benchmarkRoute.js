'use strict';
module.exports = function(app) {
  var benchmark = require('../controllers/benchmarkController');

  app.route('/benchmark/:time')
    .put(benchmark.update_time);
};