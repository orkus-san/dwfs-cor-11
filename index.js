const inquirer = require('inquirer');
const fs = require('fs');

var questions = [{
    type: 'input',
    name: 'name',
    message: "Cual es tu nombre?",
}]

inquirer.prompt(questions).then(answers => {
    let nombre = answers['name'];

    let datos = `Nombre: ${nombre}
*********************\n`

    //fs.writeFileSync('archivoResultante.txt', datos); //sobreescribe el archivo
    fs.writeFileSync('archivoResultante.txt', datos, { flag: "a+", encoding: 'ascii' }); //Si existe, lo agrega al final
    //fs.appendFileSync('archivoResultante.txt', datos); //Si existe, lo agrega al final

})