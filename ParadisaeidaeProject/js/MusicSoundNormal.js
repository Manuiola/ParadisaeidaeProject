// Freelancer Theme JavaScript

$(document).ready(function () {
   //MUSIC&SOUNDMOVIL
$('#catalogoMenu').on("click", function () {
        recorrerSection();
        $("#Catalogo").fadeToggle("slow", "linear");
});
$('#proyectosMenu').on("click", function () {
        recorrerSection();
        $("#Proyectos").fadeToggle("slow", "linear");
});
$('#videosMenu').on("click", function () {
        recorrerSection();
        $("#Videos").fadeToggle("slow", "linear");
});
function recorrerSection(){
     $(".bodyParadisaedae").each(function () {
    if($(this).is(':visible'))
        {
            $(this).fadeToggle("slow", "linear");
        }
})
}
//MUSICANDSOUNDDESIGN CATÁLOGO
$(".optionsMenu").on("mouseover", function () {
    if ($(this).attr("src") != "../img/pestanas_menu/" + $(this).attr("id") + "seleccion.png") {
        $(this).attr("src", "../img/pestanas_menu/" + $(this).attr("id") + "cursor.png");
    }
});
$(".optionsMenu").on("mouseout", function () {
    if ($(this).attr("src") != "../img/pestanas_menu/" + $(this).attr("id") + "seleccion.png") {
        $(this).attr("src", "../img/pestanas_menu/" + $(this).attr("id") + ".png");
    }
});


})(jQuery); // End of use strict
