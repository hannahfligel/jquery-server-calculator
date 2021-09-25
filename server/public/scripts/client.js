$( document ).ready( onReady );

function onReady(){
    getCalculation();
    //listeners, capture click events 
    $('#add').on('click', addOperator);
    $('#subtract').on('click', subtractOperator);
    $('#multiply').on('click', multiplyOperator);
    $('#divide').on('click', divideOperator);
    $('#equalIn').on('click', calculate);
} // end onReady

function getCalculation(){
    console.log( 'in calculation' );
    // asking AJAX to perform a GET req to the url or /calculation
    $.ajax({
        method: 'GET',
        url: '/calculation' // go to server to look for the route to receive a GET request 
    }).then( function( response ){
        // if successful
        console.log( 'back from server successfully:', response  );
        // target output element
        let el = $( '#calculationOut' );
        // empty
        el.empty();
        // loop thru array
        for( let i=0; i<response.length; i++){
            // append each on DOM
            el.append( `<li>${response[i].firstNumber}${response[i].operation}${response[i].secondNumber}=${response[i].answer}</li>`)
        }
    }).catch( function( err ){
        // got an error
        alert( 'no worky! check console for deets' );
        console.log( 'error:', err );
    })
}


function calculate(){
    console.log( 'in calculate' );
    // capture user input & store in an object
    //objectToSend is rec.body
    let objectToSend = {
        firstNumber: $( '#firstNumIn' ).val(),
        secondNumber: $( '#secondNumIn' ).val(),
        //set to start as an empty string
        operation: operator
    }
    console.log( 'sending:', objectToSend );
    // make AJAX POST call with the object
    $.ajax({
        method: 'POST',
        url: '/calculation',
        data: objectToSend // must have data to send in a POST
    //back from server to receive response 
    }).then( function( response ){
        // if successful, update DOM
        //getCalculation() will loop through the array of calculations from the server and display they to the DOM
        getCalculation();
    }).catch( function( err ){
        // catch any errors
        alert( 'error, check console for details' );
        console.log( err );
    })
}

let operator = "";

function addOperator(){
    operator="+"
}

function subtractOperator(){
    operator="-"
}

function multiplyOperator(){
    operator="*"
}

function divideOperator(){
    operator="/"
}

