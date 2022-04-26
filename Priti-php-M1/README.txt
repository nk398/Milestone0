
INTEGRATION WITH PHP AS BACK-END:
-------------------------------
PHP: Hypertext Preprocessor
PHP is open source
PHP is powerful SERVER-SIDE scripting language
PHP can easily integrate with HTML, JS, CSS and databases.
PHP works with all known browsers and web servers

REQUIREMENT:
------------ 
Install a web server (like xampp) on windows
xampp is open source web server from apache
Download xampp from www.apachefriends.org 
If xampp is your personal web server on windows


INTEGRATION WITH PHP AS BACK-END:
-------------------------------
Create project folder in C:/xampp/htdocs/    (url: http://localhost/ in browser)

Rename your project .html files as .php files
Important: Change your internal links from <a href=link.html ...>  to <a href=link.php ...>
Create index.php in project folder

Add all necessary js, css in <head></head> section with path names
Add necessary .css & .js files in appropriate paths

Within body section of webpage do php include files with relative/absolute path
<body> 
<?php
include("header.php");
include("content.php");
include("footer.php");
?>

VIEW WEB PAGE in BROWSER
--------------------------
From xampp control panel, start Apache & MySQL
In browser view http://localhost/<project-folder>/


REFERENCE:
----------
W3 SCHOOLS PHP tutorial
