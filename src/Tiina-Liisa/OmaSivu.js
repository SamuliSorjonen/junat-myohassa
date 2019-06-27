function haeEtunimentiedot() {
    var kirjautunut = localStorage.kirjautunutKayttaja;
    var kayttajaTiedot=JSON.parse(localStorage.getItem(kirjautunut));
    console.dir(kayttajaTiedot);
    //var etunimi = sessionStorage.etunimi;
    console.log("etunimi");
    var otsikko = document.getElementById("tervehdys");
    otsikko.innerHTML = "Olet kirjautunut nimellä " + kayttajaTiedot.etunimi + "!";
    console.log("miksi nimi ei tulostu?");

    /*if(salasanaValue===salasanaUudelleenValue){
        console.log("Olet nyt rekisteröitynyt!");
        sessionStorage.kirjautunut=käyttäjätunnus;
        sessionStorage.etunimi=kayttaja.etunimi;
        sessionStorage.sukunimi=kayttaja.sukunimi;
        window.alert("Tietosi on tallennettu.");
    }else {
        console.log("Antamasi salasanat eivät täsmää!")
        window.alert("Antamasi salasanat eivät täsmää, yritä uudelleen!");*/

}
haeEtunimentiedot()
