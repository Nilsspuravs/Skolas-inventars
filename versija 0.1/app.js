$("#inventara_poga").click(function() {

    var inventaraId = $("#tipaid").val();
    var inventaranosaukumsstr = $("#nosaukums").val();
    var inventaraaprakstsstr = $("#apraksts").val();


    var inventaratipi = {

        "tipa_id": inventaraId,
        "nosaukums": inventaranosaukumsstr,
        "Apraksts": inventaraaprakstsstr,

    };

    $.post("http://sigulda-web.azurewebsites.net/api/deadpool/inventara-tipi",

    inventaratipi,

    function (data, status) {

    });

    $("#tipaid").val(null);
    $("#nosaukums").val(null);
    $("#apraksts").val(null);

});

$.get("http://sigulda-web.azurewebsites.net/api/deadpool/inventara-tipi", function (inventaratipi, status) {
// Izveidot katram objektam jaunu tabulas ierakstu, ņem no servisa, piem., iekarta.Iekartas_ID
inventaratipi.forEach(function (tips) {
var id = "<td>" + tips.tipa_id + "</td>";
var tipsNosaukums = "<td>" + tips.nosaukums + "</td>";
var tipsApraksts = "<td>" + tips.Apraksts + "</td>";

var tipuRinda = "<tr>" + id + tipsNosaukums + tipsApraksts + "</tr>";
$("#tipu_tabula").append(tipuRinda);
});
});

