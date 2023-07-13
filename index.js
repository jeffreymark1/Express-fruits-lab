const express = require('express');
const PORT = process.env.PORT || 3001

const app = express()

//Simple get route
app.get('/hello', (request, response) => {
    console.log('hello world!')
    response.send("Hello Bob!");
})

//Greet
app.get('/greet/:name', (request, response) => {
    const name = request.params.name;
    response.send(`Why hello there ${name}!`)
})

//five
app.get('/five', (request, response) => {
    const five = "1, 2, 3, 4, 5";
    response.send(five);
})

//fruits
app.get('/fruits', (request, response) => {
    const fruits = "watermelons, bananas, apples, oranges, pineapples";
    response.send(fruits);
})

//fruits name
app.get('/fruits/:name', (request, response) => {
    const name = request.params.name;
    response.send(name);
})

//veggies
app.get('/veggies', (request, response) => {
    const veggies = "carrots, celery, mushrooms, broccoli, spinach";
    response.send(veggies);
})

app.get('/veggies/:name', (request, response) => {
    const name = request.params.name;
    response.send(name);
})


app.listen(PORT, () => {console.log(`Serving up delicious fruits on port ${PORT} 🍒`)
})