pass = document.getElementById("pass");
str = document.getElementById("strenth");
message = document.getElementById("message");

pass.addEventListner("input", () =>{
    if (pass.value.length > 0){
        str.style.display="block"
    }
    else{
        str.style.display="none"      
    }
})