var menu = document.getElementById("bar");
var navbar = document.getElementById("navbar");

navbar.style.right = '-300px';
menu.onclick = function () {
    if (navbar.style.right == '-300px') {
        navbar.style.right = '0';
    }
    
    else {
        navbar.style.right = '-300px'
    }
}

function sendEmail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        service: document.getElementById("service").value,
        detail: document.getElementById("detail").value,

    };

    const serviceID  ="service_6enhisk";
    const templateID = "template_n9stqql"

    emailjs
        .send(serviceID,templateID,params)
        .then((res) =>{
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("service").value = "";
            document.getElementById("detail").value = "";
            console.log(res);
            alert("your message sent successfully");

    })
    .catch(err=>console.log(err));
}

