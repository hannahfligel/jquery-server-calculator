$( document ).ready( onReady );

function onReady(){
    $('#equalIn').on('click', calculate);
    $('#add').on('click', addOperator);
    $('#subtract').on('click', subtractOperator);
    $('#multiply').on('click', multiplyOperator);
    $('#divide').on('click', divideOperator);
    getCalculation();
} // end onReady

function getCalculation(){
    console.log( 'in calculation' );
    // AJAX GET call to /calculation
    $.ajax({
        method: 'GET',
        url: '/calculation'
    }).then( function( response ){
        // if successful
        console.log( 'back from server successfully:', response  );
        // target output element
        let el = $( '#calculationOut' );
        // empty
        el.empty();
        // loop thru array
        // for( let i=0; i<response.length; i++){
        //     // append each on DOM
        //     // el.append( `<li><strong>${response[i].author}</strong>: ${ response[i].text }</li>`)
        // }
    }).catch( function( err ){
        // got an error
        alert( 'no worky! check console for deets' );
        console.log( 'error:', err );
    })
}

let operator = "";

function calculate(){
    console.log( 'in calculate' );
    // get user input & store in an object
    let objectToSend = {
        firstNumber: $( '#firstNumIn' ).val(),
        secondNumber: $( '#secondNumIn' ).val(),
        //set to start as an empty string
        operation: operator,
    }
    console.log( 'sending:', objectToSend );
    // make AJAX POST with the object
    $.ajax({
        method: 'POST',
        url: '/calculation',
        data: objectToSend // must have data to send in a POST
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

