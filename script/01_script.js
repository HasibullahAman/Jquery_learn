// $("h1").css("font-size","5rem")
// $("h1").addClass("mystyl");

// $("h1").text("<em> Hasibullah Aman </em>");
// $("h1").html("<em>")
// $("a").attr("href","https://www.instagram.com");


// $("button").click(function(){
//     $("h1").css("color","green")
// })


// $(document).keypress(function(event){
//     $("h1").text(event.key);
// })

// $("button").on("click",function(){
//     $("h1").css("color","teal")
// })


$("button").on("click",function(){
    // $("h1").hide();
    // $("h1").show();
    // $("h1").toggle();
    // $("h1").animation(opacity)
    // $("h1").slideToggle();
    $("h1").slideUp().slideDown().animate({padding: "4rem"})


});