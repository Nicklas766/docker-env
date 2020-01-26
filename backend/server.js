import api from './routes/api';
import express from 'express';
import cors from 'cors';
const server = express();

const PORT = 3000;

server.use(cors());
server.use('/api', api);

server.get('/', (req, res) => res.send('This is the API!'));

server.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
