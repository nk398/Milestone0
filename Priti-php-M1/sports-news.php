<div class="w3-main w3-center w3-padding-16 w3-margin-16">
<!-----------Dummy Id to recreate DOM --------------->
<div id="dummy" style="visibility:hidden; width:0px; height:0px;">

<?php

echo file_get_contents("https://njithighlanders.com",false,stream_context_create(
    array("http" => array("user_agent" => "any"))
));
?>
</div>

<!-------------------Empty Image, Link & Caption populated dynamically at backend ----------->
<div class="w3-display-container w3-text-white" >
<a id="sports-link" href="">    
<img id="sports-image" alt="sports-news" src="" class="w3-image w3-card" style="width:70%"></a>
<div  id="caption" class="w3-display-bottommiddle w3-container" style="width:70%">
<h1 ><b id="cap1"></b></h1>
<p><b id="cap2"></b></p>
</div>
</div>

</div>
<script id="sports-script"></script>