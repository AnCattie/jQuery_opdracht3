$(document).ready(function() {
    //Oefening 1
    /*Bouw een html-pagina met een knop en een tekstveld waarin het aantal klikken op de knop wordt weergegeven.*/
    var count = 0;
    $("#update").click(function() {
        count++;
        $("#counter").html(+count);
    });

    //Oefening 2
    /* Bouw een html pagina met een "+" knop, een "-" knop en een tekstveld waarin het aantal staat die verhoogd of verlaagd wordt volgens de aangeklikte knoppen.*/
    $("#plus").click(function() {
        $("#aantal").html(function(i, val){ 
            return val*1+1 });
    });
    $("#min").click(function(){
        $("#aantal").html(function(i, val){
            return val*1-1});
    });

    //Oefening 3
    /*Bouw een html pagina met een knop en een tekstveld. Het doel is om een getal tussen 0 en 100 te vinden. Voor elk antwoord antwoordt de pagina:
    meer | minder | juist
    Wanneer het antwoord is gevonden, krijgen we het aantal tests dat we hebben nodig gehad te zien via een alert.*/
    let keuzes = 0;
    let random = Math.floor(Math.random() * 99) + 1;

    $( "#clickme" ).click(function() {
    keuzes++;
    let guessvalue = $("#value").val();
    if(random==guessvalue){
        alert("juist, aantal keer geraden: " + keuzes);
    }
    else if(random<guessvalue){
        alert("minder");
    }
    else{
    alert("meer");
    }
    
    });

    //Oefening 4
    /*Bouw een html pagina met 5 knoppen en een rechthoek. Elke knop veroorzaakt een actie op de rechthoek.
    Knop 1: verhoogt de hoogte met 10px, als deze groter is dan 100px, wordt de hoogte gereset naar 10px.
    Knop 2: verandert de rechthoek in groen
    Knop 3: reset de oorspronkelijke kleuren
    Knop 4: Verwijdert de rechthoek
    Knop 5: verschijnt weer de rechthoek*/

    let hoogte = 10;
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.rect(20, 20, 150, hoogte);
    ctx.stroke();

    $("#hoogte").click(function(){
        hoogte=hoogte+10;
        if (hoogte>=100){
            hoogte=10;
        }
        ctx.clearRect(0,0, c.width, c.height); 
        ctx.beginPath();
        ctx.rect(20, 20, 150, hoogte);
        ctx.stroke();
    });

    $("#kleur").click(function(){
        ctx.clearRect(0,0, c.width, c.height); 
        ctx.beginPath();
        ctx.rect(20, 20, 150, hoogte);
        ctx.fillStyle = "green";
        ctx.fill();
        ctx.stroke();
        
    });

    $("#reset").click(function(){
        ctx.clearRect(0,0, c.width, c.height); 
        ctx.beginPath();
        ctx.rect(20, 20, 150, hoogte);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.stroke();
        
    });

    $("#delete").click(function(){
        ctx.clearRect(0,0, c.width, c.height);
    });

    $("#show").click(function(){
        ctx.stroke();
    });

    //Oefening 5
    /*Bouw een html pagina met een vierkant. Wanneer een richtingstoets wordt ingedrukt (pijltjes toetsen), beweegt het vierkantje 10px in de juiste richting.
    BONUS: Wanneer het blok de ene kant van de pagina bereikt, moet het aan de andere kant weer verschijnen.*/

    let deltaX=0;
    let deltaY=0;
    let x = document.getElementById("vierkant");
    let y = x.getContext("2d");
    y.rect(20, 20, 20, 20);
    y.stroke();

    $(document).keydown(function(e) {
        switch(e.which) {
            case 37: // left
            deltaX -= 10;
            break;

            case 38: // up
            deltaY -= 10;
            break;
            
            case 39: // right
            deltaX += 10;
            break;

            case 40: // down
            deltaY += 10;
            break;

            default: return; // exit this handler for other keys
        }
        y.clearRect(0,0, x.width, x.height); 
        y.beginPath();
        y.rect(20+deltaX, 20+deltaY, 20, 20);
        y.stroke();
    });
});