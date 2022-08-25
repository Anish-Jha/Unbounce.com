let form = document.querySelector("form");
let signupPage = JSON.parse(localStorage.getItem("signup")) || [];
let errorElement=document.getElementById('error');

form.addEventListener("submit", function (e) {
    e.preventDefault()
    let messages=[];
    if (signupPage.length === 0) {
        messages.push("This is not a valid Email");
    }
    if(messages.length>0){
        errorElement.innerText=messages.join(', ')
        return;
    }
    let obj = {
        email: form.email.value,
        password: form.password.value,
    }

    let Result = false;
    signupPage.forEach(function (ele) {

        if (ele.email === obj.email && ele.password === obj.password) {
            Result = true;

            localStorage.setItem("signin", JSON.stringify(ele));
            alert("Login Successful");
            window.location.href="index.html"
        }
    })
    if(Result === false){
        alert("User Doesn't Exist");
    }
})