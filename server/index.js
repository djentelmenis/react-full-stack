/* eslint-disable no-console */
import express from 'express';
import os from 'os';

const DEFAULT_PORT = 8080;
const PORT = process.env.PORT || DEFAULT_PORT;
const HOST = 'localhost';

const app = express();

app.use(express.static('dist'));

app.get('/api/getUsername', (req, res) =>
  res.send({ username: os.userInfo().username })
);

app.listen({ HOST, PORT }, () =>
  console.log(`Listening to ${HOST} on port ${PORT}!`)
);
