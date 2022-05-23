const fs = require('fs');
const fsPromises = fs.promises;


fsPromises.mkdir('./files-copy').then(function() {
  fs.copyFile('../04-copy-directory/files/', '../04-copy-directory/files-copy/', (err) => {
    if (err) throw err;
    console.log('source.txt was copied to destination.txt');
  });
}
);
