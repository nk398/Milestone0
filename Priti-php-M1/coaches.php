<html>
<head>

<script src="sports/coaches.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="style/menubar.css">
</head>
<body>
<!------------------Header-------------------------------------->
<?php
include("header.php");
include("menubar.php");
?>
<!-------------------Coaches Table ------------------------------>
<h3 id="head-id" class="w3-red" style="margin-top:0; padding-top: 8px; padding-bottom: 8px; text-align: center;"></h3>
<div id="table-div" class="w3-container">
</div>

<!-- Script to populate table with coaches of the game  --->
<script>

//Temp to test: coaches.html?game=m_basketball
//get game from url querystring
//coaches.php?game=m_baseball

const params = new URLSearchParams(window.location.search)
var game = params.get('game')

/////// Get the correct object-array of coaches, corresponding to the game 
var coaches = all_coaches.get(game);
var gamename = all_titles.get(game);
$("#head-id").html("2021-22 " + gamename + " Coaching Staff");

/////////Create Table and populate

$("#table-div").append('<table id="tabl" class="w3-table-all w3-hoverable"></table>');
$("#tabl").append('<tr id="rowh" class="w3-black"></tr>');
$("#rowh").append('<th><b><i>IMAGE</i></b></th>');
$("#rowh").append('<th><b><i>NAME</i></b></th>');
$("#rowh").append('<th><b><i>TITLE</i></b></th>');
$("#rowh").append('<th><b><i>EMAIL</i></b></th>');
$("#rowh").append('<th><b><i>PHONE</i></b></th>');


for (var i = 0; i < coaches.length; i++) {
var coach = coaches[i];
var row =  $("#tabl").append('<tr></tr>');
row.append('<td><img width="100" src=' + coach.image + '/></td>');
row.append('<td style="vertical-align: middle;">' + coach.name + '</td>');
row.append('<td style="vertical-align: middle;">' + coach.title + '</td>');
row.append('<td style="vertical-align: middle;">' + coach.email + '</td>');
row.append('<td style="vertical-align: middle;">' + coach.phone + '</td>');
}


</script>
<!----------------------------Sponsors & Footer------------------------------------>
<?php
include("sponsors.php");
include("footer.php");
?>
<!---------------w3-include-html--------------------------------------->
<script>
w3.includeHTML();
</script>

</body>
</html>