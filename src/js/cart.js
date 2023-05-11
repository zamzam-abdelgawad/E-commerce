var container =document.getElementsByClassName('body')[0];
var arr=[]; 

function gettingitems(){
//   Icons  :

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
// Rates : 

var stars = document.getElementById("stars");

function getStars(rating) {

  // Round to nearest half
  rating = Math.round(rating * 2) / 2;
  let output = [];

  // Append all the filled whole stars
  for (var i = rating; i >= 1; i--)
    output.push('<i class="fa fa-star" aria-hidden="true" style="color: gold;"></i>&nbsp;');

  // If there is a half a star, append it
  if (i == .5) output.push('<i class="fa fa-star-half-o" aria-hidden="true" style="color: gold;"></i>&nbsp;');

  // Fill the empty stars
  for (let i = (5 - rating); i >= 1; i--)
    output.push('<i class="fa fa-star-o" aria-hidden="true" style="color: gold;"></i>&nbsp;');

  return output.join('');

}


// Featch
  var newdata= JSON.parse(localStorage.getItem('cart'))||[];
  arr=newdata
  console.log(newdata);

for (var i = 0; i < arr.length; i++) {
   
   container.innerHTML+=`
 
   
   <div class="item">
                            <div class="image">
                                <img src="${arr[i].image}">
                            </div>
                            <div class="name">
                                <div class="name-text">
                                    <p>${arr[i].title}</p>
                                </div>
                                <div class="button">
                                    <a class="btn bg-primary" href="billing-information.html">Checkout now</a>
                                    <a class="cart-btn " href="#" onclick="fav(${i})">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18"
                                            viewBox="0 0 20 18">
                                            <g id="Heart" transform="translate(1 1)">
                                                <path id="Heart-2" data-name="Heart"
                                                    d="M18.161,4.413a4.674,4.674,0,0,0-6.7,0l-.913.93-.913-.93a4.675,4.675,0,0,0-6.7,0,4.893,4.893,0,0,0,0,6.828l.913.93L10.548,19l6.7-6.828.913-.93a4.892,4.892,0,0,0,0-6.828Z"
                                                    transform="translate(-1.549 -2.998)" fill="#fff" stroke="#1a2224"
                                                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                            </g>
                                        </svg>
                                    </a>
                                    <a class="del" href="#" onclick="alertww()">Delete</a>
                                </div>
                            </div>
                            <div class="price">
                                <span>  ${arr[i].price} $</span> <del>$499.99</del>
                            </div>
                            <div class="rating">
                            <b>Rating: <span id=stars></span></b>                            </div>
                            <div class="info">
                                <div class="size">
                                    <div class="product-pricelist-selector-size">
                                        <h6>Sizes</h6>
                                        <div class="sizes" id="sizes">
                                            <li class="sizes-all active">M</li>
                                        </div>
                                    </div>
                                    <div class="product-pricelist-selector-color">
                                        <h6>Colors</h6>
                                        <div class="colors" id="colors">
                                            <li class="colorall color-1 active"></li>
                                        </div>
                                    </div>
                                </div>
                                <div class="quantity">
                                    <div class="product-pricelist-selector-quantity">
                                        <h6>quantity</h6>
                                        <div class="wan-spinner wan-spinner-4">
                                            <a href="javascript:void(0)" class="minus">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="11.98" height="6.69"
                                                    viewBox="0 0 11.98 6.69">
                                                    <path id="Arrow" d="M1474.286,26.4l5,5,5-5"
                                                        transform="translate(-1473.296 -25.41)" fill="none"
                                                        stroke="#989ba7" stroke-linecap="round" stroke-linejoin="round"
                                                        stroke-width="1.4" />
                                                </svg>
                                            </a>
                                            <input type="text" value="1" min="1">
                                            <a href="javascript:void(0)" class="plus"><svg
                                                    xmlns="http://www.w3.org/2000/svg" width="11.98" height="6.69"
                                                    viewBox="0 0 11.98 6.69">
                                                    <g id="Arrow" transform="translate(10.99 5.7) rotate(180)">
                                                        <path id="Arrow-2" data-name="Arrow" d="M1474.286,26.4l5,5,5-5"
                                                            transform="translate(-1474.286 -26.4)" fill="none"
                                                            stroke="#1a2224" stroke-linecap="round"
                                                            stroke-linejoin="round" stroke-width="1.4" />
                                                    </g>
                                                </svg></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`
}

  //  Total Items + SubTotal :
  var summery = document.getElementsByClassName('summery')[0]
  var sum = 0;
for(var sub=0;sub<arr.length;sub++){
   sum += arr[sub].price
  }
  
  summery.innerHTML+=`
  
  <div class="card-price-list d-flex justify-content-between align-items-center">
  <div class="item">
      <p>Total Items</p>
  </div>
  <div class="price">
      <p>${arr.length}</p>
  </div>
</div>
<div class="card-price-list d-flex justify-content-between align-items-center">
  <div class="item">
      <p>Shipping Cast</p>
  </div>
  <div class="price">
      <p>$55</p>
  </div>
</div>
<div class="card-price-list d-flex justify-content-between align-items-center">
  <div class="item">
      <p>Discount</p>
  </div>
  <div class="price">
      <p>8%</p>
  </div>
</div>
<div class="card-price-list d-flex justify-content-between align-items-center">
  <div class="item">
      <p>Taxes</p>
  </div>
  <div class="price">
      <p>$5.49</p>
  </div>
</div>
<div class="card-price-subtotal d-flex justify-content-between align-items-center">
  <div class="total-text">
      <p>Total Price</p>
  </div>
  <div class="total-price">
      <p>$${sum}</p>
  </div>

</div>
<form action="#">
  <a href="billing-information.html" class="btn bg-primary" type="submit" style="width: 100%;">Checkout Now</a>
</form>
</div>
`

}
function alertww(i){
  console.log(arr);
   arr.splice(i,1);
  localStorage.setItem("cart",JSON.stringify(arr)); //overwrite 

  alert("removed")

}
function fav(ind){
    var favv = JSON.parse(localStorage.getItem('favv')) || [];
    favv.push(arr[ind]);
  
  
    localStorage.setItem('favv', JSON.stringify(favv));
  }


