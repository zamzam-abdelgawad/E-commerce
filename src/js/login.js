function sign(){
    //var info= JSON.parse(localStorage.getItem('product'));
    var name= document.getElementById("input_name").value;
    var email= document.getElementById("input_email").value;
    var pass= document.getElementById("input_pass").value;

    localStorage.setItem("name",JSON.stringify(name)); 
    
    localStorage.setItem("email",JSON.stringify(email)); 
    
    localStorage.setItem("pass",JSON.stringify(pass)); 
        
}

function log(){
    var p= JSON.parse(localStorage.getItem('pass'));
    var m= JSON.parse(localStorage.getItem('email'));

    var passw= document.getElementById("password").value;
    var emaill= document.getElementById("email").value;


    if(passw==p && emaill==m){
    localStorage.setItem("pass",passw); 
    localStorage.setItem("email",JSON.stringify(emaill)); 
    window.open("homeloged.html")}
    else{
        passw.style.border="2px solid red"
        emaill.style.border="2px solid red"
    
}
}