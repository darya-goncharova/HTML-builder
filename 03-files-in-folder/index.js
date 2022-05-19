const fs = require('fs');
const path = require('path');


fs.readdir(path.join(__dirname, 'secret-folder'), 
  (err, files) => {
    console.log("Файлы в папке secret-folder:");
    if (err)
      console.log(err);
    else {
      files.forEach(file => {
        process.stdout.write(`${file.split('.').slice(0, -1).join('.')},`);
        process.stdout.write(`${path.extname(file)},`);
        
        // console.log(file);
        // console.log(path.extname(file));
        // console.log(file.size);
      });
    }});



const convertBytes = function(bytes) {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes == 0) {
    return 'n/a';
  }
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  if (i == 0) {
    return bytes + ' ' + sizes[i];
  }
  return (bytes / Math.pow(1024, i)).toFixed(1) + ' ' + sizes[i];
} ;



fs.stat(path.join(__dirname, 'secret-folder'),
  (err, stats)=> {
    if (err) throw err;
    console.log(stats.size);
  });
