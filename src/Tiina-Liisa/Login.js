if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("sukunimi", "Smith");
    // Retrieve
    document.getElementById("result").innerHTML = localStorage.getItem("lastname");
} else {
    document.getElementById("result").innerHTML = "Valitettavasti selaimesi ei tue nettitallenusta...";
}