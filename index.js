const express = require('express');

const counter_route = require('./routes/counter_route');

const not_found_handler = require('./errors/not_found');
const error_handler = require('./errors/error_handler');

const app = express();

app.use('/counter', counter_route)


app.get('/', (_req, res) => {
    res.send('This is root page');
})

app.use(not_found_handler, error_handler);

const PORT = process.env.PORT || 3000;
app.listen(PORT , ()=>{
    console.log(`listening on port ${PORT}`);
});