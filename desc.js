document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  const products = [
    {
      id: 1,
      name: "Double door Fridge",
      image: "./images/fridge-removebg-preview.png", // Add the URL for the image
      rating: "images/rating-removebg-preview (1).png",
      price: "₹50,000",
      desc: "High quality refrigerator with the latest cooling technology.",
    },
    {
      id: 2,
      name: "Single door refrigerator",
      image: "images/single fridge.avif", // Add the URL for the image
      rating: "images/rating-removebg-preview (1).png",
      price: "₹35,000",
      desc: "Efficient refrigerator with multiple cooling modes.",
    },
    {
      id: 3,
      name: "French door refrigerator",
      image: "images/french door.png", // Add the URL for the image
      rating: "images/rating-removebg-preview (1).png",
      price: "₹90,000",
      desc: "Compact microwave with advanced features.",
    },
    {
      id: 4,
      name: "Top freezer refrigerator",
      image: "images/top freezer.avif", // Add the URL for the image
      rating: "images/rating-removebg-preview (1).png",
      price: "₹85,000",
      desc: "Energy efficient fridge with a sleek design.",
    },
    {
      id: 5,
      name: "Quad door refrigerator",
      image: "images/quad_door-removebg-preview.png", // Add the URL for the image
      rating: "images/rating-removebg-preview (1).png",
      price: "₹95,000",
      desc: "Top loading washing machine with smart features.",
    },
    {
      id: 90,
      name: "Dry Mixture Grinder",
      image: "images/dry_g-removebg-preview.png", // Add the URL for the image
      rating: "images/rating-removebg-preview (1).png",
      price: "₹25,000",
      desc: "Top cullinary product with cutting edge technology.",
    },
    {
      id: 91,
      name: "Wet Mixture Grinder",
      image: "images/wet_g-removebg-preview.png", // Add the URL for the image
      rating: "images/rating-removebg-preview (1).png",
      price: "₹35,000",
      desc: "Top cullinary product with cutting edge technology.",
    },
    {
      id: 92,
      name: "Juicer Mixture Grinder Three in One",
      image: "images/three-removebg-preview.png", // Add the URL for the image
      rating: "images/rating-removebg-preview (1).png",
      price: "₹45,000",
      desc: "Top cullinary product with cutting edge technology.",
    },
  ];

  const product = products.find((p) => p.id == productId);

  if (product) {
    document.getElementById("product-image").src = product.image;
    document.getElementById("product-name").innerText = product.name;
    document.getElementById("product-price").innerText = product.price;
    document.getElementById("product-desc").innerText = product.desc;
  } else {
    document.querySelector(".content").innerHTML = "<p>Product not found.</p>";
  }

  const cartButton = document.getElementById("add-to-cart");
  cartButton.addEventListener("click", function () {
    addToCart();
  });

  const toggleCartButton = document.getElementById('cart-button');
  toggleCartButton.addEventListener('click', function() {
    toggleCartContents();
  });

  function addToCart() {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const productQuantity = document.getElementById("product-quantity").value;
    const productName = document.getElementById("product-name").innerText;
    const productPrice = document.getElementById("product-price").innerText;
    const productImage = product.image; // Retrieve the product image URL

    const productToAdd = { name: productName, price: productPrice, quantity: productQuantity, image: productImage };
    cartItems.push(productToAdd);

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    updateCartDisplay();
    updateCartIcon();
  }

  function toggleCartContents() {
    const cartContents = document.getElementById("cart-contents");
    cartContents.style.display = cartContents.style.display === "none" ? "block" : "none";
  }

  function updateCartDisplay() {
    const cartItemsList = document.getElementById("cart-items");
    cartItemsList.innerHTML = "";

    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartItems.forEach((item, index) => {
      const li = document.createElement("li");
      li.className = "cart-item";

      const img = document.createElement("img");
      img.src = item.image;
      img.alt = item.name;
      img.className = "cart-item-image";

      const itemDetails = document.createElement("div");
      itemDetails.className = "cart-item-details";
      itemDetails.innerHTML = `${item.name} - ${item.price} x ${item.quantity}`;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.className = "delete-item";
      deleteButton.dataset.index = index;
      deleteButton.addEventListener("click", function () {
        removeFromCart(index);
      });

      li.appendChild(img);
      li.appendChild(itemDetails);
      li.appendChild(deleteButton);
      cartItemsList.appendChild(li);
    });
  }

  function updateCartIcon() {
    const cartButton = document.getElementById("cart-button");
    const cartIcon = cartButton.querySelector("img");
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    if (cartItems.length > 0) {
      // cartIcon.style.border = "2px solid red"; // Indication style
    } else {
      cartIcon.style.border = "none";
    }
  }

  function removeFromCart(index) {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartItems.splice(index, 1);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    updateCartDisplay();
    updateCartIcon();
  }

  updateCartDisplay();
  updateCartIcon();
});
