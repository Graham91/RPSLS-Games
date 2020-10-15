console.log("connected");
var config = {
  apiKey: "AIzaSyC88fbypXulQ4VXEeoQpjMn10-b60Bs234",
  authDomain: "rpsls-game-1f6cb.firebaseapp.com",
  databaseURL: "https://rpsls-game-1f6cb.firebaseio.com/",
};

firebase.initializeApp(config);
var database = firebase.database();
//base database
var ref = database.ref();
//main databaseobjects
let users = ref.child("users");
let game = ref.child("game");
//find
let findrachel = users.orderByChild("available").equalTo(true).limitToLast(8);
findrachel.on("value", function (snapshot) {
  console.log("worked");
  console.log(snapshot.val());
});
//objects
var userobject = {
  Name: "Yraham",
  available: true,
  PIN: 1234,
  requestRecieved: {},
  requestmade: {},
};
gameobject = {
  player1ID: "Yraham",
  player2ID: "Graham",
  player1choice: "null",
  player2choice: "null",
};
//create
// game.push(gameobject);
// users.push(userobject);
//update
// function writeUserData(userId, name, email, imageUrl) {
//   firebase
//     .database()
//     .ref("users/" + userId)
//     .set({
//       username: name,
//       email: email,
//       profile_picture: imageUrl,
//     });
// }

//MAKE REQUEST:
//user clicks request game button
//current users made requests is updated
//selected users request received is updated
//both of these are displayed on user screen
//REQUEST ACCEPTED:
//If requested user is available
//game is built
//BUILD GAME:
//Once a request is accepted a game is then generated with both player?ID
//and both player?choice = "null"
//userInformation is updated by emptying requestsRecieved & requestsMade for both players
//userinformation is updated by changing available to false
//game is queried using the player?id associated with the curent user
//RESET GAME:
//Player?choices returned too null
//LEAVE GAME: When a player leaves a game the game is then deleted
//game is found using the player?id associated with the curent user
//userinformation is updated by changing available to true
//LOG OUT:
//userinformation is updated by changing available to false

//search bar logic
// //setup before functions
// var typingTimer;                //timer identifier
// var doneTypingInterval = 5000;  //time in ms (5 seconds)

// //on keyup, start the countdown
// $('#myInput').keyup(function(){
//     clearTimeout(typingTimer);
//     if ($('#myInput').val()) {
//         typingTimer = setTimeout(doneTyping, doneTypingInterval);
//     }
// });

