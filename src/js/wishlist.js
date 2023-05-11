function gettingnums(){


    var hearticon = document.getElementsByClassName("hearticon")[0];
    var cartIcon = document.getElementsByClassName("cartIcon")[0];
    var favv = JSON.parse(localStorage.getItem('favv')) || [];
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    hearticon.innerHTML+=`
     <span> ${favv.length} </span>
    
    `
    cartIcon.innerHTML+=`
     <span> ${cart.length} </span>
    
    `
  
    
  }
//make price range filter



