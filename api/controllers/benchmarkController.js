'use strict';
const fs = require('fs');
exports.update_time = function(req, res) {
    console.log('Time reached');
    fs.appendFileSync('../../benchmark.csv', req.params.time);
    res.send('Time found')
  };