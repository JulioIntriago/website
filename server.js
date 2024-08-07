const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

// Endpoint para el formulario de contacto
app.post('/api/contact', (req, res) => {
  const formData = req.body;
  console.log('Form Data Received:', formData);

  // Aquí puedes procesar los datos del formulario, como guardarlos en una base de datos o enviar un correo electrónico

  res.status(200).send({ message: 'Form submitted successfully!' });
});

// Middleware para servir archivos estáticos de React
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
