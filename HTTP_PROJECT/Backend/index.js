const express = require('express');
const cors = require('cors');
const router = require('./Routes');
const DbConnection = require ("./config")
const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.listen(3000, () => {
  console.log('Server running on port 3000');
});

DbConnection.authenticate()
  .then(() => console.log('users database  connected'))
  .catch(err => console.log('DB error:', err));
  DbConnection.sync();

