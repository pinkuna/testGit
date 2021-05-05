const express = require('express')
const app = express()
const PORT = process.env.PORT || 6543

// const bodyParser = require('body-parser')
const path = require('path')

// middle ware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Import Controllers
const bookingcon = require('./controllers/booking')
const checkoutcon = require('./controllers/checkout')
const logincon = require('./controllers/login')
const registercon = require('./controllers/register')
const reportcon = require('./controllers/report')

// Controllers
// app.use('/api/booking', bookingcon)
// app.use('/api/checkout', checkoutcon)
app.use('/api/login', logincon)
app.use('/api/register', registercon)
// app.use('/api/report', reportcon)

// test API GET
app.get('/', (req, res) => {
    res.send(`Hello World from PORT ${PORT}`)
})

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log(`Press Ctrl+C to quit `);
})