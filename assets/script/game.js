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
// let findrachel = users.orderByChild("available").equalTo(true).limitToLast(8);
// findrachel.on("value", function (snapshot) {
//   console.log("worked");
//   console.log(snapshot.val());
// });
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
const imageObjectKey = {
  1: "https://i.imgur.com/toPiDMv.png",
  2: "https://i.imgur.com/fMjV0az.png",
  3: "https://i.imgur.com/nquo5H4.png",
  4: "https://i.imgur.com/GpKFRuK.png",
  5: "https://i.imgur.com/qyYSz1v.png",
  6: "https://i.imgur.com/yNGnXrk.png",
};
//create
// game.push(gameobject);
// let currentuser = users
//   .child()

//   .push(userobject);
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
let loggedInName;
let selectedAvatar = 1;
let loggedIn = false;
let connectedGameInPlay = false;
let gamename = "graham9";
// player class
class PLayer {
  constructor(choice, name) {
    this.name = name;
    this.choice = choice;
  }
}

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
function setupbuttons() {
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
        $("#yourchoicestatus").html("STATUS: chosen");
        personchoice = aviablechoices[i];
        console.log("this is the gamename" + gamename);
        if (connectedGameInPlay === true) {
          if (gamename === loggedInName) {
            firebase
              .database()
              .ref("game/" + gamename)
              .update({
                player1Choice: personchoice,
              });
          } else {
            console.log(gamename);
            firebase
              .database()
              .ref("game/" + gamename)
              .update({
                player2Choice: personchoice,
              });
          }
        } else {
          console.log(personchoice);
          comparetworesults(personchoice, computerchoice);
        }
      }
    });
  }
}
setupbuttons();

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

//in the case that the opositions info has not already been shared this will go and fetch it
function getOtherUsersInfo(name) {
  return firebase
    .database()
    .ref("/users/" + name)
    .once("value")
    .then(function (snapshot) {
      let avatar = snapshot.val().avatarimage;
      console.log("this is the avatar number:" + avatar);
      let imageSRC = imageObjectKey[avatar];
      $("#rightside").attr("src", imageSRC);
    });
}
//VIEW AVAILABLE USERS:
//database is queried for 10 users who are available
//each user is then displayed in a list next to a request game button
//updates on refresh button
//and upon User filling in search bar
function findAvailableUser() {
  //   var userId = firebase.auth().currentUser.uid;
  // return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
  //   var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';

  // });
  // return firebase
  //   .database()
  //   .ref("/users")
  //   .orderByChild("available")
  //   .equalTo(true)
  //   .once("value")
  //   .then((snapshot) => {
  //     snapshot.forEach((child) => {
  //       const post = child.val();
  //       post.id = child.key;

  //       console.log(post.id);
  //     });
  //   });
  let findUsers = users.orderByChild("available").equalTo(true).limitToLast(8);
  findUsers.once("value", function (snapshot) {
    console.log("worked");
    let avialableUsers = snapshot.val();
    let usersKeys = Object.getOwnPropertyNames(avialableUsers);
    console.log(usersKeys);
    $(".usersBox2").empty();
    $(".usersBox2").append(
      "<div class='nonavailiblity'>No One Available</div>"
    );
    for (let index = 0; index < usersKeys.length; index++) {
      const element = usersKeys[index];
      let individualItem = avialableUsers[element];
      let name = individualItem.Name;
      let picture = individualItem.avatarimage;
      if (name === loggedInName) {
        console.log(usersKeys.length);
        if (usersKeys.length === 1) {
          $(".nonavailiblity").css("display", "block");
        }
      } else {
        $(".usersBox2").append(
          "<div class=individualUser id='" +
            name +
            "'><img src='" +
            imageObjectKey[picture] +
            "' class='avatarchoice3'/><div class=userNameFindGame id='finduser" +
            index +
            "'>" +
            name +
            "</div><div class=requestbutton>Request Game</div></div>"
        );
      }
    }
  });
}

