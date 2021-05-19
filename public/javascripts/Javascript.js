
var Animals5 = Animals5[Math.floor(Math.random() * Animals5.length)];
<!-- try to set up the length of 5 letters for this with underscores -->
const answerArray = [];
<!-- create a loop so that it can output exactly 5 underscores -->
for (var i = 0; i < Animals5.length; i++){
    answerArray [i] = "_";
}

<!-- how many letters are remaining -->
var lettersUnguessed = Animals5.length;


<!-- Let's start guessing! -->

while (lettersUnguessed > 0 ){
    <!-- show how many letters they've guessed -->
    <!-- alert(answerArray.join(" "));-->


    <!-- make user input their guess "make them type something -->
    <!-- make  variable for guess -->
    var guess = prompt("Make a guess using a single letter!");

    <!-- blank input is submittted  -->
    if (guess == null ){
        break;
    } else if (guess.length !== 1){
        break;
    } else {
        <!-- then  update  -->
        for (let j= 0; j < Animals5.length; j++){
            if (Animals5[j]=== guess){

            }


        }
    }



}

