<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<!----------Events ---------------------------->

<link rel="stylesheet" href="events/styles.css">

<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;900&display=swap" rel="stylesheet">
<!--------Menubar--------------------->

<link rel="stylesheet" href="style/w3.css">
<link rel="stylesheet" href="style/menubar.css">

</head>

<body>
<?php
include("events.php");
include("header.php");
include("menubar.php");
?>
<!-----------Video content --------------->
<div class="w3-center w3-light-grey ">
<video style="margin-top: 20px;" width="960" height="720" controls>
  <source src="mov_bbb.mp4" type="video/mp4">
  <source src="mov_bbb.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video>
</div>
<!---------------------------------------->
<?php
include("sponsors.php");
include("footer.php");
?>
</body>
</html>