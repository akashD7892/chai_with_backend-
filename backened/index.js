const express = require('express') ;
const app = express() ;
// const cors = require('cors') ;
const bodyParser = require('body-parser');

// bodyParser is used to take array from the request as in frontend resp must be in json format 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.json()) ;

// app.use(cors()) ;


app.get( '/', (req, resp) => {
    resp.send("Server is ready") ;
})

app.get( '/jokes', (req,resp) => {
    const jokes = [
        {
            id:1,
            title:'A joke' ,
            content: 'This is a joke'
        },
        {
            id:2,
            title:'A joke second' ,
            content: 'This is second a joke'
        } 

    ]

    resp.json(jokes) ;
})
const port = process.env.PORT || 5000

app.listen( port , () => {
    console.log(`Server is running at http://localhost${port}`)
})