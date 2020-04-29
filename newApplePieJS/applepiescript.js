
var users = [
    {ID: 9876, Name: "Lucas Sperb", picture: "<br><img src=https://pbs.twimg.com/profile_images/1049240766692974593/VlfspzfG_400x400.jpg></img>", preferences: [0,2,4,6,8,10,12,14,16,18,20], matches: []},
    {ID: 8765, Name: "Claudia", picture: "<br><img src=https://pbs.twimg.com/profile_images/806082380226265088/0wvLjeNW_400x400.jpg></img>", preferences: [1,3,5,7,9,11,13,15,17,19], matches: []},
    {ID: 7654, Name: "Uttam", picture: "<br><img src=https://pbs.twimg.com/profile_images/968232588958560256/IfOqS8l2_400x400.jpg></img>", preferences: [0,3,5,7,9,10,12,15,17,19], matches: []}
];

var currentUser = {ID: 6543, Name: "Vasco", picture: "<br><img src=https://pbs.twimg.com/profile_images/1049240766692974593/VlfspzfG_400x400.jpg></img>", preferences: [0,2,4,6,8,10,12,14,16,18], matches: []};

var clickedElements = [];

$(document).ready(function() {

    populateTableWithUsers(users);

    var children = $("tr").children();

    $("a").click(function(event) {
        alert("Nah, nothing to see here.");
        $("a").text("lol");
        $("a").css("font-weight", "bold");
    });

    function howMuchofAMatch(a, b) {
        return a.filter(function(i) {
          return b.includes(i);
        }).length;  
      }

    $("#calculate").click(function(event) {
        console.log('I was clicked');
        for(var i = 0; i < users.length; i++){
        var score = howMuchofAMatch(currentUser.preferences, users[i].preferences);
            console.log('score' + score);

            console.log(currentUser.matches);

            console.log('user ID' + users[i].ID);
            if(score==10){
            currentUser.matches.push(users[i].ID)
            console.log(currentUser.matches);   

        }
    }

         matchhtml ="<h1>" +  + "</h1>";
         $(matchhtml).appendTo("#calculate");
         $("<br><img src=https://ak7.picdn.net/shutterstock/videos/17965987/thumb/6.jpg></img>");

    });
    
    function populateTableWithUsers(data) {

        data.forEach(function(users) {
            users =
                "<tr><td>" + users.Name + "</td>" +
                "<td>" + users.ID + "</td>" +
                "<td>" + users.matches + "</td>" +
                "<td>" + users.picture + "</td>" +
                "<td>" + users.preferences + "</td></tr>";
            $(users).appendTo("#user-data");
        });
    };
});

