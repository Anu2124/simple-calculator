//intialize variables to store the current display and result states.
let currentDisplay="0";//the current display content.
let resultDisplay=false;//flag to track whether the current result is displayed.


//function to append a value to the current display.
function appendToDisplay(value){
    if(currentDisplay=="0"||resultDisplay){
        //if current display is "0",or the result is already displayed,replace it with the new value.
        currentDisplay=value;
    }else{
        //otherwise concate the new value to the current display.
        currentDisplay+=value;
    }
    //reset the result display flag to false,as the user entered the new value.
    resultDisplay=false;

    //update the calculator displaly to show the new content.
    updateDisplay();
}

//function to update the calculator display with the current content.
function updateDisplay(){
    const displayElement=document.getElementById("display");
    displayElement.textContent=currentDisplay;
}

//function to calculate and display result
function calculateResult(){
    try{
        //use the eval() functiion to valuate the mathematical expression.
        const result=eval(currentDisplay);

        //append result to the current display, preceded by an equal sign(=).
        currentDisplay+="\n" + result.toString();

        //update the calculator and display the result.
        updateDisplay();
        
    }
    catch(error){
        //if there is any error in the expression(eg:division by zero)display an error message
        currentDisplay+="\n error"
        
        //update the calculator display to show error message.
        currentDisplay();
    }//set the result display flage to true to indicate that the result is displayed
    resultDisplay=true;
}


// function to clear the last element from the current display
function  clearLastElement(){

    //remove the last element from the current display by using slice()method.
    currentDisplay=currentDisplay.slice(0,-1);

    //if current display becomes empty set it back to '0'.
    if(currentDisplay===""){
        currentDisplay="0";
    }
    //update the calculator display to reflect the changes.
    updateDisplay();
    }

    //function to clear entire display
    function clearDisplay(){
        currentDisplay="0";//reset the display to zero 
        resultDisplay=false;//reset the  result display flag to false.

        //update the calculator display to showw the clear content
        updateDisplay();
    }