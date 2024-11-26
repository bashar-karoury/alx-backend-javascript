const express = require('express');
const route = require('./routes/index');

const PORT = 1245;
const app = express();
app.use('/', route);
app.listen(PORT);
export default app;
