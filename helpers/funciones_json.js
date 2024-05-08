const fs = require('fs');

// Función para leer datos desde el archivo JSON
const leerDatos = () => {
    try {
        const datosJSON = fs.readFileSync('db/data.json', 'utf8');
        return JSON.parse(datosJSON);
    } catch (error) {
        console.error('Error al leer datos:', error);
        return null;
    }
};

// Función para escribir datos en el archivo JSON
const escribirDatos = (datos) => {
    try {
        // Si el archivo no existe, se creará automáticamente
        fs.writeFileSync('db/data.json', JSON.stringify(datos, null, 4));
        console.log('Datos escritos correctamente en', 'db/data.json');
    } catch (error) {
        console.error('Error al escribir datos:', error);
    }
};


module.exports = {
    leerDatos,
    escribirDatos,
}