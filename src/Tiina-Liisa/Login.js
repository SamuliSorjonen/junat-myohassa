
function rekisteröidy() {
    window.open("Register.html")
}

function avaaSivu() {

    var käyttäjätunnus=document.getElementById("sähköposti").value;
    console.log(käyttäjätunnus)


    var salasanayritys=document.getElementById("password").value;
    console.dir(document.getElementById("password"));
//Parsitaan käyttäjätiedot storagesta:
    var kayttaja=JSON.parse(localStorage.getItem(käyttäjätunnus));
    //var tallennettusalasana=localStorage.getItem(käyttäjätunnus);
    var tallennettusalasana=kayttaja.salasana;
    console.log(tallennettusalasana);

    //var etunimi = document.getElementById("etunimi").value;
    //console.log(etunimi)

    if(salasanayritys===tallennettusalasana){
        console.log("Kirjauduttu!");
        sessionStorage.kirjautunut=käyttäjätunnus;
        sessionStorage.etunimi=kayttaja.etunimi;
        sessionStorage.sukunimi=kayttaja.sukunimi;
        window.open("OmaSivu.html");
    }else{
        console.log("Salasana väärin!")
        window.alert("Salasana väärin, yritä uudestaan!");

    }
}