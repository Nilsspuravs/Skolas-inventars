$(document).ready(function() { 

var settings = {
    "bodyContainerDisplay": "block",
    "imageContainerDisplay": "none",
    "headerBackground": "#EDC7B7",
    };
    
        $("#inventars_ievade").css("display", settings.bodyContainerDisplay);
        $("#kabinv").css("display", settings.imageContainerDisplay);
        $("#kabineti").css("display","none");
        $("#lietotaji").css("display","none");
        $("#apskatit").css("display","none");
    
        $("#header").css("background", settings.headerBackground);
        $("#header").css("width", "100%");
        $("#header").css("height", "15%");
    
        $("#body").css("background", "#EEE2DC");
        $("#body").css("width", "100%");
        $("#body").css("height", "80%");
        
        $("#footer").css("background", "#BAB2B5");
        $("#footer").css("width", "100%");
        $("#footer").css("height", "10%");
       // $("#footer").css("position", "fixed");
    
        $("#navigation_header").css("padding-top", "40px");
        $("#navigation_header").css("padding-bottom", "20px");
    
        $("#inventars_ievade").css("background", "transparent");
    
        
        $("#inventars_ievade").css("padding-top", "5%");
    
        $("#kabinv_ievade").css("padding-top", "5%");
    
        $("#navigation_buttons p").click(function(){
            $(this).css("color","white");
    
            var text = $(this).text();
    
            if(text == "Inventāra tipi") {
                $("#inventars_ievade").css("display", "block");
                $("#kabinv").css("display", "none");
                $("#kabineti").css("display","none");
                $("#lietotaji").css("display","none");
                $("#apskatit").css("display","none");
            }
    
            if(text == "Piederumi") {
                $("#inventars_ievade").css("display", "none");
                $("#kabinv").css("display", "block");
                $("#kabineti").css("display","none");
                $("#lietotaji").css("display","none");
                $("#apskatit").css("display","none");
            }
    
            if(text == "Reaģenti") {
                $("#inventars_ievade").css("display", "none");            
                $("#kabinv").css("display", "none");
                $("#kabineti").css("display","block");
                $("#lietotaji").css("display","none");
                $("#apskatit").css("display","none");
            }
    
            if(text == "Trauki") {
                $("#inventars_ievade").css("display", "none");            
                $("#kabinv").css("display", "none");
                $("#kabineti").css("display","none");
                $("#lietotaji").css("display","block");
                $("#apskatit").css("display","none");
            }
    
            if(text == "Apskatīt datus") {
                $("#invnetars_ievade").css("display", "none");
                $("#kabinv").css("display", "none");
                $("#kabineti").css("display","none");
                $("#lietotaji").css("display","none");
                $("#apskatit").css("display","block");
            }
    
        });

    
    
    


    $("#inventara_poga").click(function() {

    var inventaraId = $("#inventara_id").val();
    var inventaranosaukumsstr = $("#inventara_nosaukums").val();
    var inventaraaprakstsstr = $("#inventara_apraksts").val();


    var inventaratipi = {

        "tipa_id": inventaraId,
        "nosaukums": inventaranosaukumsstr,
        "Apraksts": inventaraaprakstsstr,

    };

    $.post("http://sigulda-web.azurewebsites.net/api/deadpool/inventara-tipi",

    inventaratipi,

    function (data, status) {

    });

    $("#inventara_id").val(null);
    $("#inventara_nosaukums").val(null);
    $("#inventara_apraksts").val(null);

    }   );

    $.get("http://sigulda-web.azurewebsites.net/api/deadpool/inventara-tipi", function (inventaratipi, status) {
    // Izveidot katram objektam jaunu tabulas ierakstu, ņem no servisa, piem., iekarta.Iekartas_ID
            inventaratipi.forEach(function (tips) {
            var id = "<td>" + tips.tipa_id + "</td>";
            var tipsNosaukums = "<td>" + tips.nosaukums + "</td>";
            var tipsApraksts = "<td>" + tips.Apraksts + "</td>";

            var tipuRinda = "<tr>" + id + tipsNosaukums + tipsApraksts + "</tr>";
            $("#inventara_tabula").append(tipuRinda);
        });
    });

})