//search your data for requested Games
function findrequestedgames() {
  let findUsersrequests = users.orderByChild("Name").equalTo(loggedInName);
  findUsersrequests.on("value", function (snapshot) {
    let avialableUsers = snapshot.val();
    let avialableUsers2 = avialableUsers[loggedInName].requestRecieved;
    console.log(avialableUsers2);
    if (typeof avialableUsers2 === "undefined") {
      $(".nonavailiblityrequest").css("display", "block");
    } else {
      let objectname = Object.getOwnPropertyNames(avialableUsers2);
      console.log();
      $(".nonavailiblityrequest").css("display", "none");
      for (let index = 0; index < objectname.length; index++) {
        const itemname = objectname[index];
        const name = avialableUsers2[itemname];
        $(".usersBox4").append(
          "<div class=individualUser id='" +
            name +
            "'><img src='https://i.imgur.com/nquo5H4.png' class='avatarchoice3'/><div class=userNameFindGame id='finduser" +
            index +
            "'>" +
            name +
            "</div><div class=Acceptbutton>Accept Game</div></div>"
        );
      }
    }
  });
}

//refresh avaible Users display
$(".refreshbutton").on("click", function () {
  if (wait === true) {
  } else {
    wait = true;
    $(".refreshbutton").css("transform", "rotate(" + degrees + "deg)");
    setTimeout(function () {
      degrees = degrees + 360;
      console.log(degrees);
      findAvailableUser();
      wait = false;
    }, 1000);
  }
});

