
// Initiate arrays with words
// this is an empty array that will hold the guessing letter
var userGuess = [];
// this is an empty array
var RandomWord = [];
// variable when user selects the category

// varibale when user selects the number for letters


// new variables that will hold onto user selection
//var userCategory = document.getElementsByName("Cat").value;
//var userNumber = document.getElementsByName("flexRadioDefault").value;

//console.log(userCategory,userNumber);


// Hey these are my test variables,i couldn't get the program to intake from html to javascript
var testCategory1 = "Animals";
var testNumber1 = 4;

// color and 5
var testCategory2 = "Animals";
var testNumber2 = 5;

var testCategory3 = "Color";
var testNumber3 = 4;

// color and 5
var testCategory4 = "Color";
var testNumber4 = 5;



var userLetternumber= 0;

var Animals5= ["eagle", "tiger","panda","whale", "zebra","mouse","moose","koala","rhino","llama"];
var Animals4 =  ["goat", "duck","fish","frog","crab","lamb","lion","mule", "deer","wolf"];
var Color5 = ["green", "brown","lilac","peach","white","pearl", "olive","mocha","khaki","ivory"];
var Color4 =["grey","aqua","blue","lime","pink","rose","teal","gold","navy","mint"];

console.log("is my java script working? yes!");
// if user selects category color  and letter 4. then do random for Animals5
//  ID is "flexRadioDefault2"  = 4

if ( testCategory1== "Animals"  && testNumber1 == 4){
    console.log("it's creating 4 random words")
// pull data from variable animals5  and make computer choose a random word from that array
    var RandomWord = Animals5[Math.floor(Math.random() * Animals5.length)];
console.log(RandomWord);

}


// if user selects category animal and letter 4. then do random for Animals4
//else if (userCategory == "Animals" && userNumber == "flexRadioDefault1"){
    if ( testCategory2== "Animals"  && testNumber2 == 5){
    var RandomWord = Animals4[Math.floor(Math.random() * Animals4.length)];
        console.log(RandomWord);

}


// if user selects category color and letter 5. then do random for Color5
//else if (userCategory ="Colors" && userNumber == "flexRadioDefault2") {
    // pull data from var
if ( testCategory3== "Color"  && testNumber3 == 4){
    var RandomWord = Color5[Math.floor(Math.random() * Color5.length)];
    console.log(RandomWord);
}

//if user selects category color and letter 4. Then do random for Color4
//else if (userCategory == "Colors" && userNumber == "flexRadioDefault1"){
if ( testCategory4== "Color"  && testNumber4 == 5){

    var RandomWord = Color4[Math.floor(Math.random() * Color4.length)];
    console.log(RandomWord);
}