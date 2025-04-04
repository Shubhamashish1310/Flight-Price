import express from 'express';
import {PORT} from './config/index.js';
import apiRoutes from './routes/index.js';
const app = express();


app.get('/', (req, res) => {
    res.send('hello shubham');
});
app.use('/api',apiRoutes)
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});