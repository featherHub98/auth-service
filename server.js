const express = require('express');
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT || 2000;
const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});