
//prompt("Halo, siapakah nama anda?", "User")
/*
function replaceName() {
    let name = prompt("Halo, siapakah nama anda?", "");
    document.getElementById("visitor").innerHTML = name;
}

document.getElementById("change_name").addEventListener("click", function() {
    replaceName();
})

let nameInput = document.getElementById('name-input');

document.getElementById('kirim').addEventListener("click", function() {
    const nama = nameInput.value;

    if(nama == ""){
        document.getElementById("error-name").innerHTML = "Nama tidak boleh kosong!";
    }else{
        document.getElementById('name').innerHTML = nama;
    }  
})
*/

function validateForm() {
    const nama = document.forms['message-form']['name-input'].value;

    if(nama = ""){
        document.getElementById("error-name").innerHTML = "Tidak boleh kosong!";
        return false;
    }

    setName(nama);

    //document.getElementById("name").innerHTML = nama;
    //document.getElementById("error-name").innerHTML = "";
    return false;
}

function setName(name) {
    document.getElementById("name").innerHTML = name;
    document.getElementById("error-name").innerHTML = "";
}