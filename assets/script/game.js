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
let winlose = true;



// this sets all the buttons up to run the program
for (let i = 0; i<5; i++){
    let idgrabber = "#"+aviablechoices[i];
    let locatorstring1 = idgrabber +" .shadow5";
    let locatorstring2 = idgrabber +" .shadow4";
    let locatorstring3 = idgrabber +" .shadow";
    let locatorstring4 = idgrabber +" .shadow1";
    let locatorstring5 = idgrabber +" .shadow2";
    let locatorstring6 = idgrabber +" .shadow3";
    $(idgrabber).mouseup(function(){
       $(locatorstring1).css("display", "none");
       $(locatorstring2).css("display", "none");
       $(locatorstring3).css("display", "block");
       $(locatorstring4).css("display", "block");
       $(locatorstring5).css("display", "block");
       $(locatorstring6).css("display", "block");
     });
     $(idgrabber).mousedown(function(){
        $(locatorstring1).css("display", "block");
        $(locatorstring2).css("display", "block");
        $(locatorstring3).css("display", "none");
        $(locatorstring4).css("display", "none");
        $(locatorstring5).css("display", "none");
        $(locatorstring6).css("display", "none");
    
    });
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


// This function will detmine if you won or not as well as call 
// all necesary user interface adjusting functions
function comparetworesults(){
    $("#youchoice").html("You chose: " + personchoice);
    $("#youchoice").html("<img src='./assets/images/"+ personchoice +".png' class='image2'>");
    $("#computerchoice").html("<img src='./assets/images/"+ computerchoice +".png' class='image2'>");
if (personchoice === computerchoice)  {
    console.log("tie");
    $("#status").html("Tie");
    $("#explaination").empty();
}  
else {

     determinetext(personchoice, computerchoice);

         if (winlose === true){
             console.log('youlose');
             $("#status").html("You Lose!");
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
        $("#explaination").html(choice1 + "<br>" + choicemethod[i] + "<br>" + choice2);
        winlose = false;
     }
    };
};