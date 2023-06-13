const express = require('express');
const app = express();
var cors = require('cors')

app.use(cors())

// Serve static files
app.use(express.static('public'));

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
