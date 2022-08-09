const PORT = 8000;
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const HomeRoute = require('./routes/home');
const UsersRoute = require('./routes/users');

const app = express();

// Middleware for passing and parsing data across routes
app.use(bodyParser.urlencoded({extended:true}));

// Middleware for serving static sites resources
app.use(express.static(path.join(__dirname, 'public')));

app.use(UsersRoute);

app.use(HomeRoute);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
})

app.listen(PORT);

console.log(`Server is online on http://localhost:${PORT}`)