const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.end('<h1>Create first server port useing Node js</h1>');
});

server.listen(3000, () => {
  console.log('I am runing port 3000');
});