// Wish List : 
function getwish(){

    var cartIcon = document.getElementsByClassName("cartIcon")[0];
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartIcon.innerHTML+=`
     <span> ${cart.length} </span>
    
    `
    // 
    var hearticon = document.getElementsByClassName("hearticon")[0];
    var favv = JSON.parse(localStorage.getItem('favv')) || [];
    hearticon.innerHTML+=`
     <span> ${favv.length} </span>
    
    `



    // 
    var wishdata= JSON.parse(localStorage.getItem('favv'))||[];
    arr2=wishdata
var wish = document.getElementsByClassName('wish')[0];

for (var i = 0; i < arr2.length; i++) {

wish.innerHTML+=`

<div class="item">
<div class="image">
    <img src="${arr2[i].image}">
</div>
<div class="name">
    <div class="name-text">
        <p>${arr2[i].title}</p>
    </div>
    <div class="button">
        <div class="product-pricelist-selector-button">
        <span onclick="add(${i})" class="btn cart-bg " ><a style="cursor:pointer;">Add To Cart</a></span>
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17"
                    viewBox="0 0 17 17">
                    <g id="Your_Bag" data-name="Your Bag" transform="translate(1)">
                        <g id="Icon" transform="translate(0 1)">
                            <ellipse id="Ellipse_2" data-name="Ellipse 2" cx="0.682"
                                cy="0.714" rx="0.682" ry="0.714"
                                transform="translate(4.773 13.571)" fill="none"
                                stroke="#fff" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" />
                            <ellipse id="Ellipse_3" data-name="Ellipse 3" cx="0.682"
                                cy="0.714" rx="0.682" ry="0.714"
                                transform="translate(12.273 13.571)" fill="none"
                                stroke="#fff" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" />
                            <path id="Path_3" data-name="Path 3"
                                d="M1,1H3.727l1.827,9.564a1.38,1.38,0,0,0,1.364,1.15h6.627a1.38,1.38,0,0,0,1.364-1.15L16,4.571H4.409"
                                transform="translate(-1 -1)" fill="none" stroke="#fff"
                                stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" />
                        </g>
                    </g>
                </svg>
            </a>
        </div>
        <button class="del" type="button" style="border:none;" onclick="removefavv(${i})">Remove</button>
    </div>
</div>
<div class="price">
    <span>$${arr2[i].price}</span> <del>$499.99</del>
</div>
<div class="rating">
    <i class="fas fa-star"></i> 5.0
</div>
<div class="info">
    <div class="size">
        <div class="product-pricelist-selector-size">
            <h6>Sizes</h6>
            <div class="sizes" id="sizes">
                <li class="sizes-all active">M</li>
            </div>
        </div>
        <div class="product-pricelist-selector-color">
            <h6>Colors</h6>
            <div class="colors" id="colors">
                <li class="colorall color-1 active"></li>
            </div>
        </div>
    </div>
    <div class="quantity">
        <div class="product-pricelist-selector-quantity">
            <h6>quantity</h6>
            <div class="wan-spinner wan-spinner-4">
                <a href="javascript:void(0)" class="minus">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11.98" height="6.69"
                        viewBox="0 0 11.98 6.69">
                        <path id="Arrow" d="M1474.286,26.4l5,5,5-5"
                            transform="translate(-1473.296 -25.41)" fill="none"
                            stroke="#989ba7" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="1.4" />
                    </svg>
                </a>
                <input type="text" value="1" min="1">
                <a href="javascript:void(0)" class="plus">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11.98" height="6.69"
                        viewBox="0 0 11.98 6.69">
                        <g id="Arrow" transform="translate(10.99 5.7) rotate(180)">
                            <path id="Arrow-2" data-name="Arrow" d="M1474.286,26.4l5,5,5-5"
                                transform="translate(-1474.286 -26.4)" fill="none"
                                stroke="#1a2224" stroke-linecap="round"
                                stroke-linejoin="round" stroke-width="1.4" />
                        </g>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</div>
</div>




`
}


}

function add(ind) {

    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(arr2[ind]);
    localStorage.setItem('cart', JSON.stringify(cart));
  }


  function removefavv(i){
    arr2.splice(i,1);
    console.log(arr2);
    localStorage.setItem("favv",JSON.stringify(arr2)); //overwrite 
  }


