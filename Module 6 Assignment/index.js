const express = require('express');
const app = express();
const apiRoutes = require('./src/routes/api');

app.use(express.json());

app.use('/api', apiRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
