
var users = [
    { Name: "Lucas Sperb", picture: "<br><img src=https://pbs.twimg.com/profile_images/1049240766692974593/VlfspzfG_400x400.jpg></img>", preferences: [0,2,4,6,8,10,12,14,16,18,20]},
    { Name: "Claudia", picture: "<br><img src=https://pbs.twimg.com/profile_images/806082380226265088/0wvLjeNW_400x400.jpg></img>", preferences: [1,3,5,7,9,11,13,15,17,19]},
    { Name: "Uttam", picture: "<br><img src=https://pbs.twimg.com/profile_images/968232588958560256/IfOqS8l2_400x400.jpg></img>", preferences: [0,3,5,7,9,10,12,15,17,20]},
];

var currentUser = {Name: "Lucas Sperb", picture: "<br><img src=https://pbs.twimg.com/profile_images/1049240766692974593/VlfspzfG_400x400.jpg></img>", preferences: [0,2,4,6,8,10,12,14,16,18,20]};



var clickedElements = [];

$(document).ready(function() {

    populateTableWithUsers(users);

    var children = $("tr").children();

    console.log(Array.isArray(children));

    $("a").click(function(event) {



        alert("Nah, nothing to see here.");
        $("a").text("lol");
        $("a").css("font-weight", "bold");
   
    });

    $("#calculate").click(function(event) {

        var coolGuyPic = users.forEach.preferences.filter(function(el) {
            return currentUser.preferences.indexOf(el) >= 0;
        }).length;

       // users.forEach.preferences(globalpreferences=> currentUser.preferences.forEach == (globalpreferences.forEach));

      //  array1.forEach(element => console.log(element));
 

    
           
         $("<br><img src=https://ak7.picdn.net/shutterstock/videos/17965987/thumb/6.jpg></img>");
 
        $(coolGuyPic).appendTo("p");
   
    });
   
});

function populateTableWithUsers(data) {

    data.forEach(function(users) {
        users =
            "<tr><td>" + users.Name + "</td>" +
            "<td>" + users.picture + "</td>" +
            "<td>" + users.preferences + "</td></tr>";
        $(users).appendTo("#user-data");
    });
};
