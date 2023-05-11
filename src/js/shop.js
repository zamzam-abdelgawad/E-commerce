
function modalshop(param){
    var favv= JSON.parse(products.responseText)// convert from type string to type object
    var modalContent= document.getElementsByClassName('modal-header')[0];
  
  
    for(e=0 ; e<favv.length;e++){
      if(favv[e].id==param){
        console.log(favv[e]); 
  
  
        modalContent.innerHTML=`
        
        <div class="">
        <div class="modalcard p-3 bg-white"><i class="fa fa-apple"></i>
        <i class="fa fa-times modal-close" aria-hidden="true"  data-dismiss="modal" style="cursor:pointer;"></i>  
  
              <div class="about-product text-center mt-2">
              <img src="${favv[e].image}" width="300" height="300">
                  <div>
                      <h4>${favv[e].title}</h4>
                      <p class="mt-0 text-black-50 pwidth">${favv[e].description}</p>
                  </div>
                  </div>
                  <button style="cursor:pointer;" class="addbtn" onclick="add(${e})">Add To Cart </button>
                  <div class="wcf-right"><button class="buy-btn" onclick="addtofav(${e})"><i class="fa fa-heart"></i></button></div>
                  <div class="stats mt-2">
              </div>
              <div class="price"><span>Price :</span><span>$${favv[e].price}</span>
              </div>
             
          </div>
  
  
      </div>
        
        
        
        `
        
  
      }}}  