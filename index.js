const express = require('express')
const app = express()

app.get('/bug', (req, res) => {


    let i;
    let fib = []; // Initialize array!

    fib[0] = 0;
    fib[1] = 1;
    for (i = 2; i != 0; i++) {
        // Next fibonacci number = previous + one before previous
        // Translated to JavaScript:
        fib[i] = fib[i - 2] + fib[i - 1];
        console.log(fib[i]);
    }

})

app.get('/', (req, res) => {
    res.send('funcionou')
})

app.listen(3000, (req, res) => {
    console.log("running at 3000")
})