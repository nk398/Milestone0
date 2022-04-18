
INTEGRATION:
---------------


Within <head> </head> section include:
-----------------------------------------

<script src="https://www.w3schools.com/lib/w3.js"></script>


Within the <body> </body> section :
------------------------------------

<body> 

<div w3-include-html="file1.html"></div>
<div w3-include-html="file2.html"></div>

<!-----------  Integrate html files with Jquery ---->
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<div class="DivId"></div>
<script type="text/javascript">
  $(function(){
    $(".DivID").load("file3.html");
  });
</script> 

<!-----------w3 include function------------->
<script>
includeHTML();
</script>

</body>

**********************************************************************
Requirement:
-------------
Back end: Any personal web server on local machine
Front End: Any Web browser
Internet connection 
************************************************************************