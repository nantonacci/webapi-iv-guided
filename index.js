const server = require('./api/server.js');

//const port = process.env.PORT;
const { PORT } = process.env;

server.listen(PORT, () => {
  console.log(`\n*** Server Running on http://localhost:${PORT} ***\n`);
});

// const sortField = req.query.sortBy || 'id';
//same thing=> const sortField = req.query.sortBy ? req.query.sortBy : 'id';