//REQUEST ACCEPTED:
//If requested user is available
//game is built
//BUILD GAME:
//Once a request is accepted a game is then generated with both player?ID
//and both player?choice = "null"
//userInformation is updated by emptying requestsRecieved & requestsMade for both players
//userinformation is updated by changing available to false
//game is queried using the player?id associated with the curent user
//accept a game request
$(document).on("click", ".Acceptbutton", function (event) {
  let parentdiv = $(event.target).parent("div");
  let finddiv = $(parentdiv).attr("id");
  let findDivID = "#" + finddiv;
  //make sure user is avialble
  return firebase
    .database()
    .ref("/users/" + finddiv)
    .once("value")
    .then(function (snapshot) {
      //if avialable allow push

      let available = snapshot.val().available;
      let avatar = snapshot.val().avatarimage;
      console.log("this is the avatar number:" + avatar);
      let imageSRC = imageObjectKey[avatar];
      if (available === true) {
        $("#rightside").attr("src", imageSRC);
        $(findDivID).css("border-color", "green");
        $(findDivID).children(".userNameFindGame").html("Accepted");
        setTimeout(function () {
          $(findDivID).remove();
        }, 1500);
        //make a game with the name of the accepter
        firebase
          .database()
          .ref("game/" + loggedInName)
          .set({
            player1: loggedInName,
            player1Choice: "waiting",
            player2: finddiv,
            player2Choice: "waiting",
          });
        //find the requester and update them to inGame
        firebase
          .database()
          .ref("users/" + finddiv)
          .update({
            inGame: true,
            requestRecieved: {},
            available: false,
            playing: loggedInName,
            owner: false,
          });
        firebase
          .database()
          .ref("users/" + loggedInName)
          .update({
            inGame: true,
            requestRecieved: {},
            available: false,
            playing: finddiv,
            owner: true,
          });
      } else {
        $(findDivID).css("border-color", "red");
        $(findDivID).children(".userNameFindGame").html("unavailable");
        setTimeout(function () {
          $(findDivID).remove();
        }, 1500);
      }
      //inGame if inGame search for name in games

      //once ingame is active then sets up game to work with display
    });
});
//MAKE REQUEST:
//user clicks request game button
//current users made requests is updated
//selected users request received is updated
//both of these are displayed on user screen
//request a game from another user
$(document).on("click", ".requestbutton", function (event) {
  console.log("hi");
  let parentdiv = $(event.target).parent("div");
  let finddiv = $(parentdiv).attr("id");
  let findDivID = "#" + finddiv;
  console.log(finddiv);
  // searchForSpecificUser(finddiv);

  return firebase
    .database()
    .ref("/users/" + finddiv)
    .once("value")
    .then(function (snapshot) {
      //if avialable allow push
      let available = snapshot.val().available;
      if (available === true) {
        console.log(snapshot.val());
        firebase
          .database()
          .ref("users/" + finddiv + "/requestRecieved")
          .push(loggedInName);
      } else {
        $(findDivID).css("border-color", "red");
        $(findDivID).children(".userNameFindGame").html("unavailable");
        setTimeout(function () {
          $(findDivID).remove();
        }, 1500);
      }
    });
  // findUser
  //   .on("value", function (snapshot) {
  //     return snapshot.val();
  //     // userid = Object.keys(snapshot.val())[0];
  //     console.log(response);
  //     // requestrecievedarray =
  //     //   response[Object.keys(snapshot.val())[0]].requestRecieved;
  //     // console.log(requestrecievedarray);
  //     // console.log(requestrecievedarray);
  //   })
  //   .then(() => {
  //     // firebase
  //     //   .database()
  //     //   .ref("users/" + finddiv)
  //     //   .update({
  //     //     requestRecieved:
  //     //     ),
  //     //   });
  //   });
  //     var ref = Firestore.instance.document("data_collection/data");
  // ref.setData({
  //   "field": FieldValue.arrayUnion(["World"]),
  // }, merge: true);`
});
function searchForSpecificUser(searchterm) {
  // let findUser = users.orderByChild("A_Name").equalTo("A_" + searchterm);
  // findUser.on("value", function (snapshot) {
  //   let response = snapshot.val();
  //   userid = Object.keys(snapshot.val())[0];
  //   console.log(userid);
  //   requestrecievedarray =
  //   response[Object.keys(snapshot.val())[0]].requestRecieved;
  //   console.log(requestrecievedarray);
  //   console.log(requestrecievedarray);
  // });
}
function setUpupdateconnectionOnLogin(login) {
  var inGameChecker = firebase.database().ref("users/" + login + "/inGame");
  let uppercase = login.toUpperCase() + " CHOICE";
  $("#yourChoice").html(uppercase);
  inGameChecker.on("value", function (snapshot) {
    console.log(snapshot.val());
    let inGame = snapshot.val();
    if (inGame === true) {
      return firebase
        .database()
        .ref("/users/" + loggedInName)
        .once("value")
        .then(function (snapshot) {
          let oponent = snapshot.val().playing;
          console.log(oponent);
          let owner = snapshot.val().owner;
          console.log(loggedInName);
          let uppercaseO = oponent.toUpperCase() + " CHOICE";
          $("#theirChoice").html(uppercaseO);
          if (owner === true) {
            gamename = loggedInName;
            let game = firebase.database().ref("game/" + loggedInName);
            game.on("value", function (snapshot) {
              //game is now in play
              $("#oponent").html(oponent);
              connectedGameInPlay = true;
              console.log(snapshot.val());
              let gameObject = snapshot.val();
              dealWithgameobject(gameObject, oponent);
            });
          } else {
            getOtherUsersInfo(oponent);
            gamename = oponent;
            let game = firebase.database().ref("game/" + oponent);
            game.on("value", function (snapshot) {
              //game is now in play
              $("#oponent").html(oponent);
              connectedGameInPlay = true;
              console.log(snapshot.val());
              let gameObject = snapshot.val();
              dealWithgameobject(gameObject, loggedInName);
            });
          }
        });
    } else {
      console.log("not playing a game");
      connectedGameInPlay = false;
    }

    //if equals true run search
    //set up with values

    //if equals false
    // firebase
    //   .database()
    //   .ref("games/" + gamevalue)
    //   .on("value", function (snapshot) {});

    //run with default game
    //default game never changes
  });
}
//this function handles changes in the firebase Game object
function dealWithgameobject(game, owner) {
  let player1 = owner;
  let player1Choice = game.player1Choice;
  let player2Choice = game.player2Choice;
  if (player1Choice === "waiting" || player2Choice === "waiting") {
    if (player1 === loggedInName) {
      if (player2Choice === "waiting") {
        $("#yourchoicestatus").html("STATUS: Pending...");
      } else {
        $("#yourchoicestatus").html("STATUS: Chosen");
      }
      if (player1Choice === "waiting") {
        $("#computerchoicestatus").html("STATUS: Pending...");
      } else {
        $("#computerchoicestatus").html("STATUS: Chosen");
      }
    } else {
      if (player2Choice === "waiting") {
        $("#computerchoicestatus").html("STATUS: Pending...");
      } else {
        $("#computerchoicestatus").html("STATUS: Chosen");
      }
      if (player1Choice === "waiting") {
        $("#yourchoicestatus").html("STATUS: Pending...");
      } else {
        $("#yourchoicestatus").html("STATUS: Chosen");
      }
    }
  } else {
    if (player1 === loggedInName) {
      comparetworesults(player2Choice, player1Choice);
    } else {
      comparetworesults(player1Choice, player2Choice);
    }
  }
}
//RESET GAME:
//Player?choices returned too null
//this Resets games after the animation has finished
function resetgame() {
  firebase
    .database()
    .ref("game/" + gamename)
    .update({
      player2Choice: "waiting",
      player1Choice: "waiting",
    });
}
//Logout
//if in game close game for opponent
//set charactor to unavailable if out of game.
function logout() {
  if (inGame === true) {
  } else {
  }
}
//LOG-IN:
//User inputs name and submits
//Database is queried for name
//if name exist user is directed to enter pin
//User inputs pin
//if pin matches the User is told they are logged in
//userinformation is updated by changing available to true
//user can now view avialable users and request status

