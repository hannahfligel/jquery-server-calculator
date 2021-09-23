// requires 
let express = require ( 'express' );
let app = express();

// uses

// global
const port = 5000;
let counter = 0;


// spin up server
app.listen( port, ()=>{
    console.log('server up on', port);
})

// routes
app.get('/', (req, res)=>{
    //inrement calculator
    console.log('get route hit');
    res.send( 'meow' );
})

app.get( '/counter', ( req, res )=>{
    //increment counter
    counter++;
    console.log('/counter GET hit:', counter);
    res.send( `visits: ${counter}` );
})