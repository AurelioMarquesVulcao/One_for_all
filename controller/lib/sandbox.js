const diskstats = require('diskstats');


(async () => {
  //callback
  //callback
  await diskstats.check('.', (err, results) => {
    console.log("livre", results);
    console.log("toatal", Math.round(results.total / 1000000));
    console.log("usado", Math.round(results.used / 1000000));
    console.log("usado", Math.round(results.free / 1000000));
    console.log("% usado", Math.round((results.used / results.total)*100));
  });


})()
