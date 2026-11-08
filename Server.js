const express = require('express')
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Servir los archivos estáticos de la carpeta public (HTML, CSS, JS) 
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal que entrega la interfaz visual con las 5 pestañas 
app.get('/', (req, res) => { 
 res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar servidor en el puerto 3000 
app.listen(PORT, function () { 
  console.log('Servidor activo en http://localhost:' + PORT);
 });