$("#inventara-tipa-poga").click(function() {

    var inventaratipaIdKaVirkne = $("#tipaid").val();
    var inventaraNosaukumsKaVirkne = $("#noosaukums").val();
    var inventaraAprakstsKaVirkne = $("#apraksts").val();

    var inventaratipaIdKaCipars = Number(inventaratipaIdKaVirkne);

    var inventaratipi = {

        "tipaid": inventaratipaIdKaCipars,
        "noosaukums": inventaraNosaukumsKaVirkne,
        "apraksts": inventaraAprakstsKaVirkne,

    };

    $.post("http://sigulda-web.azurewebsites.net/api/deadpool/inventaratipi",

    inventaratipi,

    function (data, status) {

    });

    $("#tipaid").val(null);
    $("#noosaukums").val(null);
    $("#apraksts").val(null);

});

