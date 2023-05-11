const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:3000', // Reemplaza esto con la URL de tu aplicación de Next.js
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

app.use(cors(corsOptions));