const inquirer = require('inquirer');
const fs = require('fs');

var questions = [{
        type: 'input',
        name: 'name',
        message: "Cual es tu nombre?",
    },
    {
        type: 'input',
        name: 'age',
        message: "Cuantos años tienes?",
    },
    {
        type: 'list',
        name: 'accion',
        message: 'Que acción deseas realizar?',
        choices: [
            'Ordenar una pizza',
            'Hacer una reservación',
            new inquirer.Separator(),
            'Consutar horarios de apertura',
            {
                name: 'Contactar a soporte',
                disabled: 'Opción no disponible momentáneamente'
            },
            'Hablar con un operador'
        ]
    },
    {
        type: 'password',
        message: 'Ingrese una password',
        name: 'password',
        mask: '*'
    },
    {
        type: 'checkbox',
        message: 'Seleccionar entre las opciones disponibles',
        name: 'ingredientes',
        choices: [
            new inquirer.Separator(' = Fiambres = '),
            {
                name: 'Salame'
            },
            {
                name: 'Jamón'
            },
            {
                name: 'Panceta'
            },
            new inquirer.Separator(' = Quesos = '),
            {
                name: 'Mozzarella',
                checked: true
            },
            {
                name: 'Cheddar'
            },
            {
                name: 'Parmesano'
            },
            new inquirer.Separator(' = Adicionales ='),
            {
                name: 'Champignones'
            },
            {
                name: 'Tomate'
            },
            new inquirer.Separator(' = Ingredientes extras = '),
            {
                name: 'Ananá'
            },
            {
                name: 'Anchoas',
                disabled: 'Sin stock'
            },
            {
                name: 'Aceitunas'
            }
        ],
        validate: function(answer) {
            if (answer.length < 1) {
                return 'Debes seleccionar la menos una opción.';
            }

            return true;
        }
    }
]

inquirer.prompt(questions).then(answers => {
    let nombre = answers['name'];
    let edad = answers['age'];
    let accion = answers['accion'];
    let password = answers['password'];
    let opciones = answers['ingredientes'];

    let datosExtendidos = `Nombre: ${nombre}
Edad: ${edad}
Acción: ${accion}
Password: ${password}
Opciones: ${opciones}
*********************\n`

    //fs.writeFileSync('archivoResultante.txt', datos); //sobreescribe el archivo
    fs.writeFileSync('archivoResultante.txt', datosExtendidos, { flag: "a+" }); //Si existe, lo agrega al final
    //fs.appendFileSync('archivoResultante.txt', datos); //Si existe, lo agrega al final

})