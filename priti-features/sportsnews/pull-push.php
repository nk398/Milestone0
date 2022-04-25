<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="pull-push.js"></script>

</head>
<body>
<div id="dummy" style="visibility:hidden; width:0; height:0">

<?php

echo file_get_contents("https://njithighlanders.com",false,stream_context_create(
    array("http" => array("user_agent" => "any"))
));
?>
</div>

<a id="sports-link" href="">
<img id="sports-image" alt="sports-news" src="" /></a>

<div id="caption">
<h1></h1>
<h3></h3>
</div>
<br/></br>
<p id="sports-para">

</p>
<button id="btn1">Display DOM elements</button>

<script id="sports-script"></script>

</body>
</html>