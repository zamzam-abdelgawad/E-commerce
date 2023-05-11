var products = new XMLHttpRequest(); // 
var arr = []; // global
var div = document.getElementsByClassName('products')[0];
console.log(div);
products.open("GET", "https://fakestoreapi.com/products") // open connecation  0
products.send(); // send  req //1  
// 2 arrive 
// 3 process
// 4 response

products.onreadystatechange = function ()// event fire every change of state 
{
  //console.log(products.readyState);
  if (products.readyState == 4) {
    var data = JSON.parse(products.responseText)// convert from type string to type object
    arr = data // assgin

    for (var i = 0; i < data.length; i++) {

      div.innerHTML += ` 
            <div class="col-md-3">
            <div class="wsk-cp-product">
              <div class="wsk-cp-img" onclick="desc(${data[i].id})"  data-toggle="modal" data-target="#exampleModalCenter">
                <img src="${data[i].image}" alt="Product" class="img-responsive" />
              </div>
              <div class="wsk-cp-text">
                <div class="category">
                  <span onclick="add(${i})"><a style="cursor:pointer;">Add To Cart</a></span>

                </div>
                <div class="title-product">
                  <h3>${data[i].title}</h3>
                </div>
                <div class="description-prod">
                  <p> ${data[i].description}</p>
                </div>
                <div class="card-footer">
                  <div class="wcf-left"><span class="price">price : ${data[i].price}</span></div>
                  <div class="wcf-right"><button class="buy-btn" onclick="addtofav(${i})"><i class="fa fa-heart"></i></button></div>
                </div>
              </div>
            </div>
          </div>
        `
    }
    //         var categ= document.getElementsByClassName('option')[0];

    // categ.innerHTML+=""
    // for(var c =0;c<data.length;c++){
    //     categ.innerHTML+=`
    //     <option value="">${data[c].title}</option>
    //     `
    // }

  }
}

// Nav icons : 

// Drop menu - Category :



function add(ind) {

  var cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(arr[ind]);
  localStorage.setItem('cart', JSON.stringify(cart));
}


function addtofav(ind) {
  var favv = JSON.parse(localStorage.getItem('favv')) || [];
  favv.push(arr[ind]);

  localStorage.setItem('favv', JSON.stringify(favv));
}







function search() {
  var text = document.getElementById('text').value;
  div.innerHTML = "";
  for (var i = 0; i < arr.length; i++) {

    if (arr[i].title.indexOf(text) > -1) {

      div.innerHTML += `
             
             <div class="col-md-3">
             <div class="wsk-cp-product">
             <div class="wsk-cp-img" onclick="desc(${arr[i].id})"  data-toggle="modal" data-target="#exampleModalCenter">
             <img src="${arr[i].image}" alt="Product" class="img-responsive" />
               </div>
               <div class="wsk-cp-text">
                 <div class="category">
                   <span onclick="add(${i})"><a style="cursor:pointer;">Add To Cart</a></span>
                 </div>
                 <div class="title-product">
                   <h3>${arr[i].title}</h3>
                 </div>
                 <div class="description-prod">
                   <p> ${arr[i].description}</p>
                 </div>
                 <div class="card-footer">
                   <div class="wcf-left"><span class="price">price : ${arr[i].price}</span></div>
                   <div class="wcf-right"><button class="buy-btn" onclick="addtofav(${i})"><i class="fa fa-heart"></i></button></div>
                   </div>
               </div>
             </div>
           </div>
        
        
        `
    }
  }
}

// Price range :

function ra() {
  div.innerHTML = "";
  var range = document.getElementById("range").value
  for (var i = 0; i < arr.length; i++) {
    console.log(range)
    if (arr[i].price <= range) {
      console.log(arr)
      div.innerHTML += `  
        

          <div class="col-md-3">
          <div class="wsk-cp-product">
              <div class="wsk-cp-img" onclick="shopmodal(${arr[i].id})"  data-toggle="modal" data-target="#exampleModalCenter">
              <img src="${arr[i].image}" alt="Product" class="img-responsive" />
            </div>
            <div class="wsk-cp-text">
              <div class="category">
                <span onclick="add(${i})"><a style="cursor:pointer;">Add To Cart</a></span>
              </div>
              <div class="title-product">
                <h3>${arr[i].title}</h3>
              </div>
              <div class="description-prod">
                <p> ${arr[i].description}</p>
              </div>
              <div class="card-footer">
                <div class="wcf-left"><span class="price">price : ${arr[i].price}</span></div>
                <div class="wcf-right"><button class="buy-btn" onclick="addtofav(${i})"><i class="fa fa-heart"></i></button></div>
                </div>
            </div>
          </div>
        </div>
         
`
    }
  }
}

// price range end
// var x=10; 


// function change()
// {
//     x=1000000;

//     return x+2;
// }
// console.log(x) //10
// change()
// console.log(x) // 1000000

function gettingnums() {


  var hearticon = document.getElementsByClassName("hearticon")[0];
  var cartIcon = document.getElementsByClassName("cartIcon")[0];
  var favv = JSON.parse(localStorage.getItem('favv')) || [];
  var cart = JSON.parse(localStorage.getItem('cart')) || [];
  hearticon.innerHTML += `
   <span> ${favv.length} </span>
  
  `
  cartIcon.innerHTML += `
   <span> ${cart.length} </span>
  
  `


}





// var rangeInput = document.getElementById('range');
// var rangeValue = rangeInput.value;
// console.log(rangeValue);

function desc(param) {
  var favv = JSON.parse(products.responseText)// convert from type string to type object
  var modalContent = document.getElementsByClassName('modal-header')[0];


  for (e = 0; e < favv.length; e++) {
    if (favv[e].id == param) {
      console.log(favv[e]);


      modalContent.innerHTML = `
      
      <div class="">
      <div class="modalcard p-3 bg-white">
      <i class="fa fa-times modal-close" aria-hidden="true"  data-dismiss="modal" style="cursor:pointer;"></i>  

            <div class="about-product text-center mt-2">
            <img src="${favv[e].image}" width="300" height="300">
                <div>
                    <h4>${favv[e].title}</h4>
                    <p class="mt-0 text-black-50 pwidth">${favv[e].description}</p>
                </div>
                </div>
                <button style="cursor:pointer;" class="addbtn" onclick="add(${e})">Add To Cart </button>
                <div class="wcf-right" style="width: 100px;"><button class="buy-btn" onclick="addtofav(${e})" style="width: 50px;height: 40px;"><i class="fa fa-heart"></i></button></div>
                <div class="stats mt-2">
            </div>
            <div class="price"><span>Price :</span><span>$${favv[e].price}</span>
            </div>
           
        </div>


    </div>
      
      
      
      `
    }
  }
}

function shopmodal(param) {
  var favv = JSON.parse(products.responseText)// convert from type string to type object
  var modalContent = document.getElementsByClassName('cont')[0];


  for (e = 0; e < favv.length; e++) {
    if (favv[e].id == param) {
      console.log(favv[e]);


      modalContent.innerHTML = `
      
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

    }
  }


}
