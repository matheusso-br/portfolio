let imgBox = document.getElementById("imgBox");
let textURL = document.getElementById("textURL");
let imgQR = document.getElementById("imgQR");

function generateQR () {

    if (textURL.value.length > 0) {

        imgQR.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + textURL.value;
        imgBox.classList.add("show-img");

    }
    
    else {

        textURL.classList.add("error");
        setTimeout(()=> {
            textURL.classList.remove("error"); 
        }, 1000);

    }

}