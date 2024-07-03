document.getElementById("guess").onclick = function(){

    var randomNo = Math.random()*10;
    randomNo = Math.round(randomNo);
     
    var inputVal = document.getElementById("guess-input").value;

    if (randomNo == inputVal){
        alert("You got IT right: ")
    }
    else if (inputVal > 10 || inputVal<0){
        alert("Please enter a value in range of 1 to 10");
    }
    else{
        alert("try again");
    }
    alert("value is " + randomNo);
}