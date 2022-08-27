let form=document.querySelector("form");
let err=document.getElementById('err');
let pass=document.getElementById('noT');
let out=document.getElementById('ouT');
form.addEventListener("submit", function (event) {
    event.preventDefault();
    let obj = {
        name: form.radio.value,
        texT: form.naME.value,
        small: form.small.value,
        high: form.high.value,
    }
    if(obj.texT==""){
        err.innerText="This field is required";
        err.style.fontSize="14px";
        err.style.color="#fd5c63";
        err.style.textAlign="left";
        err.style.paddingBottom="10px";
        err.style.fontWeight="600"
        err.style.marginTop="-15px"
        err.style.fontFamily="Source Sance Pro,sans-serif";
        
    }
    if(obj.small==""){
        pass.innerText="This field is required";
        pass.style.fontSize="14px";
        pass.style.color="#fd5c63";
        pass.style.textAlign="left";
        pass.style.marginTop="-15px"
        pass.style.fontWeight="600"
        pass.style.paddingBottom="10px";
        pass.style.fontFamily="Source Sance Pro,sans-serif";
    }
    if(obj.high==""){
        out.innerText="This field is required";
        out.style.fontSize="14px";
        out.style.color="#fd5c63";
        out.style.fontWeight="600"
        out.style.textAlign="left";
        out.style.paddingBottom="10px";
        out.style.marginTop="-15px"
        out.style.fontFamily="Source Sance Pro,sans-serif";
        return;
    }
   else{
    window.location.href="index.html"
}
})

