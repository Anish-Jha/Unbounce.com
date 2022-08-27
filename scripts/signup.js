let form = document.querySelector("form");
    let signupPage = JSON.parse(localStorage.getItem("signup")) || [];
     let err=document.getElementById('err');
     let pass=document.getElementById('noT');
     let man=document.getElementById('maN');
     let out=document.getElementById('ouT');
     let opt=document.getElementById('oPt');
     let pad=document.getElementById('paD');

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
        if(obj.email==""){
            err.innerText="This field is required";
            err.style.fontSize="14px";
            err.style.color="red";
            err.style.paddingBottom="20px";
            err.style.marginTop="-15px"
            err.style.fontFamily="Source Sance Pro,sans-serif";
            
        }
        if(obj.password==""){
            pass.innerText="This field is required";
            pass.style.fontSize="14px";
            pass.style.color="red";
            pass.style.marginTop="-15px"
            pass.style.paddingBottom="10px";
            pass.style.fontFamily="Source Sance Pro,sans-serif";
        }
        if(obj.name==""){
            man.innerText="This field is required";
            man.style.fontSize="14px";
            man.style.color="red";
            man.style.paddingBottom="10px";
            man.style.marginTop="-15px"
            man.style.fontFamily="Source Sance Pro,sans-serif";
        }
        if(obj.company==""){
            out.innerText="This field is required";
            out.style.fontSize="14px";
            out.style.color="red";
            out.style.paddingBottom="10px";
            out.style.marginTop="-15px"
            out.style.fontFamily="Source Sance Pro,sans-serif";
        }
        if(obj.select==""){
            opt.innerText="This field is required";
            opt.style.fontSize="14px";
            opt.style.color="red";
            opt.style.paddingBottom="10px";
            opt.style.marginBottom="10px";
            opt.style.marginTop="-15px"
            opt.style.fontFamily="Source Sance Pro,sans-serif";
        }
        if(obj.final==""){
            pad.innerText="This field is required";
            pad.style.fontSize="14px";
            pad.style.color="red";
            pad.style.paddingBottom="10px";
            pad.style.marginTop="-15px"
            pad.style.fontFamily="Source Sance Pro,sans-serif";
            return;
        }
        let symb="12345678"
        if(obj.password.length<symb.length){
            pass.innerText="Password must contain 8 characters";
            pass.style.fontSize="14px";
            pass.style.color="red";
            pass.style.marginTop="-15px"
            pass.style.paddingBottom="10px";
            pass.style.fontFamily="Source Sance Pro,sans-serif";
        }
       else if(obj.password!==obj.final){
            pad.innerText="Passwords do not match";
            pad.style.fontSize="14px";
            pad.style.color="red";
            pad.style.paddingBottom="10px";
            pad.style.marginTop="-15px"
            pad.style.fontFamily="Source Sance Pro,sans-serif";
            return;
       }
       else if(obj.name!=="" && obj.email!=="" && obj.company!=="" && obj.select!=="" && obj.final==obj.password ){
        signupPage.push(obj);
        localStorage.setItem("signup", JSON.stringify(signupPage));
        window.location.href="verification.html"
    }   
})