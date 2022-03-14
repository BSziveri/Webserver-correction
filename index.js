const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));

var handlebars = require('express-handlebars')
.create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

const home = require ('./Routes/home') 

app.use('/', home)

app.use( (req, res) => {
    res.render('404');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))