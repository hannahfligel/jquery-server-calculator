//requires
const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );
const { response } = require('express');
// uses
app.use( express.static( 'server/public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );
// globals
const port = 5000;
let calculation = [{ author: 'test', text: 'test text' }]
// spin up server
app.listen( port, ()=>{
    console.log( 'server up on:', port );
})


// routes
app.get( '/calculation', ( req, res )=>{
    console.log( '/calculation GET hit' ); // will show in server terminal
    // res.send( calculation ); // our response
    res.sendStatus(200);
})

app.post( '/calculation', ( req, res )=>{
    console.log('hit on POST/calculations:', req.body);
    let el = req.body
    let answer = 0;
    if(el.operation === '+'){
        answer = Number(el.firstNumber) + Number(el.secondNumber);
    }
    else if (el.operation === '-'){
        answer = Number(el.firstNumber) - Number(el.secondNumber);
    }
    else if(el.operation === '*'){
        answer = Number(el.firstNumber) * Number(el.secondNumber);
    }
    else if(el.operation === '/'){
        answer = Number(el.firstNumber) / Number(el.secondNumber);
    }
    console.log(answer);
    res.send( 200 ); // generic "OK", 201 = "CREATED"
})
