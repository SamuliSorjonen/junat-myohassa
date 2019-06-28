function save() {
    console.log("Save")
// haetaan käyttäjätunnus (sähköposti) etc. html lomakkeesta.
    var käyttäjätunnus = document.getElementById("sähköposti").value;
    console.log(käyttäjätunnus)
    var emailValue = document.getElementById('sähköposti').value;
    console.log(emailValue);
    var mistaValue = document.getElementById('mista').value;
    console.log(mistaValue);
    var mihinValue = document.getElementById('mihin').value;
    console.log(mihinValue);
    // asetetaan käyttäjätunnukselle JSONin avulla arvoksi salasana, etunimi ja sukunimi.
    var kayttajaJSON = `{"mista":"${mistaValue}", "mihin":"${mihinValue}"}`;
    localStorage.setItem(emailValue, kayttajaJSON);
}
    //tarkistetaan onko salasana oikein.
    /*if (salasanaValue == salasanaUudelleenValue) {
        console.log("Olet nyt rekisteröitynyt!");
        localStorage.kirjautunutKayttaja=emailValue;
        location.href = "OmaSivu.html";*/
    //haetaan käyttäjän tiedot localStoragesta.
    function haeSuosikit() {
        var kirjautunut = localStorage.kirjautunutKayttaja;
        var kayttajaTiedot = JSON.parse(localStorage.getItem(kirjautunut));
        console.dir(kayttajaTiedot);
        //var etunimi = sessionStorage.etunimi;
        console.log("mista");
        var otsikko = document.getElementById("tervehdys");
        otsikko.innerHTML = "Viimeksi haetut reitit: " + kayttajaTiedot.mista + "-" + kayttajaTiedot.mihin;
        console.log("miksi reitti ei tulostu?");
    }

    haeSuosikit();

function myFunction() {
    var x = localStorage.getItem(mista, mihin);
    document.getElementById("demo").innerHTML = x;
}

