//prompt("Halo, siapakah nama anda?", "User")
function replaceName(){
    let visitor = prompt("Selamat datang, pengunjung. Silahkan masukkan nama anda...");
    document.getElementById("visitor").innerHTML = visitor;

}

replaceName()

//function validateForm
function validateForm() {
    const name = document.forms["message-form"]["full-name"].value;
    const birthDate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["messages"].value;

    if(name == "" || birthDate == "" || gender == "" || messages == ""){
        alert("Tidak boleh ada yang kosong");
        //document.getElementById("error-name").innerHTML = "Tidak boleh kosong!";
        return false;
    }

    setSenderUI(name, birthDate, gender, messages);

    return false;
}

function setSenderUI(name, birthDate, gender, messages) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;

    alert("Terima kasih atas saran dan masukannya :)\n\n " + 
    "\"Kami tidak pernah meragukan pelanggan \n " +  
             "Meskipun permintaannya aneh-aneh\" "); 
    return false;

}

function myalert() { 

} 