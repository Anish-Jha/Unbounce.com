    function display(){
    let signup=JSON.parse(localStorage.getItem("signup")) || [];
    signup.forEach(function(el){
    let mail=document.getElementById("mail");
    mail.innerText=el.email;
    })
}
display();
    
let err=document.getElementById("error")
let form=document.querySelector("form").addEventListener("submit", function(ele){
    let otpV=document.getElementById("otp1").value+document.getElementById("otp2").value
    +document.getElementById("otp3").value+document.getElementById("otp4").value
    +document.getElementById("otp5").value+document.getElementById("otp6").value;
    ele.preventDefault();
    if(otpV==""){
        err.innerText="Please fill the Code"
        err.style.color="red";
        err.style.padding="10px"
        err.style.fontFamily="Source Sance Pro,sans-serif";
    }
    else if(otpV=="123456"){
        err.innerText="Verification Successfull"
        err.style.color="Green";
        err.style.padding="10px";
        err.style.fontFamily="Source Sance Pro,sans-serif";
        window.location.href="project.html";
        return;
    }
     else{
        err.innerText="Incorrect Code. Please try again"
        err.style.color="red";
        err.style.padding="10px"
        err.style.fontFamily="Source Sance Pro,sans-serif";
    }
});