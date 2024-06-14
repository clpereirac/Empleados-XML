const fs = require('fs');
const { DOMParser } = require('xmldom');

fs.readFile('empleados.xml', 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(data, 'application/xml');

    const empleados = xmlDoc.getElementsByTagName('empleado');

    for (let i = 0; i < empleados.length; i++) {
        const nombre = empleados[i].getElementsByTagName('nombre')[0].textContent;
        const puesto = empleados[i].getElementsByTagName('puesto')[0].textContent;
        console.log(`Nombre: ${nombre}, Puesto: ${puesto}`);
    }
});
