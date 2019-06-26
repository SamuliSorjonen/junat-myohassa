
function rekisteröidy() {
    window.open("Register.html")
}

function avaaSivu() {
    //window.open("Register.html")
    var kt=document.getElementById("sähköposti").value;
    console.log(kt)
    //document.write("Käyttäjätunnus:" + kt);

    var salanayritys=document.getElementById("password").value;

    var tallennettusalasana=localStorage.getItem(kt);
    console.log(tallennettusalasana);
    //document.write(tallennettusalasana);

    if(salanayritys===tallennettusalasana){
        console.log("Kirjauduttu!");
        document.write("Kirjauduttu!");
    }else{
        console.log("Salasana väärin!")
        document.write("Salasana väärin, yritä uudestaan!");

    }
}