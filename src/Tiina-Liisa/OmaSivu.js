function haeEtunimentiedot() {
    var etunimi = sessionStorage.etunimi;
    console.log(etunimi);
    var otsikko = document.getElementById("tervehdys");
    otsikko.innerHTML = "Tervetuloa, " + etunimi + "!";

}
haeEtunimentiedot()