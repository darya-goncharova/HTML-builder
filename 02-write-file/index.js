const readline = require('readline');
const fs = require('fs');
const { stdin: input, stdout: output } = require('process');
const path = require('path');

const rl = readline.createInterface({ input, output });

rl.question('What do you think of Node.js? ', (answer) => {
  // TODO: Log the answer in a database
  console.log(
    `Thank you for your valuable feedback: ${answer}`
  );
  let toWrite = answer;

  fs.writeFile(path.join(__dirname, 'text.txt'), toWrite, function(error){
    if(error) throw error;
    console.log('Данные успешно записаны записать файл');
  });
  rl.close();
});