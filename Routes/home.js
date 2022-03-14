const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/index', (req, res) => {
    res.render('index');
});

router.get('/Content', (req, res) => {
    res.render('Content');
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/:name', (req, res) => {
    var name = req.params.name;

    if (!data[name]) {
        console.log('404 because person doesn\'t exist');
        res.render('404');
    }
    else {
        res.render('person', { person: data[name] });
    }
})

router.get('/',  (req, res) => {
    res.cookie ('tracking', 'Look a cookie');
    res.render('home');
});

module.exports = router;