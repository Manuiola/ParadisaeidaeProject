

$( document ).ready(function() {
    
  
    //Variables globales soundcloud
      var soundcloud1 = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/291134135&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true";
    var soundcloud2 = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/234972936&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true";
    var soundcloud3 = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/292881188&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true";
    var soundcloud4 = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/292875121&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true";
    var soundcloud5 = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/292871833&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true";
    var soundcloud6 = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/234977539&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true";
    var soundcloud7 = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/320478433&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true";
    var soundcloud8 = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/320479418&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true";
    var soundcloud9 ="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/234975553&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true";

 //INDEX GENERAL
    $("#msd").on("mouseover", function () {
        $(this).attr("src", "img/disenosinicioycontacto/music&sounddesigncursor.gif");
    });
    $("#dl").on("mouseover", function () {
        $(this).attr("src", "img/disenosinicioycontacto/digitallabelcursor.gif");
    });
    $("#msd").on("mouseout", function () {
        $(this).attr("src", "img/disenosinicioycontacto/music&sounddesign.gif");
    });
    $("#dl").on("mouseout", function () {
        $(this).attr("src", "img/disenosinicioycontacto/digitallabel.gif");
    });

    $("#dl").on("click", function () {
        window.open("DigitalLabel/index.html", "_self");
    });
    $("#msd").on("click", function () {

            window.open("MusicaandSoundDesign/index.html", "_self");
    });
    
  //MUSICANDSOUND
    

        $(' #da-thumbs > li ').each(function () {
            $(this).hoverdir({
                hoverDelay: 50,
                inverse: true
            });
        });
    //CATALOGO ACCIONES
     $('#catalogoMenu').on("click", function () {
         //Cambia el active del li seleccionado  
         $(".navbar-nav li").removeClass("active");
        $(this).parent().addClass("active");
         //carga section oculta
        recorrerSection();
        $("#Catalogo").fadeToggle("slow", "linear");
    });
    $('#proyectosMenu').on("click", function () {
        $(".navbar-nav li").removeClass("active");
        $(this).parent().addClass("active");
        recorrerSection();
        $("#Proyectos").fadeToggle("slow", "linear");
    });
    $('#videosMenu').on("click", function () {
        $(".navbar-nav li").removeClass("active");
        $(this).parent().addClass("active");
        recorrerSection();
        $("#Videos").fadeToggle("slow", "linear");
    });
    $('#inicioMenu').on("click", function () {
        window.open("../index.html", "_self");
    });
     $('#contactoMenu').on("click", function () {
        window.open("../contacto.html", "_self");
    });
    

    $(".labelsTag").on("mouseover", function () {
        $(this).attr("src", "../img/digitalLabel/" + $(this).attr("id") + "cursor.png");

    });
    $(".labelsTag").on("mouseout", function () {
        $(this).attr("src", "../img/digitalLabel/" + $(this).attr("id") + "seleccion.png");

    });

    $('.labelsTag').on("click", function () {
        
        $('.labelsContainer').each(function () {
            if ($(this).is(':visible')) {
                $(this).fadeToggle(0, "linear");
            }
        })
        var label = "#" + $(this).attr("id") + "Container";
        $(label).fadeToggle(0, "linear");
        //El BandcampContainer se redimensiona por si viene de la acción albumes
        
       $("#bandcampContainer").css("height", "500px");

    });

    //CARGAR SOUNDCLOUD EN CATÁLOGO
$("#soundcloud1").on("click", function () {
        $("#soundcloudPlayer").attr("src", soundcloud1);

    });
    $("#soundcloud2").on("click", function () {
        $("#soundcloudPlayer").attr("src", soundcloud2);

    });
    $("#soundcloud3").on("click", function () {
        $("#soundcloudPlayer").attr("src", soundcloud3);

    });
    $("#soundcloud4").on("click", function () {
        $("#soundcloudPlayer").attr("src", soundcloud4);

    });
    $("#soundcloud5").on("click", function () {
        $("#soundcloudPlayer").attr("src", soundcloud5);

    });
    $("#soundcloud6").on("click", function () {
        $("#soundcloudPlayer").attr("src", soundcloud6);

    });
       
     $("#soundcloud7").on("click", function () {
        $("#soundcloudPlayer").attr("src", soundcloud7);

    });
    $("#soundcloud7").on("click", function () {
        $("#soundcloudPlayer").attr("src", soundcloud7);

    });
    $("#soundcloud8").on("click", function () {
        $("#soundcloudPlayer").attr("src", soundcloud8);

    });
    $("#soundcloud9").on("click", function () {
        $("#soundcloudPlayer").attr("src", soundcloud9);

    });
    
    
    
    
    

    //DIGITALLABEL
    // MENU
    $(".labelsMenu").on("mouseover", function () {
        if($(this).attr("id")=="albumesDLA"){
           $(this).attr("src", "../img/digitalLabel/albumesDLcursor.gif"); 
        }
        else{
           $(this).attr("src", "../img/digitalLabel/" + $(this).attr("id") + "cursor.gif");  
        }
     

    });
    $(".labelsMenu").on("mouseout", function () {
        if($(this).attr("id")=="albumesDLA"){
           $(this).attr("src", "../img/digitalLabel/albumesDLseleccion.gif"); 
        }
        else{
             $(this).attr("src", "../img/digitalLabel/" + $(this).attr("id") + "seleccion.gif");   
        }
        
    });
 
    $("#albumesDLA").on("click", function () {
        var i = 0;
        $(".labelsContainer").each(function () {
            if ($(this).is(":visible")) {
                i++;
            }
        })
        if (i == 4) {
            $(".labelsContainer").each(function () {
                $(this).hide("slow", "linear");
                $("#bandcampContainer").css("height", "500px");
            })
        } else {
            $(".labelsContainer").each(function () {
                if ($(this).not(":visible"))
                    $(this).show();
                $("#bandcampContainer").css("height", "850px");
            })
        }
    });
    
    $("#albumesDL").on("click", function () {
        var i = 0;
        $(".labelsContainer").each(function () {
            if ($(this).is(":visible")) {
                i++;
            }
        })
        if (i == 4) {
            $(".labelsContainer").each(function () {
                $(this).hide("slow", "linear");
       
            })
        } else {
            $(".labelsContainer").each(function () {
                if ($(this).not(":visible"))
                    $(this).show();
              
            })
        }
    });
    


    function recorrerSection() {
        $(".bodyParadisaedae").each(function () {
            if ($(this).is(':visible')) {
                $(this).fadeToggle("slow", "linear");
            }
        })
    }
    
   
    
    
});