//checks name against data base to make sure you can't have duplicates
//opens pin box
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
//logIn after Pin is entered
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
    let userimage = locatedUserName[objectname].avatarimage;
    loggedInName = userName;

    if (currentPinValue === actualPIN) {
      loggedIn = true;
      //logIn success
      $("#welcomelogin").html("Welcome " + userName + "!");
      $("#playerNameYou").html(userName);
      $("#logInMain").css("display", "none");
      $("#logIn").css("display", "none");
      $("#logout").css("display", "block");
      $("#CreatUser").css("display", "none");
      $("#logInfirst").css("display", "none");
      findAvailableUser();
      setUpUsersAvatarOnBoard("you", userimage);
      findrequestedgames();
      setUpupdateconnectionOnLogin(userName);
    } else {
      $("#logpinInput").css("color", "red");
      $("#logininput").val("Bad Pin");
      setTimeout(function () {
        $("#logpinInput").css("color", "black");
      }, 500);
    }
  }
});
//MENU OPTIONS:
//open and closing Find a Game
$("#findgame").on("click", function () {
  if (findgame === true) {
    if (loggedIn === true) {
      $("#findgamemain").css("display", "none");
      $("#logInfirst").css("display", "none");
    } else {
      $("#findgamemain").css("display", "none");
      $("#logInfirst").css("display", "none");
    }
    findgame = false;
  } else {
    if (loggedIn === true) {
      $("#findgamemain").css("display", "block");
    } else {
      $("#logInfirst").css("display", "block");
    }
    findgame = true;
  }
});
//open and closing Login
$("#logIn").on("click", function () {
  if (logIn === true) {
    $("#logInMain").css("display", "none");
    logIn = false;
  } else {
    $("#firstStageCreate").css("display", "none");
    $("#logInMain").css("display", "block");
    logIn = true;
    createUser = false;
  }
});
//open and closing Create User
$("#CreatUser").on("click", function () {
  if (createUser === true) {
    $("#firstStageCreate").css("display", "none");
    createUser = false;
  } else {
    $("#logInMain").css("display", "none");
    $("#firstStageCreate").css("display", "block");
    logIn = false;
    createUser = true;
  }
});

