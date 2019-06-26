function save() {
    console.log("Save")
    var emailValue = document.getElementById('sähköposti').value;
    console.log(emailValue);
    var salasanaValue = document.getElementById('salasana').value;
    console.log(salasanaValue);
    var salasanaUudelleenValue = document.getElementById('SalasanaUudelleen').value;
    console.log(salasanaUudelleenValue);
    //Täällä pitäisi tsekata, että salasanat samat, ehkä salasanan vahvuus?
    localStorage.setItem(emailValue, salasanaValue)

    if(salasanaValue===salasanaUudelleenValue){
        console.log("Olet nyt rekisteröitynyt!");
        document.write("Olet nyt rekisteröitynyt!");
    }else {
        console.log("Antamasi salasanat eivät täsmää!")
        document.write("Antamasi salasanat eivät täsmää, yritä uudelleen!");
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