function save() {
    console.log("Save")
    var emailValue = document.getElementById('sähköposti').value;
    console.log(emailValue);
    var salasanaValue = document.getElementById('salasana').value;
    console.log(salasanaValue);
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