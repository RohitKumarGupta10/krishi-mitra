const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const farmersRoutes = require('./routes/farmers');
const productsRoutes = require('./routes/products');
const equipmentRoutes = require('./routes/equipment');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/farmers', farmersRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/equipment', equipmentRoutes);

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
