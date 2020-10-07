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
  spockmethod: ["smashes", "vaporizes"],
};

const aviablechoices = ["rock", "paper", "scissors", "lizard", "spock"];
let personchoice = null;
let computerchoice = null;
let winlose = true;
let yournumberwin;
let yournumberloss;
let theirnumberwin;
let theirnumberloss;
let settingsclosed = true;
$("#settings").on("click", function () {
  if (settingsclosed === true) {
    $("#totalgame").css(
      "transform",
      "rotate(-90deg) translate(200px, -800px)" /* For modern browsers(CSS3)  */
    );
    $("#settings").css("right", "200px");
    settingsclosed = false;
  } else {
    $("#totalgame").css(
      "transform",
      "rotate(0) translate(-50%, -50%)" /* For modern browsers(CSS3)  */
    );
    $("#settings").css("right", "50px");
    settingsclosed = true;
  }
  console.log("button worked");
});
// this sets all the buttons up to run the program
for (let i = 0; i < 5; i++) {
  let idgrabber = "#" + aviablechoices[i];
  let locatorstring1 = idgrabber + " .shadow5";
  let locatorstring2 = idgrabber + " .shadow4";
  let locatorstring3 = idgrabber + " .shadow";
  let locatorstring4 = idgrabber + " .shadow1";
  let locatorstring5 = idgrabber + " .shadow2";
  let locatorstring6 = idgrabber + " .shadow3";
  $(idgrabber).mouseup(function () {
    $(locatorstring1).css("display", "none");
    $(locatorstring2).css("display", "none");
    $(locatorstring3).css("display", "block");
    $(locatorstring4).css("display", "block");
    $(locatorstring5).css("display", "block");
    $(locatorstring6).css("display", "block");
  });
  $(idgrabber).mousedown(function () {
    $(locatorstring1).css("display", "block");
    $(locatorstring2).css("display", "block");
    $(locatorstring3).css("display", "none");
    $(locatorstring4).css("display", "none");
    $(locatorstring5).css("display", "none");
    $(locatorstring6).css("display", "none");
  });
  $(idgrabber).on("click", function () {
    personchoice = aviablechoices[i];
    console.log(personchoice);
    comparetworesults();
  });
}

//This will pick a random computer choice.
function getcomputerchoice() {
  let computerchoicenumber = Math.floor(Math.random() * Math.floor(5));
  computerchoice = aviablechoices[computerchoicenumber];
  console.log(computerchoice);
}
getcomputerchoice();

$(".dropdownbutton").mousedown(function () {
  $("#navigatorspace").empty();
  $("#navigatorspace").append(
    "<img src='./assets/images/dropdownmenu2.png' class='dropdownbutton'>"
  );
  $(".dropdownbutton").css("border-style", "inset");
});

// This function will detmine if you won or not as well as call
// all necesary user interface adjusting functions
function comparetworesults() {
  $("#youchoice").html("You chose: " + personchoice);
  $("#youchoice").html(
    "<img src='./assets/images/" + personchoice + ".png' class='image2'>"
  );
  $("#computerchoice").html(
    "<img src='./assets/images/" + computerchoice + ".png' class='image2'>"
  );
  if (personchoice === computerchoice) {
    console.log("tie");
    $("#totalgame").addClass("tie");
    setTimeout(function () {
      $("#totalgame").removeClass("tie");
    }, 2000);
    $("#explaination").empty();
  } else {
    determinetext(personchoice, computerchoice);

    if (winlose === true) {
      console.log("youlose");
      $("#totalgame").addClass("loss");
      setTimeout(function () {
        $("#totalgame").removeClass("loss");
      }, 2000);
      yournumberloss = parseInt($("#yourlossnumber").html());
      theirnumberwin = parseInt($("#theirwinnumber").html());
      $("#yourlossnumber").html(yournumberloss + 1);
      $("#theirwinnumber").html(theirnumberwin + 1);

      determinetext(computerchoice, personchoice);
      winlose = true;
    } else {
      console.log("youwin");
      $("#totalgame").addClass("win");
      setTimeout(function () {
        $("#totalgame").removeClass("win");
      }, 2000);
      yournumberwin = parseInt($("#yourwinnumber").html());
      theirnumberloss = parseInt($("#theirlossnumber").html());
      $("#yourwinnumber").html(yournumberwin + 1);
      $("#theirlossnumber").html(theirnumberloss + 1);
      winlose = true;
    }
  }
}
// This will print out the text of why you won or lost
function determinetext(choice1, choice2) {
  let findchoicepower = choice1 + "power";
  let findchoicemethod = choice1 + "method";
  let choicepowers = rules[findchoicepower];
  let choicemethod = rules[findchoicemethod];
  for (let i = 0; i < 2; i++) {
    let choicepower = choicepowers[i];
    if (choicepower === choice2) {
      console.log(choice1 + " " + choicemethod[i] + " " + choice2);
      $("#explaination").html(
        choice1 + "<br>" + choicemethod[i] + "<br>" + choice2
      );
      winlose = false;
    }
  }
}
