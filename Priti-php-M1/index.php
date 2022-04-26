<!DOCTYPE html>
<html>
<head>
<title>NJIT Highlanders</title>
<meta name="viewport" content="width=device-width, initial-scale=1">

<!-----------Sports News ---------------------->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="sports-news/sports-news.js"></script>

<!----------Star Player of the Month ---------->
<link rel="stylesheet" href="star/styles.css">

<!----------Events ---------------------------->

<link rel="stylesheet" href="events/styles.css">

<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;900&display=swap" rel="stylesheet">

<!-----View Archives --------------------->
<link rel="stylesheet" href="archives/css/styles.css">
<link rel="stylesheet" href="archives/carousel.css">

<!----------Rolltech---------------------->

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<!--------Menubar--------------------->

<link rel="stylesheet" href="style/w3.css">
<link rel="stylesheet" href="style/menubar.css">

</head>

<body>
<?php
include("events.php");
include("header.php");
include("menubar.php");
include("sports-news.php");
include("star.php");
include("archives.php");
include("rolltech.php");
include("adsense.php");
include("sponsors.php");
include("footer.php");
?>
</body>
</html>
