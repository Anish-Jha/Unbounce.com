document.getElementById("serach-btn").addEventListener("click", searchdt);
function searchdt(){
    let input = document.getElementById("search").value;
    console.log(input); 
}

document.getElementById("free-trial").addEventListener("click", freeTrial);

function freeTrial(){
    window.location.href="";
}

export {searchdt,freeTrial};
