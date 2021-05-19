const express = require('express');
const fs = require('fs');
const app = express();
//register view engine
app.set('view engine', 'ejs');
//listen for requests
app.listen(3000);

const products = require('./models/products.js');

app.get('/api/products', (req, res) => {
    res.render('index', {
        products
    });
});

app.get('/api/products/create', (req, res) => {
    res.render('create');
});

app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id))
    if (!product) res.status(404).send('The product with given id was not found');
    res.render('product', product);
});