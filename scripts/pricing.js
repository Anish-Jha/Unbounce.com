function monthlyOffer(){
    // let myValue=JSON.parse(localStorage.getItem("values"));
    let obj={}
    let withoutOffer=document.querySelector("#usdofmonth>h1>span");
    console.log(withoutOffer.innerHTML)
    let a=withoutOffer.innerHTML
    
  
    let withOffer=document.querySelector("#off_20>h2>span");
    console.log(withOffer.innerHTML)
    b=withOffer.innerHTML
    obj={
      
      withoutOffer:a,
      withOffer:b,
    }
    console.log('obj',obj)
  
  
    window.location.href="sign_for_free.html"
    
    
    localStorage.setItem("values", JSON.stringify(obj));
  
  
  }
  
  
  
  function giveYearly(){
    window.location.href="yearly.html"
    // let usd=document.getElementById("#switch");
    // let usdMonth=document.querySelector("#usdofmonth>span");
  
    // if(usd.checked==true){
    //   usdMonth.innerHTML="81"
    // }else{
    //   usdMonth.innerHTML="90"
    // }
  
  
    // function toggleCheck() {
    // if(document.getElementById("myCheckbox").checked === true){
    //   document.getElementById("aLink").style.display = "block";
    // } else {
    //   document.getElementById("aLink").style.display = "none";
    // }
  }