$( document ).ready(function() {

// $(".content").hide();
$("#winelist").hide();
$("#winemaking").hide();
$("#projects").hide();
$("#blog").hide();
$("#fibb15stats").hide();
$("#fibb14").css("border","1px solid #076382");


//if screen size is smaller than 1200px, hide more info elements

// if ($(window).width() < 1024 ) {
	
// }


// else {
	

// }
function mainmenuclick(button, label, lowermenu){
  // $(button).removeAttr("style");
  // $(label).removeAttr("label");

  if( $(lowermenu).is(":visible")) {
      $(lowermenu).fadeOut(300,"swing");
      $(button).removeAttr("style");
      $(label).removeAttr("style");

    }
    else{
      $("#winebutton").removeAttr("style");
      $("#wineslabel").removeAttr("style");
      $("#makingbutton").removeAttr("style");
      $("#makinglabel").removeAttr("style");
      $("#projectsbutton").removeAttr("style");
      $("#projectslabel").removeAttr("style");
      $("#blogbutton").removeAttr("style");
      $("#bloglabel").removeAttr("style");
      $("#winelist").fadeOut(300,"swing");
      $("#winemaking").fadeOut(300,"swing");
      $("#projects").fadeOut(300,"swing");
      $("#blog").fadeOut(300,"swing");
      $(lowermenu).delay( 300 ).fadeIn( 700,"swing");
      $(button).css("box-shadow"," 0px 0px 20px #c3ccbb");
      $(label).css("text-shadow"," 0px 2px 8px #333").css("color","#c3ccbb");
    }
}


// on click actions: hide button, show extra info..

    $("#winebutton").click(function(){

      mainmenuclick("#winebutton","#wineslabel","#winelist");
        
    });

    $("#makingbutton").click(function(){

      mainmenuclick("#makingbutton","#makinglabel","#winemaking");

    });

    $("#projectsbutton").click(function(){

      mainmenuclick("#projectsbutton","#projectslabel","#projects");
        
    });

    $("#blogbutton").click(function(){

      mainmenuclick("#blogbutton","#bloglabel","#blog");
        
    });

    $("#fibb14").click(function(){
        $("#fibb15stats").hide();
        $("#fibb15").css("border","none");
        $("#fibb14stats").show();
        $("#fibb14").css("border","1px solid #076382");

    });

    $("#fibb15").click(function(){
      $("#fibb14stats").hide();
      $("#fibb14").css("border","none");
        $("#fibb15stats").show();
        $("#fibb15").css("border","1px solid #076382");

    });

});