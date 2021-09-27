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
let calculations = [];
// spin up server
app.listen( port, ()=>{
    console.log( 'server up on:', port );
})



// route (receive GET Request)
app.get( '/calculation', ( req, res )=>{
    console.log( '/calculation GET hit' ); // will show in server terminal
    //send response 
    res.send( calculations ); // our response (array of calculation)
})


//receive POST request||req= request res=response
app.post( '/calculation', ( req, res )=>{
    console.log('hit on POST/calculations:', req.body);
    //req.body is our data/objectToSend(firstNumber, secondNumber, operator)
    let el = req.body
    let answer = 0;
    //objectToSend.operation(+||-||*||/)
    if(el.operation === '+'){
        //set to Number to avoid getting a string for the response 
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
    //push the answer into the array of calculations 
    calculations.push({
        firstNumber: el.firstNumber,
        secondNumber: el.secondNumber,
        operation: el.operation,
        answer: answer
    });
    res.sendStatus( 200 ); // generic "OK", 201 = "CREATED"
})
