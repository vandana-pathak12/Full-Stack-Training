const form = document.getElementById("registerForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const firstName = document.getElementById("firstName").value;

    const lastName = document.getElementById("lastName").value;

    const email = document.getElementById("email").value;

    const username = document.getElementById("username").value;

    const password = document.getElementById("password").value;

    if(firstName==="" ||
       lastName==="" ||
       email==="" ||
       username==="" ||
       password===""){

        alert("Please fill all fields.");

        return;
    }

    alert("Registration Successful!");

});