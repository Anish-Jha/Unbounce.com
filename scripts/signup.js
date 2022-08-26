let form = document.querySelector("form");
    let signupPage = JSON.parse(localStorage.getItem("signup")) || [];

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let obj = {
            name: form.name.value,
            email: form.email.value,
            password: form.password.value,
            company: form.company.value,
            select: form.select.value,
            final: form.passworD.value,


        }
       if(obj.email == "" || obj.name=="" || obj.password=="" || obj.company=="" || obj.select=="" || obj.final==""){
        alert("All Fields are Mandatory")
        return;
       }
       else if(obj.password!==obj.final){
        alert("Passwords do not match");
        return;
       }
       else{
        signupPage.push(obj);
        localStorage.setItem("signup", JSON.stringify(signupPage));
        alert("sign Up successfull")
        window.location.href="verification.html"
    }   
})