# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).

====================================================================================================================

Server Spin Up
---

Step 1: Setup
- ```git init```
- ```npm init --y```
- ```npm install express```
- ```in packges.json, update "Scripts" object:```
```  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server/server.js" 
  },
```

- create "server" folder 
- create a "server.js" in server folder 
- in server.js: 
```
// requires 
let express = require ( 'express' );
let app = express();

// uses

// global
const port = 5000;


// spin up server
app.listen( port, ()=>{
    console.log('server up on', port);
})

// routes
```

- test server with  ```npm start```
- stop server with ```ctrl+c```


Phase 2: basic routes:
===

- in server.js:

```
// routes
app.get('/', (req, res)=>{
    console.log('get route hit');
    res.send( 'meow' );
})

app.get('/counter',(req, res)=>{
    console.log('/counter GET hit');
    res.send( 'woof' );
})
```

- restart server (```ctrl+c``` to stop ```npm start``` to restart)
- open "localhost:5000" in your browser to view 
- try "localhost:5000/counter"


Server Web Page (HTML, JS, JQ, CSS)
---

- in out server folder, create a "public folder"
- set up out usual website in the "server/public" folder:

index.html, scripts/client.js, vendors/JQ, styles/style.css

-