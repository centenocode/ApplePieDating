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
heartBtn.addEventListener('click', changeImage);

function changeImage() {
  imageNumber = (imageNumber + 1) % pic.length;
  questionNumber = (questionNumber + 1) % questions.length;
  document.getElementById("myImg").src = pic[imageNumber];
  document.getElementById("question").innerHTML = questions[questionNumber];


}

dislikeBtn.addEventListener('click', changeImage);

function changeImage() {
  imageNumber = (imageNumber + 1) % pic.length;
  questionNumber = (questionNumber + 1) % questions.length;
  document.getElementById("myImg").src = pic[imageNumber];
  document.getElementById("question").innerHTML = questions[questionNumber];

}