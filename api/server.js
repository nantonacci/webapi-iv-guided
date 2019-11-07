const express = require('express');
const helmet = require('helmet');

const Shoutouts = require('../data/shoutouts-model.js');

const server = express();

server.use(helmet());
server.use(express.json());

// server.get('/', (req, res) => {
//   Shoutouts.find()
//   .then(shoutouts => {
//     res.status(200).json(shoutouts);
//   })
//   .catch (error => {
//     console.error('\nERROR', error);
//     res.status(500).json({ error: 'Cannot retrieve the shoutouts' });
//   });
// });

// server.post('/', (req, res) => {
//   Shoutouts.add(req.body)
//   .then(shoutout => {
//     res.status(201).json(shoutout);
//   })
//   .catch (error => {
//     console.error('\nERROR', error);
//     res.status(500).json({ error: 'Cannot add the shoutout' });
//   });
// });

server.get('/', async (req, res) => {
  try {
    const shouts = await db('shouts');
    const messageOfTheDay = process.env.MOTD || 'Hi World!!!';

    res.status(200).json({ message: messageOfTheDay, shouts });
  } catch (error) {
    console.error('\nERROR', error);
    res.status(500).json({ error: 'Cannot retrieve the shouts' });
  }
});

server.post('/', async (req, res) => {
  try {
    const [id] = await db('shouts').insert(req.body);
    console.log(req.body);
    const shouts = await db('shouts');

    res.status(201).json(shouts);
  } catch (error) {
    console.error('\nERROR', error);
    res.status(500).json({ error: 'Cannot add the shout' });
  }
});

module.exports = server;
