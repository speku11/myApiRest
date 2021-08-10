const express = require('express')
const morgan = require('morgan')
const app  = express()

//settings
app.set('port', 4000)
app.set('json spaces', 2)

//middlewers
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// routes
app.use(require('./routes/index.js'))
app.use('/api/movies',require('./routes/movies'))
app.use('/api/users', require('./routes/users'))
//starting the server
app.listen(4000, ()=>{
    console.log(`Server on port ${app.get('port')}` )
});

