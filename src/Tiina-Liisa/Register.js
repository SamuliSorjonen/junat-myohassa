function save() {
    console.log("Save")

    var käyttäjätunnus=document.getElementById("sähköposti").value;
    console.log(käyttäjätunnus)
    var emailValue = document.getElementById('sähköposti').value;
    console.log(emailValue);
    var salasanaValue = document.getElementById('salasana').value;
    console.log(salasanaValue);
    var salasanaUudelleenValue = document.getElementById('SalasanaUudelleen').value;
    console.log(salasanaUudelleenValue);
    var etunimiValue = document.getElementById('etunimi').value;
    console.log(etunimiValue);
    var sukunimiValue = document.getElementById('sukunimi').value;
    console.log(sukunimiValue);
    //Täällä pitäisi tsekata, että salasanat samat, ehkä salasanan vahvuus?
    var kayttajaJSON=`{"salasana":"${salasanaValue}", "etunimi":"${etunimiValue}", "sukunimi":"${sukunimiValue}"}`;
    localStorage.setItem(emailValue, kayttajaJSON)

    if(salasanaValue===salasanaUudelleenValue){
        console.log("Olet nyt rekisteröitynyt!");
        sessionStorage.kirjautunut=käyttäjätunnus;
        sessionStorage.etunimi=kayttaja.etunimi;
        sessionStorage.sukunimi=kayttaja.sukunimi;
        window.open("OmaSivu.html");
    }else {
        console.log("Antamasi salasanat eivät täsmää!")
        window.alert("Antamasi salasanat eivät täsmää, yritä uudelleen!");
        //window.open("Register.html");
    }
    // localStorage.setItem('button')

}
/*function load() {
    var storageValue = localStorage.getItem('text')

}

if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("sukunimi", "Smith");
    // Retrieve
    document.getElementById("result").innerHTML = localStorage.getItem("lastname");
} else {
    document.getElementById("result").innerHTML = "Valitettavasti selaimesi ei tue nettitallenusta...";
}*/