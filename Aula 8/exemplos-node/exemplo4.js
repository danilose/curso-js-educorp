var fs = require('fs');

fs.appendFile('exemplo3.txt', ' Santos',function (err) {
  if (err) throw err;
  console.log('gravação feita');
});

fs.writeFile('exemplo4.txt', ' Santos',function (err) {
  if (err) throw err;
  console.log('gravação feita');
});
