# Bienvenidos DWFS-COR-11!

Vamos a explicar cómo abordar el ejercicio de obtener datos desde la consola y grabarlos finalmente en un archivo de texto

Para ello necesitamos instalar dos dependencias en nuestro proyecto de node

> **Inquirer**
Es una muy interesante librería que nos ofrece una amplia lista de opciones con las cuales interactuar con el usuario desde la consola de comandos de node
En el [repositorio del creador](https://github.com/SBoudrias/Inquirer.js/blob/master/README.md) podremos obtener un amplio set de ejemplos de cada caso


> **fs**
Nos brinda todo lo necesario para acceder a nuestro sistema de archivos, ya sea explorar directorios y archivos, crear, modificar y eliminar, etc.

# Como enfrentar el ejercicio
Primero que nada, se requería obtener los datos desde la consola, con lo cual vamos a usar inquirer.
Finalmente, guardar los mismos en un archivo de texto, con lo cual vamos a recurrir a algunos de los métodos para escribir archivos que nos ofrece la librería

Primero que nada, tenemos muchas opciones y no todas son asíncronas, así que es importante investigar cuidadosamente las opciones que nos ofrece a fin de evitar problemas con datos faltantes.

Afortunadamente, una de ellas es writeFileSync que internamente resuelve el asincronismo y nos libera de esa responsabilidad usando promesas o async/await

o bien recurrir al método appendFileSync, que no requiere un flag

## Que son los flags?

Son indicadores que indican cómo vamos a trabajar con los archivos
Tenemos los siguientes
|Flag| Significado |
|--|--|
| **r** | Solo lectura, se lanza una excepción si el archivo no existe |
|**r+** | Permite lectura y escritura, se lanza una excepción si el archivo no existe|
|**rs**|Solo lectura en modo síncrono.|
|**rs+**|Permite lectura y escritura en modo síncrono. |
|||
|**w**|Solo lectura. Se crea el archivo si no existe, o se pisa si existe.|
|**wx**|Similar a 'w' pero falla si el archivo existe (previene sobre escritura).|
|**w+**|Lectura y escritura. Se crea el archivo si no existe, o se pisa si existe.|
|**wx+**|Similar a 'w+' pero falla si el archivo existe.|
|||
|**a**|Permite agregar contenido. Se crea el archivo si no existe.|
|**ax**|Similar a 'a' pero falla si el archivo existe.|
|**a+**|Permite lectura y agregado. Se crea el archivo si no existe.|
|**ax+**|Similar a 'a+' pero falla si el archivo existe.|

## Que son los encodings?
Tal como habíamos visto en el primer módulo, este nos permitía mostrar caracteres que no necesariamente forman parte de nuestro lenguaje, el más usual es utf8.

    fs.writeFileSync('archivoResultante.txt', ''ñññññ, { encoding:  'ascii' });
    fs.writeFileSync('archivoResultante.txt', ''ñññññ, { encoding:  'utf8' });
Si ejecutamos esas líneas y verificamos el contenido, dificilmente entendamos los símbolos que se almacenaron, no así con la segunda opción (que ni siquiera debería ser indicada porque es por default)

Las posibilidades son las siguientes
-   ascii
-   base64
-   hex
-   ucs2/ucs-2/utf16le/utf-16le
-   utf8/utf-8
-   binary/latin1 (ISO8859-1, latin1 only in node 6.4.0+)