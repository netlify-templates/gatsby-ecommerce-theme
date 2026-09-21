<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Yara - متجر الإكسسوارات</title>
  <style>
    body {
      font-family: 'Cairo', sans-serif;
      margin: 0;
      background: #fff0f6;
      color: #333;
    }

    header {
      background: linear-gradient(90deg, #ff66b2, #a64ca6);
      color: white;
      text-align: center;
      padding: 20px;
      font-size: 24px;
      font-weight: bold;
    }

    .container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 20px;
      padding: 20px;
    }

    .product {
      background: white;
      border-radius: 12px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      padding: 15px;
      text-align: center;
      transition: transform 0.3s;
    }

    .product:hover {
      transform: scale(1.05);
    }

    .product img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 10px;
    }

    .product h3 {
      margin: 10px 0 5px;
      color: #a64ca6;
    }

    .product p {
      margin: 5px 0;
      font-weight: bold;
      color: #ff66b2;
    }

    .product button {
      background: #ff66b2;
      color: white;
      border: none;
      padding: 10px 15px;
      border-radius: 8px;
      cursor: pointer;
      transition: background 0.3s;
    }

    .product button:hover {
      background: #a64ca6;
    }

    .cart {
      position: fixed;
      top: 0;
      left: 0;
      width: 280px;
      height: 100%;
      background: #fff;
      box-shadow: 2px 0 10px rgba(0,0,0,0.2);
      padding: 20px;
      transform: translateX(-100%);
      transition: transform 0.3s;
      overflow-y: auto;
      z-index: 1000;
    }

    .cart.open {
      transform: translateX(0);
    }

    .cart h2 {
      margin-top: 0;
      color: #a64ca6;
    }

    .cart-item {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      border-bottom: 1px solid #ddd;
      padding-bottom: 5px;
    }

    .cart-toggle {
      position: fixed;
      top: 20px;
      right: 20px;
      background: #a64ca6;
      color: white;
      border: none;
      padding: 12px;
      border-radius: 50%;
      cursor: pointer;
      z-index: 1100;
    }
  </style>
</head>
<body>

  <header>✨ متجر يارا للإكسسوارات ✨</header>

  <button class="cart-toggle">🛒</button>

  <div class="cart" id="cart">
    <h2>سلة المشتريات</h2>
    <div id="cart-items"></div>
    <p><strong>المجموع:</strong> <span id="total">0</span> ر.س</p>
  </div>

  <div class="container">
    <div class="product">
      <img src="https://i.ibb.co/2t7m2Kj/bracelet.jpg" alt="إسوارة">
      <h3>إسوارة ذهبية</h3>
      <p>120 ر.س</p>
      <button onclick="addToCart('إسوارة ذهبية', 120)">أضف للسلة</button>
    </div>
    <div class="product">
      <img src="https://i.ibb.co/7ppFd0p/earrings.jpg" alt="أقراط">
      <h3>أقراط لؤلؤ</h3>
      <p>95 ر.س</p>
      <button onclick="addToCart('أقراط لؤلؤ', 95)">أضف للسلة</button>
    </div>
    <div class="product">
      <img src="https://i.ibb.co/WP3D7hQ/necklace.jpg" alt="قلادة">
      <h3>قلادة فضية</h3>
      <p>180 ر.س</p>
      <button onclick="addToCart('قلادة فضية', 180)">أضف للسلة</button>
    </div>
  </div>

  <script>
    const cart = document.getElementById("cart");
    const cartToggle = document.querySelector(".cart-toggle");
    const cartItems = document.getElementById("cart-items");
    const total = document.getElementById("total");

    let cartData = [];
    let totalPrice = 0;

    cartToggle.addEventListener("click", () => {
      cart.classList.toggle("open");
    });

    function addToCart(name, price) {
      cartData.push({ name, price });
      totalPrice += price;
      renderCart();
    }

    function renderCart() {
      cartItems.innerHTML = "";
      cartData.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("cart-item");
        div.innerHTML = `<span>${item.name}</span><span>${item.price} ر.س</span>`;
        cartItems.appendChild(div);
      });
      total.textContent = totalPrice;
    }
  </script>

</body>
</html>

