const http = require('http');

const express = require('express');
const app = express();
app.use((req, res, next) => {
    console.log("in the middleware");
    next();// allows the request to continue to the next middlewew in line
}
);
app.use((req, res, next) => {
    console.log("in onother middleware");

  res.send("<h1>hello world from express JS!</h1")
}
);

//const server = http.createServer(app);

app.listen(3000);
