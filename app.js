const express = require('express')
const port = process.env.PORT || 3000

function generatetitle(){
    return 'node js'
}

const app = express()
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    
    const title = generatetitle();
    
    res.render('index', {
        pageTitle: title,
        body: 'hello gugu'
    })
    
})

app.get('/kontakt', (req, res) => {
    res.send('tu są dane kontaktowe')
})

app.listen(port)