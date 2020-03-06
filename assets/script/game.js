console.log("connected");


const rules = {
    rockpower: ["scissors", "lizard"],
    rockmethod: ["crushes", "crushes"],
    paperpower: ["spock", "rock"],
    papermethod: ["disproves", "covers"],
    scissorspower: ["lizard", "paper"],
    scissorsmethod: ["decapitates", "cuts"],
    lizardpower: ["spock", "paper"],
    lizardmethod: ["poisons", "eats"],
    spockpower: ["scissors", "rock"],
    spockmethod: ["smashes", "vaporizes"]
};
const aviablechoices = ["rock", "paper","scissors","lizard","spock"];
let personchoice = null;
let computerchoice = null;

for (let i = 0; i<5; i++){
    let idgrabber = "#"+aviablechoices[i];
         $(idgrabber).on("click", function (){
              personchoice = aviablechoices[i];
             console.log(personchoice);
             comparetworesults();
        });
}
console.log(rules.paperpower)
function getcomputerchoice(){
  
    let computerchoicenumber = Math.floor(Math.random() * Math.floor(5));
    computerchoice = aviablechoices[computerchoicenumber];
    console.log(computerchoice);
};
getcomputerchoice();

function comparetworesults(){
if (personchoice === computerchoice)  {
    console.log("tie");
}  
else {

    let winlose = true;

determinetext(personchoice, computerchoice);
console.log(winlose);
     if (winlose === true){
console.log('youlose');
determinetext(computerchoice, personchoice);
    }
  else if (winlose === false){
      console.log('youwin');
  }

}

}
function determinetext(choice1, choice2){
    let findchoicepower = choice1+"power";
    let findchoicemethod = choice1 +"method";
    let choicepowers = rules[findchoicepower];
    let choicemethod = rules[findchoicemethod];
    for (let i = 0; i<2; i++){
        let choicepower = choicepowers[i];
     if (choicepower === choice2){
    
        console.log(choice1 + " " + choicemethod[i] + " " + choice2)
        winlose = false;
     }

    };
};