//AVATAR STUFF:
//turns chosen avatar red updates selected avatar
$(".avatarshadow").on("click", function () {
  let targetdiv = "#" + event.target.id;
  let numberofImage = targetdiv.slice(-1);
  selectedAvatar = parseInt(numberofImage);
  $(".avatarshadow").removeClass("redshadow");
  $(targetdiv).addClass("redshadow");
  console.log(selectedAvatar);
});
//skip choosing avatar
$("#skipavatarbutton").on("click", function () {
  $("#secondStageCreate").css("display", "none");
  $("#findgame").css("display", "block");
});
//save avatar preference to data base
$("#saveavatarbutton").on("click", function () {
  firebase
    .database()
    .ref("users/" + loggedInName)
    .update({
      avatarimage: selectedAvatar,
    });
  $("#secondStageCreate").css("display", "none");
  setUpUsersAvatarOnBoard("you", selectedAvatar);
  $("#findgame").css("display", "block");
});
//the function aligns the visual avatars with the firebase preference
function setUpUsersAvatarOnBoard(user, imagenumber) {
  let imageSRC = imageObjectKey[imagenumber];
  if (user === "you") {
    $("#leftside").attr("src", imageSRC);
  } else {
    $("#rightside").attr("src", imageSRC);
  }
}
//CREATE USER:
//User inputs name and submits
//database is queried for name
//if name exist user is told name is unavialable
//if name is aviable user is prompted to put in a pin
//user is updated with pin

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
    // var userobject = {

    // };
    firebase
      .database()
      .ref("users/" + createUserInput)
      .set({
        avatarimage: 1,
        Name: createUserInput,
        available: true,
        PIN: currentPinValue,
        A_Name: "A_" + createUserInput,
        inGame: false,
      });
    // users.push(userobject);
    loggedIn = true;
    $("#firstStageCreate").css("display", "none");
    $("#secondStageCreate").css("display", "block");
    $("#findgame").css("display", "none");
    $("#logIn").css("display", "none");
    $("#logout").css("display", "block");
    $("#CreatUser").css("display", "none");
    $("#logInfirst").css("display", "none");
    $("#welcomelogin").html("Welcome " + createUserInput + "!");
    $("#playerNameYou").html(createUserInput);
    loggedInName = createUserInput;
    findAvailableUser();
    findrequestedgames();
    setUpupdateconnectionOnLogin(createUserInput);
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
        $(".panel").removeClass("flip");
        $("#yourchoicestatus").html("STATUS: pending..");
        $("#computerchoicestatus").html("STATUS: pending..");
        setTimeout(function () {
          if (connectedGameInPlay === true) {
            resetgame();
          } else {
            getcomputerchoice();
          }
          clicked = true;
          $("#explaination").css("max-width", "0");
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
  $("#computerchoicestatus").html("STATUS: chosen");
}
getcomputerchoice();

$(".dropdownbutton").mousedown(function () {
  $("#navigatorspace").empty();
  $("#navigatorspace").append(
    "<img src='./assets/images/dropdownmenu2.png' class='dropdownbutton'>"
  );
  $(".dropdownbutton").css("border-style", "inset");
});
$("#button").on("click", function () {
  $(".panel").removeClass("flip");
});
$("#button2").on("click", function () {
  $(".panel").addClass("flip");
});
// This function will detmine if you won or not as well as call
// all necesary user interface adjusting functions
function comparetworesults(personchoice, computerchoice) {
  $("#youchoice").html("You chose: " + personchoice);
  $("#youchoice").html(
    "<img src='./assets/images/" + personchoice + ".png' class='image2'>"
  );

  $("#computerchoice").html(
    "<img src='./assets/images/" + computerchoice + ".png' class='image2'>"
  );
  setTimeout(function () {
    $(".panel").addClass("flip");
  }, 1000);
  $("#explaination").empty();
  $("#explaination").css("max-width", "100px");
  if (personchoice === computerchoice) {
    console.log("tie");
    outcome = "lose";
    $("#totalgame").addClass("tie");
    setTimeout(function () {
      $("#totalgame").removeClass("tie");
      $("#computerchoicestatus").html("STATUS: pending..");
    }, 2000);
    $("#explaination").css("max-width", "0px");
    $("#explaination").empty();
    setTimeout(function () {
      $("#yourchoicestatus").html("STATUS: pending..");
      $(".panel").removeClass("flip");

      setTimeout(function () {
        if (connectedGameInPlay === true) {
          resetgame();
        } else {
          getcomputerchoice();
        }
        clicked = true;
      }, 1000);
    }, 3000);
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
