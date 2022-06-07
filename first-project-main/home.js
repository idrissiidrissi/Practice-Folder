let carts = document.querySelectorAll('.add-cart');

let products = [
  {
    name: 'Black Figs',
    tag: 'blackfig',
    price: 3.95,
    inCart: 0
  },
  {
    name: "Navel",
    tag:"navel",
    price: 2.95,
    inCart: 0
  },
  {
    name: "Pineappele",
    tag:"pineapple",
    price: 2.95,
    inCart: 0
  },
  {
    name: "apples",
    tag:"Appeles",
    price: 3.95,
    inCart: 0
  }
]; 

for (let i=0; i < carts.length; i++) {
carts[i].addEventListener('click', () => {
  cartNumbers(products[i]);
  totalCost(products[i])
})
}

function onloadCartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers');
  
  if(productNumbers) {
    document.querySelector('.cart span').textContent = productNumbers;
  }
}

function cartNumbers(product) {
  
  let productNumbers = localStorage.getItem('cartNumbers');
  
  productNumbers = parseInt(productNumbers);
  if( productNumbers ) {
    localStorage.setItem('cartNumbers', productNumbers + 1);
    document.querySelector('.cart span').textContent = productNumbers + 1;

  } else {
  localStorage.setItem('cartNumbers', 1);
  document.querySelector('.cart span').textContent = 1;
}

  setItems(product);
}

function setItems(product) {
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);
  if(cartItems != null) {
    if(cartItems[product.tag] == undefined) {
    cartItems = {
      ...cartItems,
      [product.tag]: product
      }
    }
    cartItems[product.tag].inCart += 1;
  } else {
    product.inCart = 1;
     cartItems = {
  [product.tag]: product
   }
  }
localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
let cartCost = localStorage.getItem('totalCost');

console.log("my cartCost is", cartCost);
console.log(typeof cartCost);
if(cartCost != null) {
  cartCost = parseInt(cartCost);
  localStorage.setItem("totalCost", cartCost + product.price);
} else {
localStorage.setItem("totalCost", product.price);
}
}

function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let productContainer = document.querySelector(".products");
  let cartCost = localStorage.getItem('totalCost');
  if( cartItems && productContainer ) {
      productContainer.innerHTML = '';
      Object.values(cartItems).map(item => {
        productContainer.innerHTML += `
        <div class="product">
        <ion-icon name="close-circle"></ion-icon>
        <img src="./fruits. images/${item.tag}.jpg">
        <span>${item.name}</span>
        </div>
        <div class="price">$${item.price}</div>
        <div class="quantity">
        <ion-icon name="arrow-dropleft-circle"></ion-icon>
        <span>${item.inCart}</span>
        <ion-icon name="arrow-dropright-circle"></ion-icon>
        </div>
        <div class="total">$${item.inCart * item.price}</div>
        `;
      });

      productContainer.innerHTML += `
      <div class="basketTotalContaniner">
      <h4 class="basketTotale">
       Basket Total
       </h4></div>
      <h4 class="basketTotal">
      $${cartCost}
      </h4>
      
      `;
    }
    }
 
function productsInCart() {
currentProduct = increaseButtons[i].parentElementSibling.previo
console.log(currentProduct);

cartItems[currentProduct].inCart += 1;
cartNumbers( cartItems[currentProduct]);
localStorage.setItem('productsInCart',JSON.stringify(cartItems));
displayCart();

} 
  

onloadCartNumbers();
displayCart();


const hamburger = document.getElementById('hamburger');
const navUl = document.getElementById('nav-ul');
hamburger.addEventListener('click',()=>{
    navUl.classList.toggle('show');
});


/*order*/

const openOrderButtons = document.querySelectorAll('[data-order-target]')
const closeOrderButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openOrderButtons.forEach(button => {
  button.addEventListener('click', () => {
    const order = document.querySelector(button.dataset.orderTarget)
    openOrder(order)
  })
})

overlay.addEventListener ('click', () => {
  const orders = document.querySelectorAll('.order.active')
  orders.forEach(order => {
    closeOrder(order)
  })
})

closeOrderButtons.forEach(button => {
  button.addEventListener('click', () => {
    const order = button.closest('.order')
    closeOrder(order)
  })
})

function openOrder(order) {
  if (order == null) return
  order.classList.add('active')
  overlay.classList.add('active')
}

function closeOrder(order) {
  if (order == null) return
  order.classList.remove('active')
  overlay.classList.remove('active')
}

/*add to cart*/






