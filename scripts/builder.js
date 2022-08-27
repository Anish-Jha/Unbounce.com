let form = document.querySelector("form");
let signupPage = JSON.parse(localStorage.getItem("signup")) || [];
let err=document.getElementById('error');
let hmm=document.getElementById('noT');

form.addEventListener("submit", function (e) {
    e.preventDefault()
    let obj = {
        email: form.email.value,
        password: form.password.value,
    }
    if(obj.email==""){
        err.innerText="This is not a valid email";
        err.style.fontSize="12px";
        err.style.color="red";
        err.style.paddingBottom="20px";
        err.style.fontFamily="Source Sance Pro,sans-serif";
        document.getElementById("email").style.border="1px solid red";
        document.getElementById("ema").style.color="red";
        
    }
    if(obj.password==""){
        hmm.innerText="Please fill in the Password";
        hmm.style.fontSize="12px";
        hmm.style.color="red";
        hmm.style.paddingBottom="10px";
        hmm.style.fontFamily="Source Sance Pro,sans-serif";
        document.getElementById("password").style.border="1px solid red";
        document.getElementById("woRd").style.color="red";
        return;
    }
    
    let Result = false;
    signupPage.forEach(function (ele) {

        if (ele.email === obj.email && ele.password === obj.password) {
            Result = true;

            localStorage.setItem("signin", JSON.stringify(ele));
            window.location.href="index.html"
            return;
        }
        if(ele.password!== obj.password){
        hmm.innerText="Incorrect Email or Password";
        hmm.style.fontSize="12px";
        hmm.style.color="red";
        hmm.style.paddingBottom="10px";
        hmm.style.fontFamily="Source Sance Pro,sans-serif";
        document.getElementById("password").style.border="1px solid red";
        document.getElementById("woRd").style.color="red";
        return;
        }
    })
    // if(Result === false){
    //     alert("User Doesn't Exist");
    // }
})