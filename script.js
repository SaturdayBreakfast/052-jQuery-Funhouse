$(".garage-door-opener").click(function() {
    $(".garage-door").slideUp(); 
    $(".garage-door").slideDown();
});

$(".pokeball").click(function() {
    $(".pikachu").fadeIn();
    $(".pokeball").fadeOut();
});

$(".pikachu").click(function() {
    $(".pokeball").fadeIn();
    $(".pikachu").fadeOut();
});
    
$(".control").click(function() {
$(".light-bulb").toggle();

});