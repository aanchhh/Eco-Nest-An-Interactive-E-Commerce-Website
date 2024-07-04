document.addEventListener("DOMContentLoaded", function () {
    const brandFilter = document.getElementById("brand");
    const priceFilter = document.getElementById("price");
    const productContainer = document.querySelector(".product-container");
  
    brandFilter.addEventListener("change", filterProducts);
    priceFilter.addEventListener("change", filterProducts);
  
    function filterProducts() {
      const brand = brandFilter.value;
      const price = priceFilter.value;
  
      let products = Array.from(productContainer.children);
  
      // Filter by brand
      products.forEach((product) => {
        const productName = product.querySelector("h4").innerText;
        if (brand === "all" || productName.includes(freezer)) {
          product.style.display = "block";
        } else {
          product.style.display = "none";
        }
      });
  
      // Sort by price
      products = products.filter((product) => product.style.display !== "none");
  
      if (price === "low") {
        products.sort((a, b) => {
          const priceA = parseInt(
            a.querySelector(".price").innerText.replace("₹", "")
          );
          const priceB = parseInt(
            b.querySelector(".price").innerText.replace("₹", "")
          );
          return priceA - priceB;
        });
      } else if (price === "high") {
        products.sort((a, b) => {
          const priceA = parseInt(
            a.querySelector(".price").innerText.replace("₹", "")
          );
          const priceB = parseInt(
            b.querySelector(".price").innerText.replace("₹", "")
          );
          return priceB - priceA;
        });
      }
  
      // Reorder products in container
      productContainer.innerHTML = "";
      products.forEach((product) => productContainer.appendChild(product));
    }
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const cartButtons = document.querySelectorAll('.add-to-cart');
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    cartButtons.forEach(button => {
        button.addEventListener('click', function() {
            addToCart(this);
        });
    });

    const cartButton = document.getElementById('cart-button');
    cartButton.addEventListener('click', function() {
        toggleCartContents();
    });

    function addToCart(button) {
        const productBox = button.closest('.box');
        const productName = productBox.querySelector('h4').textContent;
        const productPrice = productBox.querySelector('.price').textContent;
        const productQuantity = productBox.querySelector('.quantity').value;
        
        const product = { name: productName, price: productPrice, quantity: productQuantity };
        cartItems.push(product);

        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        updateCartDisplay();
        updateCartIcon();
    }

    function toggleCartContents() {
        const cartContents = document.getElementById('cart-contents');
        cartContents.style.display = cartContents.style.display === 'none' ? 'block' : 'none';
    }

    function updateCartDisplay() {
        const cartItemsList = document.getElementById('cart-items');
        cartItemsList.innerHTML = '';

        cartItems.forEach((item, index) => {
            const li = document.createElement('li');
            li.className = 'cart-item';
            li.innerHTML = `${item.name} - ${item.price} x ${item.quantity}`;
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.className = 'delete-item';
            deleteButton.dataset.index = index;
            deleteButton.addEventListener('click', function() {
                removeFromCart(index);
            });
            li.appendChild(deleteButton);
            cartItemsList.appendChild(li);
        });
    }

    function updateCartIcon() {
        const cartButton = document.getElementById('cart-button');
        const cartIcon = cartButton.querySelector('img');
        if (cartItems.length > 0) {
            // cartIcon.style.border = '2px solid red';  // This can be any indication style you prefer
        } else {
            cartIcon.style.border = 'none';
        }
    }

    function removeFromCart(index) {
        cartItems.splice(index, 1);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        updateCartDisplay();
        updateCartIcon();
    }

    updateCartDisplay();
    updateCartIcon();
});

document.getElementById('btn').onsubmit = function(event) {
  event.preventDefault(); // Prevent the default form submission

  const searchQuery = document.getElementById('items').value.toLowerCase().trim();

  if (searchQuery === "double door fridge") {
      window.location.href = "desc.html?id=1";
  } else if (searchQuery === "fridges" || "refrigerator" || "fridge" || "refrigerators") {
      window.location.href = "fridge.html";
  } else if (searchQuery === "single door fridge" || "single door") {
      window.location.href = "desc.html?id=2";  
  } else if (searchQuery === "french door fridge" || "french door") {
      window.location.href = "desc.html?id=3";
  } else if (searchQuery === "freezer top fridge" || "freezer on top") {
      window.location.href = "desc.html?id=4";
  } else if (searchQuery === "quad door fridge" || "4 doors") {
      window.location.href = "desc.html?id=5";
  } else {
      alert("Product not found");
  }

  return false;
}
