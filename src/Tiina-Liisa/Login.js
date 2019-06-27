
function rekisteröidy() {
    window.open("Register.html")
}
var käyttäjätunnus;
var kayttaja;

function avaaSivu() {

     käyttäjätunnus=document.getElementById("sähköposti").value;
    console.log(käyttäjätunnus)


    var salasanayritys=document.getElementById("salasana").value;
    console.dir(document.getElementById("salasana"));
//Parsitaan käyttäjätiedot storagesta:
     kayttaja=JSON.parse(localStorage.getItem(käyttäjätunnus));
    // tallennettusalasana = localStorage.getItem(salasana);
    tallennettusalasana = kayttaja.salasana
    //tallennettusalasana=localStorage.getItem(salasana);
    //var tallennettusalasana=kayttaja.salasana;
    console.log(tallennettusalasana);

    //var etunimi = document.getElementById("etunimi").value;
    //console.log(etunimi)

    //if(salasanayritys==tallennettusalasana){
    if (tallennettusalasana===salasanayritys) {
        console.log("kirjautuminen onnistui!");
        /*sessionStorage.kirjautunut=käyttäjätunnus;
        sessionStorage.etunimi=kayttaja.etunimi;
        sessionStorage.sukunimi=kayttaja.sukunimi;*/
        localStorage.kirjautunutKayttaja=käyttäjätunnus;
        window.open("OmaSivu.html");
    }else{
        console.log("Salasana väärin!")
        window.alert("Salasana väärin, yritä uudestaan!");

    }
}