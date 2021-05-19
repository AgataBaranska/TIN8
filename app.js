const express = require('express');
const app = express();
//register view engine
app.set('view engine', 'ejs');
//listen for requests
app.listen(3000);

const products = [{
        id: 1,
        name: 'mod1234'
    },
    {
        id: 2,
        name: 'mod1234'
    },
    {
        id: 3,
        name: 'mod1234'
    },
];

app.get('/api/products', (req, res) => {
    res.render('index', {
        products
    });
});

app.get('/api/products/create', (req, res) => {
    res.render('create');
});

app.get('/api/courses/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id))
    if (!product) res.status(404).send('The product with given id was not found');
    res.send(product);
});