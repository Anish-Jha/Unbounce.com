    function display(){
    let signup=JSON.parse(localStorage.getItem("signup")) || [];
    signup.forEach(function(el){
    let mail=document.getElementById("mail");
    mail.innerText=el.email;
    })
}
display();
    

let form=document.querySelector("form").addEventListener("submit", function(ele){
    let otpV=document.getElementById("otp1").value+document.getElementById("otp2").value
    +document.getElementById("otp3").value+document.getElementById("otp4").value
    +document.getElementById("otp5").value+document.getElementById("otp6").value;
    ele.preventDefault();
    if(otpV==""){
        alert("Please fill the code")
    }
    else if(otpV=="123456"){
        alert("SignUp Successfull"); 
        window.location.href="project.html";
        return;
    }
     else{
        alert("Wrong code");
    }
});