function myname(){
    let name = document.getElementById("first").value;
    if(name == "Mohit Sharma" ){
        document.getElementById("message").innerHTML="This is the valid name";

    }else if(name =="1234567890" || name== "!@#$%^&*()_+{}~!}|"){

        document.getElementById("message").innerHTML="This is the special character";
        
    }
    else{
        document.getElementById("message").innerHTML="This is the invalid name";
        
    }

}

function guessTheNumber() {
    let numberToGuess = Math.floor(Math.random() * 100) + 1;
    let userGuess;

    do {
        userGuess = document.getElementById("second").value;
        if(userGuess > numberToGuess) {
            document.getElementById("")
        } else if(userGuess < numberToGuess) {
            alert("Too low! Try again.");
        }
    } while(userGuess != numberToGuess);

    alert("Congratulations! You guessed the number.");
}

guessTheNumber();
