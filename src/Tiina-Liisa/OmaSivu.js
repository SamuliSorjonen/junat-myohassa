function haeEtunimentiedot() {
    var etunimi = sessionStorage.etunimi;
    console.log(etunimi);
    var otsikko = document.getElementById("tervehdys");
    otsikko.innerHTML = "Olet kirjautunut nimellä " + etunimi + "!";

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
{

}