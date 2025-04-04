import express from 'express';
import {serverConfig,Logger} from './config/index.js';
import apiRoutes from './routes/index.js';
const app = express();


app.get('/', (req, res) => {
    res.send('hello shubham');
});
app.use('/api',apiRoutes)
app.listen(serverConfig.PORT, () => {
    // Logger.logger.info(`Server is running on port ${serverConfig.PORT}`);
    console.log(`Server is running on port ${serverConfig.PORT}`);
    console.log(`http://localhost:${serverConfig.PORT}`);
});