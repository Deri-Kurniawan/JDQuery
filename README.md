# Javascript Deri Query Beta v0.1.1
Javascript Deri Query is javascript queries library

## Get Started

### Javascript Deri Query CDN

    <script src="https://deri-kurniawan.w3spaces.com/JDQuery-v0.1.1.min.js"></script>

### Change Script Version CDN
If you want to change your script version, you need to change version digits on JDQuery file.
Rename it just like : 

    JDQuery-vx.x.x.min.js

for example :

    Before : https://deri-kurniawan.w3spaces.com/JDQuery-v0.1.0.min.js
    After  : https://deri-kurniawan.w3spaces.com/JDQuery-v0.5.0.min.js

### Starter Template
 
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- JDQuery CDN -->
        <script src="https://deri-kurniawan.w3spaces.com/JDQuery-v0.1.1.min.js"></script>
        <title>Document</title>
    </head>

    <body>
        <h1>Hello JDQuery!</h1>
    </body>

    </html>

### Example Template

    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- JDQuery CDN -->
        <script src="https://deri-kurniawan.w3spaces.com/JDQuery-v0.1.1.min.js"></script>
        <title>Document</title>
    </head>

    <body>
        <div class="container">
            <h1 id="welcome-title"></h1>

            <input type="text" name="inputAuthorElement" id="inputAuthorElement" value="Deri Kurniawan" placeholder="">
            <p id="showInputAuthorValue">Value of Input : </p>
            <ul>
                <li class="data">Data 1</li>
                <li class="data">Data 2</li>
                <li class="data">Data 3</li>
            </ul>
            <span></span>
        </div>

        <script>
            $("#welcome-title").addClass("test");

            $(".container").attr("style", "text-align:center; font-family:sans-serif");

            $("h1#welcome-title").html("Javascript Deri Query");

            $("#showInputAuthorValue").text($("#inputAuthorElement").val());

            $("#inputAuthorElement").on("input", (e) => {
                e.preventDefault();
                $("#showInputAuthorValue").text($("#inputAuthorElement").val());
            });

            $("span").html(`Total Length Of List : ${$$("ul > li.data").length}`);
        </script>
    </body>

    </html>
    
### Docs Comming Soon!

### Enjoy your query!
