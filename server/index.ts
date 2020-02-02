import express from 'express';
import os from 'os';
import path from 'path';

const STATIC_PATH = path.join('dist', 'app');
const DEFAULT_PORT = 8080;
const PORT = process.env.PORT || DEFAULT_PORT;
const HOST = 'localhost';

const app = express();

app.use(express.static(STATIC_PATH));

app.get('/api/getUsername', (_req, res) => res.send({ username: os.userInfo().username }));

app.listen({ host: HOST, port: PORT }, () =>
  // eslint-disable-next-line no-console
  console.log(`Listening to ${HOST} on port ${PORT}!`)
);
