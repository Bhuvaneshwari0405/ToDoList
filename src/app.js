const express = require('express');
require('./db/mongo');
const todoRouter = require('./routes/todo');
const authRouter = require('./routes/auth');
const app = express();
const PORT = 3000;
app.use(express.json());
app.use('/todo', todoRouter);
app.use('/auth', authRouter);

app.listen(PORT, () => {    
    console.log(`Server is running on :${PORT}`);
});