let form = document.querySelector("form");
let signupPage = JSON.parse(localStorage.getItem("signup")) || [];
let err=document.getElementById('error');
let pass=document.getElementById('noT');
let hmm=document.getElementById("hmm");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let obj = {
        email: form.email.value,
        password: form.password.value,
    }
    if(obj.email==""){
        err.innerText="This field is required";
        err.style.fontSize="14px";
        err.style.color="red";
        err.style.paddingBottom="20px";
        err.style.fontFamily="Source Sance Pro,sans-serif";
        
    }
    if(obj.password==""){
        pass.innerText="This field is required";
        pass.style.fontSize="14px";
        pass.style.color="red";
        pass.style.paddingBottom="10px";
        pass.style.fontFamily="Source Sance Pro,sans-serif";
        return;
    }

    let Result = false;
    signupPage.forEach(function (ele) {

        if (ele.email === obj.email && ele.password === obj.password) {
            Result = true;

            localStorage.setItem("signin", JSON.stringify(ele));
            window.location.href="index.html"
        }
        if(ele.email!== obj.email){
            hmm.innerText="Hmm, that doesn't look right. Try again?";
            hmm.style.fontSize="16px";
            hmm.style.color="red";
            hmm.style.padding="10px";
            hmm.style.borderRadius="5px";
            hmm.style.marginTop="10px";
            hmm.style.marginBottom="10px";
            hmm.style.fontFamily="Source Sance Pro,sans-serif";
            hmm.style.backgroundColor="#FFCCCB"
            return;
            }
        if(ele.password!== obj.password){
            hmm.innerText="Hmm, that doesn't look right. Try again?";
            hmm.style.fontSize="16px";
            hmm.style.color="red";
            hmm.style.padding="10px";
            hmm.style.borderRadius="5px";
            hmm.style.marginTop="10px";
            hmm.style.marginBottom="10px";
            hmm.style.fontFamily="Source Sance Pro,sans-serif";
            hmm.style.backgroundColor="#FFCCCB"
            return;
            }
    })
   
})