// //user is "finished typing," do something
// function doneTyping () {
//     //do something
// }

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
const slotMechanismLocation = {
  scissors: "-5400px",
  spock: "-5500px",
  lizard: "-5600px",
  rock: "-5700px",
  paper: "-5800px",
  eats: "-5900px",
  crushes1: "-6000px",
  poisons: "-6100px",
  crushes0: "-6200px",
  smashes: "-6300px",
  disproves: "-6400px",
  vaporizes: "-6500px",
  cut: "-6600px",
  covers: "-6700px",
  decapitate: "-6800px",
  win: "-6900px",
  you: "-7000px",
  lose: "-7100px",
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
let outcome;
let newChoicemethod;
let choiceplayer1;
let choiceplayer2;
let clicked = true;
let locatedUserName;
let degrees = 360;
let wait = false;
let findgame = false;
let logIn = false;
let createUser = false;
//settings button action
$("#settings").on("click", function () {
  if (settingsclosed === true) {
    $(".rightsidemodule").css("z-index", "100");
    $("#totalgame").css(
      "transform",
      "rotate(-90deg) translate(200px, -800px)" /* For modern browsers(CSS3)  */
    );
    $("#settings").css("right", "200px");
    $("#settings").css("color", "white");
    $(".settingstotaldiv").css("display", "block");
    $(".rightsidemodule").css("opacity", "0.3");
    settingsclosed = false;
  } else {
    $("#totalgame").css(
      "transform",
      "rotate(0) translate(-50%, -50%)" /* For modern browsers(CSS3)  */
    );
    $("#settings").css("right", "50px");
    $(".settingstotaldiv").css("display", "none");
    $("#settings").css("color", "rgb(36, 71, 35)");
    $(".rightsidemodule").css("opacity", "0");

    setTimeout(function () {
      $(".rightsidemodule").css("z-index", "19");
    }, 1000);
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
  let locatorstring7 = idgrabber + " .shadow6";
  let locatorstring8 = idgrabber + " .shadow7";
  $(idgrabber).mouseup(function () {
    if (clicked === true) {
      $(locatorstring1).css("display", "none");
      $(locatorstring2).css("display", "none");
      $(locatorstring7).css("display", "none");
      $(locatorstring3).css("display", "block");
      $(locatorstring4).css("display", "block");
      $(locatorstring5).css("display", "block");
      $(locatorstring6).css("display", "block");
      $(locatorstring8).css("display", "block");
    }
  });
  $(idgrabber).mousedown(function () {
    if (clicked === true) {
      $(locatorstring1).css("display", "block");
      $(locatorstring2).css("display", "block");
      $(locatorstring7).css("display", "block");
      $(locatorstring3).css("display", "none");
      $(locatorstring4).css("display", "none");
      $(locatorstring5).css("display", "none");
      $(locatorstring6).css("display", "none");
      $(locatorstring8).css("display", "none");
    }
  });
  $(idgrabber).on("click", function () {
    if (clicked === true) {
      clicked = false;
      personchoice = aviablechoices[i];
      console.log(personchoice);
      comparetworesults();
    }
  });
}
//Set up PIN pad for both logIn and createUser
for (let index = 0; index < 10; index++) {
  const setupbuttonslog = "#number" + index + "Log";
  $(setupbuttonslog).on("click", function () {
    let currentvallog = $("#logpinInput").val();
    if (currentvallog.length < 4) {
      $("#logpinInput").val(currentvallog + index);
    }
  });
  const setupbuttonscreate = "#number" + index + "Create";
  $(setupbuttonscreate).on("click", function () {
    let currentval = $("#createpinInput").val();
    if (currentval.length < 4) {
      $("#createpinInput").val(currentval + index);
    }
  });
}
//VIEW AVAILABLE USERS:
//database is queried for 10 users who are available
//each user is then displayed in a list next to a request game button
//updates on refresh button
//and upon User filling in search bar
function findAvailableUser() {
  let findUsers = users.orderByChild("available").equalTo(true).limitToLast(8);
  findUsers.on("value", function (snapshot) {
    console.log("worked");
    let avialableUsers = snapshot.val();
    let usersKeys = Object.getOwnPropertyNames(avialableUsers);
    console.log(usersKeys);
  });
}
function searchForSpecificUser(searchterm) {
  let findUser = users
    .orderByChild("A_Name")
    .equalTo("A_" + searchterm)
    .limitToLast(8);
}
//LOG-IN:
//User inputs name and submits
//Database is queried for name
//if name exist user is directed to enter pin
//User inputs pin
//if pin matches the User is told they are logged in
//userinformation is updated by changing available to true
//user can now view avialable users and request status
$("#logIn").on("click", function () {
  if (logIn === true) {
    $("#logInMain").css("display", "none");
    logIn = false;
  } else {
    $("#logInMain").css("display", "block");
    logIn = true;
  }
});

$("#submitLogIn").on("click", function () {
  event.preventDefault();
  let currentPinValue = $("#logpinInput").val();
  if (currentPinValue.length < 4) {
    $("#logpinInput").css("color", "red");
    $("#logininput").val("Bad Pin");
    setTimeout(function () {
      $("#logpinInput").css("color", "black");
    }, 500);
  } else {
    let objectname = Object.getOwnPropertyNames(locatedUserName);
    let actualPIN = locatedUserName[objectname].PIN;
    let userName = locatedUserName[objectname].Name;
    if (currentPinValue === actualPIN) {
      //logIn success
      $("#welcomelogin").html("Welcome " + userName + "!");
      $("#logInMain").css("display", "none");
      $("#logIn").css("display", "none");
      $("#logout").css("display", "block");
      $("#CreatUser").css("display", "none");
    } else {
      $("#logpinInput").css("color", "red");
      $("#logininput").val("Bad Pin");
      setTimeout(function () {
        $("#logpinInput").css("color", "black");
      }, 500);
    }
  }
});
$("#findgame").on("click", function () {
  if (findgame === true) {
    $("#findgamemain").css("display", "none");
    findgame = false;
  } else {
    $("#findgamemain").css("display", "block");
    findgame = true;
  }
});
$(".refreshbutton").on("click", function () {
  if (wait === true) {
  } else {
    wait = true;
    $(".refreshbutton").css("transform", "rotate(" + degrees + "deg)");
    setTimeout(function () {
      degrees = degrees + 360;
      console.log(degrees);
      wait = false;
    }, 1000);
  }
});

$("#submitLoginName").on("click", function () {
  event.preventDefault();
  let LoginUserInput = $("#logininput").val();
  let checkifuserexists = users.orderByChild("Name").equalTo(LoginUserInput);
  checkifuserexists.on("value", function (snapshot) {
    if (snapshot.val() === null) {
      $("#logininput").val("Username Not Found");
    } else {
      locatedUserName = snapshot.val();
      $("#LoginPIN").css("display", "block");
      $("#submitLoginName").css("display", "none");
    }
  });
});
//CREATE USER:
//User inputs name and submits
//database is queried for name
//if name exist user is told name is unavialable
//if name is aviable user is prompted to put in a pin
//user is updated with pin
$("#CreatUser").on("click", function () {
  if (createUser === true) {
    $("#firstStageCreate").css("display", "none");
    createUser = false;
  } else {
    $("#firstStageCreate").css("display", "block");
    createUser = true;
  }
});
//add permanentbox shadow!
// $(this).css('-webkit-box-shadow', '0px 0px 40px 7px red');
// $(this).css('-moz-box-shadow', '0px 0px 40px 7px red');
// $(this).css('box-shadow', '0px 0px 40px 7px red');

$("#CreateUserSubmit").on("click", function () {
  event.preventDefault();
  let createUserInput = $("#createuser").val();
  console.log(createUserInput);
  let checkNameAvailability = users
    .orderByChild("Name")
    .equalTo(createUserInput);
  checkNameAvailability.on("value", function (snapshot) {
    if (snapshot.val() === null) {
      console.log(snapshot.val());
      $("#createuserPIN").css("display", "block");
      $("#CreateUserSubmit").css("display", "none");
    } else {
      $("#createuser").val("Name Unavailable");
    }
  });
});
$("#submitCreatePin").on("click", function () {
  event.preventDefault();
  let currentPinValue = $("#createpinInput").val();
  let createUserInput = $("#createuser").val();
  if (currentPinValue.length < 4) {
    $("#createpinInput").css("color", "red");
    setTimeout(function () {
      $("#createpinInput").css("color", "black");
    }, 500);
  } else {
    var userobject = {
      Name: createUserInput,
      available: true,
      PIN: currentPinValue,
      requestRecieved: {},
      requestmade: {},
    };
    users.push(userobject);
    $("#firstStageCreate").css("display", "none");
    $("#secondStageCreate").css("display", "block");
    $("#logIn").css("display", "none");
    $("#logout").css("display", "block");
    $("#CreatUser").css("display", "none");
    $("#welcomelogin").html("Welcome " + createUserInput + "!");
  }
});
//animation for win/lose Game
function beginslotmachinewin(choice1, choice2, method, gamewinlose) {
  setTimeout(function () {
    $(".shadowcontainer").animate(
      { width: "0", height: "100px", left: "-10px", top: "10px" },
      1000
    );
    $(".shadowcontainer2").animate(
      { width: "0", height: "0", left: "-10px" },
      1000
    );
    $(".shadowcontainer3").animate(
      { width: "0", height: "0", left: "-10px" },
      1000
    );
    $(".shadowcontainer4").animate(
      { width: "100px", height: "0", top: "110px", right: "10px" },
      1000
    );
    $(".shadowcontainer5").animate(
      { width: "0", height: "0", top: "110px", right: "110px" },
      1000
    );

    setTimeout(function () {
      $(".shadowcontainer6").animate(
        { width: "95px", height: "5px", top: "10px", right: "10px" },
        700
      );
      $(".shadowcontainer7").animate(
        { width: "5", height: "95", top: "15px", right: "105px" },
        700
      );
      $(".shadowcontainer8").animate(
        { width: "5px", height: "5px", top: "10px", right: "105px" },
        700
      );

      setTimeout(function () {
        $("#rockimg").css("margin", choice1 + " 0px 0px 0px");
        $("#paperimg").css("margin", method + " 0px 0px 0px");
        $("#scissorsimg").css("margin", choice2 + " 0px 0px 0px");
        $("#lizardimg").css("margin", "-7000px 0px 0px 0px");
        $("#spockimg").css("margin", gamewinlose + " 0px 0px 0px");
      }, 700);
    }, 1000);
  }, 1000);
  setTimeout(function () {
    $("#rockimg").css("margin", "-300px 0px 0px 0px");
    $("#paperimg").css("margin", "-400px 0px 0px 0px");
    $("#scissorsimg").css("margin", "0px 0px 0px 0px");
    $("#lizardimg").css("margin", "-200px 0px 0px 0px");
    $("#spockimg").css("margin", "-100px 0px 0px 0px");

    setTimeout(function () {
      $(".shadowcontainer6").animate(
        { width: "100px", height: "0px", top: "10px", right: "10px" },
        700
      );
      $(".shadowcontainer7").animate(
        { width: "0", height: "100", top: "10px", right: "110px" },
        700
      );
      $(".shadowcontainer8").animate(
        { width: "0px", height: "0px", top: "10px", right: "110px" },
        700
      );

      setTimeout(function () {
        $(".shadowcontainer").animate(
          { width: "15px", height: "85px", left: "-10px", top: "25px" },
          1000
        );
        $(".shadowcontainer2").animate(
          { width: "15px", height: "15px", left: "-10px" },
          1000
        );
        $(".shadowcontainer3").animate(
          { width: "15px", height: "15px", left: "-10px" },
          1000
        );
        $(".shadowcontainer4").animate(
          { width: "85px", height: "15px", top: "110px", right: "10px" },
          1000
        );
        $(".shadowcontainer5").animate(
          { width: "15px", height: "15px", top: "110px", right: "95px" },
          1000
        );
        setTimeout(function () {
          clicked = true;
        }, 1000);
      }, 700);
    }, 4400);
  }, 10000);
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
    outcome = "lose";
    $("#totalgame").addClass("tie");
    setTimeout(function () {
      $("#totalgame").removeClass("tie");
    }, 2000);
    clicked = true;
    $("#explaination").empty();
  } else {
    determinetext(personchoice, computerchoice);

    if (winlose === true) {
      console.log("youlose");
      outcome = "lose";
      $("#totalgame").addClass("loss");
      setTimeout(function () {
        $("#totalgame").removeClass("loss");
      }, 2000);
      yournumberloss = parseInt($("#yourlossnumber").html());
      theirnumberwin = parseInt($("#theirwinnumber").html());
      $("#yourlossnumber").html(yournumberloss + 1);
      $("#theirwinnumber").html(theirnumberwin + 1);

      determinetext(computerchoice, personchoice);
      beginslotmachinewin(
        slotMechanismLocation[choiceplayer1],
        slotMechanismLocation[choiceplayer2],
        slotMechanismLocation[newChoicemethod],
        slotMechanismLocation[outcome]
      );
      winlose = true;
    } else {
      console.log("youwin");
      outcome = "win";
      $("#totalgame").addClass("win");
      setTimeout(function () {
        $("#totalgame").removeClass("win");
      }, 2000);
      yournumberwin = parseInt($("#yourwinnumber").html());
      theirnumberloss = parseInt($("#theirlossnumber").html());
      $("#yourwinnumber").html(yournumberwin + 1);
      $("#theirlossnumber").html(theirnumberloss + 1);
      beginslotmachinewin(
        slotMechanismLocation[choiceplayer1],
        slotMechanismLocation[choiceplayer2],
        slotMechanismLocation[newChoicemethod],
        slotMechanismLocation[outcome]
      );
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
      choiceplayer1 = choice1;
      choiceplayer2 = choice2;
      if (choicemethod[i] === "crushes") {
        newChoicemethod = "crushes" + i;
      } else {
        newChoicemethod = choicemethod[i];
      }
      winlose = false;
    }
  }
}
