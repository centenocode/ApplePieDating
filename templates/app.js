
var currentUser = {"_id":"5eaa614fe6280703e8ec224e","name":"Lucas","preferences":["1","3","5","7","9","11","13","15","17","19"], "matches":[]}

var pic = ["images/footballgd.jpg", "images/sushi.png", "images/noise.png", "images/dontlisten1.png",
  "images/party.png", "images/milk.png", "images/pinapple.png", "images/drive.png", "images/column.png", "images/atm-line.png"
];
var questions = ["Do you like Football?", "Are you a sushi lover?", " Do you ever feel that people talk too much?",
  "Do you ever feel that you're talking and nobody is listening?", "Do you like to party?", "Do you believe that people that put the milk before the cereals are mad?", "How do you feel about pineaple in pizza?", "How do you feel about people that drive on the left lane at 30km per hour?", "How do you feel about people that listen to music in public<br> transports with a column instead of headphones?", "How do you feel about people that go to the ATM pay for 30 bills,<br> ahead of you, and you just want to withdraw money?"
];

var heartBtn = document.querySelector(".heart");
var dislikeBtn = document.querySelector(".dislike");

var imageNumber = 0;
var questionNumber = 0;
currentPreferences = [];
var users;



heartBtn.addEventListener('click', changeImage);

function changeImage() {
  saveLoveAnswer();
  console.log(currentPreferences);
  callEnds();
  imageNumber = (imageNumber + 1) % pic.length;
  questionNumber = (questionNumber + 1) % questions.length;
  document.getElementById("myImg").src = pic[imageNumber];
  document.getElementById("question").innerHTML = questions[questionNumber];
}

function saveLoveAnswer(){
  if (imageNumber == 0){ currentPreferences.push("0")}
  if (imageNumber == 1){ currentPreferences.push("2")}
  if (imageNumber == 2){ currentPreferences.push("4")}
  if (imageNumber == 3){ currentPreferences.push("6")}
  if (imageNumber == 4){ currentPreferences.push("8")}
  if (imageNumber == 5){ currentPreferences.push("10")}
  if (imageNumber == 6){ currentPreferences.push("12")}
  if (imageNumber == 7){ currentPreferences.push("14")}
  if (imageNumber == 8){ currentPreferences.push("16")}
  if (imageNumber == 9){ currentPreferences.push("18")}
}


dislikeBtn.addEventListener('click', changeImage);

function changeImage() {
  saveHateAnswer();
  console.log(currentPreferences);
  callEnds();
  imageNumber = (imageNumber + 1) % pic.length;
  questionNumber = (questionNumber + 1) % questions.length;
  document.getElementById("myImg").src = pic[imageNumber];
  document.getElementById("question").innerHTML = questions[questionNumber];

}

function saveHateAnswer(){
  if (imageNumber == 0){ currentPreferences.push("1")}
  if (imageNumber == 1){ currentPreferences.push("3")}
  if (imageNumber == 2){ currentPreferences.push("5")}
  if (imageNumber == 3){ currentPreferences.push("7")}
  if (imageNumber == 4){ currentPreferences.push("9")}
  if (imageNumber == 5){ currentPreferences.push("11")}
  if (imageNumber == 6){ currentPreferences.push("13")}
  if (imageNumber == 7){ currentPreferences.push("15")}
  if (imageNumber == 8){ currentPreferences.push("17")}
  if (imageNumber == 9){ currentPreferences.push("19")}
}


function callEnds(){
  if(imageNumber== 9){
    fetchUsers();
    calculateMatch();
    currentUser.matches.push()
    saveMatchCloud();
    console.log("it's the end")
  }
}


function fetchUsers(){var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://crudcrud.com/api/163726ed5a8444559cdc75baf2926bda/user",
  "method": "GET",
  "headers": {
    "Content-Type": "application/javascript",
    "cache-control": "no-cache",
    "Postman-Token": "6db65d2f-a8fd-46c4-9cdd-b7ce1899b0ca"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
}

var users1 = [
  {"_id":"5eaa68bae6280703e8ec225a","name":"Lucas", "preferences":["1", "3", "5", "7", "9", "11", "13", "15", "17", "19"], "matches":["5eaa68bae6280703e8ec27dc"]},
  {"_id": 9876, Name: "Lucas Sperb", picture: "<br><img src=https://pbs.twimg.com/profile_images/1049240766692974593/VlfspzfG_400x400.jpg></img>", preferences: [0,2,4,6,8,10,12,14,16,18], matches: []},
  {"_id": 8765, Name: "Claudia", picture: "<br><img src=https://pbs.twimg.com/profile_images/806082380226265088/0wvLjeNW_400x400.jpg></img>", preferences: ["1", "3", "5", "7", "9", "11", "13", "15", "17", "19"], matches: []},
  {"_id": 7654, Name: "Uttam", picture: "<br><img src=https://pbs.twimg.com/profile_images/968232588958560256/IfOqS8l2_400x400.jpg></img>", preferences: [0,3,5,7,9,10,12,15,17,19], matches: []}
];


function howMuchofAMatch(a, b) {
  return a.filter(function(i) {
    return b.includes(i);
  }).length;  
}

function calculateMatch(){

  for(var i = 0; i < users.length; i++){
  var score = howMuchofAMatch(users[i].preferences, currentPreferences);
      console.log(' score ' + score);

      console.log(currentUser.matches);

      console.log('user ID ' + users[i]._id);
      if(score==10){
      currentUser.matches.push(users[i]._id)
      console.log(currentUser.matches);   

  }
}
}

function saveMatchCloud(){

  fetch('https://crudcrud.com/api/163726ed5a8444559cdc75baf2926bda/user', {
  headers: { "Content-Type": "application/json; charset=utf-8" },
  method: 'POST',
  body: JSON.stringify({
    name: currentUser.name,
    preferences: currentUser.Preferences,
    matches: currentUser.matches
  })
})
.then(response => response.json())
.then(data => console.log(data))
}