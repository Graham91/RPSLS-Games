console.log("connected");

const rules = {
    rockpower: ["scissors", "lizard"],
    rockmethod: ["crushes", "crushes"],
    paperpower: ["spock", "rock"],
    papermethod: ["disproves", "covers"],
    scissorspower: ["lizard", "paper"],
    scissorsmethod: ["decapitate", "cut"],
    lizardpower: ["spock", "paper"],
    lizardmethod: ["poisons", "eats"],
    spockpower: ["scissors", "rock"],
    spockmethod: ["smashes", "vaporizes"]
};

const aviablechoices = ["rock", "paper","scissors","lizard","spock"];
let personchoice = null;
let computerchoice = null;

// this sets all the buttons up to run the program
for (let i = 0; i<5; i++){
    let idgrabber = "#"+aviablechoices[i];
         $(idgrabber).on("click", function (){
              personchoice = aviablechoices[i];
             console.log(personchoice);
             comparetworesults();
        });
}

//This will pick a random computer choice.
function getcomputerchoice(){
  
    let computerchoicenumber = Math.floor(Math.random() * Math.floor(5));
    computerchoice = aviablechoices[computerchoicenumber];
    console.log(computerchoice);
};
getcomputerchoice();

let winlose = true;
// This function will detmine if you won or not as well as call 
// all necesary user interface adjusting functions
function comparetworesults(){
    $("#youchoice").html("You chose: " + personchoice);
    $("#computerchoice").html("The computer chose: " + computerchoice);
if (personchoice === computerchoice)  {
    console.log("tie");
    $("#status").html("tie");
    $("#explaination").empty();
}  
else {

     determinetext(personchoice, computerchoice);

         if (winlose === true){
             console.log('youlose');
             $("#status").html("You lose!");
             determinetext(computerchoice, personchoice);
             winlose = true;
             }
         else {
             console.log('youwin');
             $("#status").html("You Win!");
             winlose = true;
             }

     }

};
// This will print out the text of why you won or lost
function determinetext(choice1, choice2){
    let findchoicepower = choice1+"power";
    let findchoicemethod = choice1 +"method";
    let choicepowers = rules[findchoicepower];
    let choicemethod = rules[findchoicemethod];
    for (let i = 0; i<2; i++){
        let choicepower = choicepowers[i];
     if (choicepower === choice2){
    
        console.log(choice1 + " " + choicemethod[i] + " " + choice2)
        $("#explaination").html(choice1 + " " + choicemethod[i] + " " + choice2);
        winlose = false;
     }
    };
};