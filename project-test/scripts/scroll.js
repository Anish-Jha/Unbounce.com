
function changebg(){
    let scrollvalue = window.scrollY;
    // console.log(scrollvalue);
    if(scrollvalue > 100){
        document.getElementById("nav").style.boxShadow="rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px";
        document.getElementById("nav").style.backgroundColor="white";
        document.getElementById("logo").style.filter="invert(0)"
        document.getElementById("product").style.color="black";
        document.getElementById("solution").style.color="black";
        document.getElementById("learn").style.color="black";
        document.getElementById("a-pricing").style.color="black";
        document.getElementById("a-contact").style.color="black";
        document.getElementById("search").style.background="white";
        document.getElementById("serach-btn").style.background="white";
        document.getElementById("serach-btn").style.color="black";
        document.getElementById("login").style.background="white";
        document.getElementById("login").style.background="white";
        document.getElementById("a-login").style.color = "blue";
        document.getElementById("login").style.borderColor = "blue";

        document.getElementById("free-trial").style.background="blue";
        document.getElementById("a-free").style.color="white";

        document.getElementById("search").style.color="black";


    }else{
        document.getElementById("nav").style.boxShadow="none";

        document.getElementById("nav").style.backgroundColor="#303030";
        document.getElementById("logo").style.filter="invert() brightness(105%) contrast(100%)";
        document.getElementById("product").style.color="white";
        document.getElementById("solution").style.color="white";
        document.getElementById("learn").style.color="white";
        document.getElementById("a-pricing").style.color="white";
        document.getElementById("a-contact").style.color="white";
        document.getElementById("search").style.background="#303030";
        document.getElementById("serach-btn").style.background="#303030";
        document.getElementById("serach-btn").style.color="white";
        document.getElementById("login").style.background="#303030";
        document.getElementById("a-login").style.color = "white";
        document.getElementById("login").style.borderColor = "white";

        document.getElementById("free-trial").style.background="white";
        document.getElementById("a-free").style.color="#303030";

        document.getElementById("hr-menu").style.color= "black";

        document.getElementById("search").style.color="white";



    }   

}
window.addEventListener("scroll", changebg);
