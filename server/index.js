/* eslint-disable no-console */
import express from 'express';
import os from 'os';

const port = process.env.PORT || 8080;
const host = 'localhost';

const app = express();

app.use(express.static('dist'));

app.get('/api/getUsername', (req, res) =>
  res.send({ username: os.userInfo().username })
);

app.listen({ host, port }, () =>
  console.log(`Listening to ${host} on port ${port}!`)
);
