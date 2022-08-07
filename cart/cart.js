//local storage name of ad to cart: cartItems
var cartArr = JSON.parse(localStorage.getItem("cartItems")) || [];

var makeupData = [
  {
    image_url:
      "https://i.ibb.co/K0JNhDb/sugar-cosmetics-contour-de-force-mini-blush-01-peach-peak-soft-peach-pink-11020203884627.jpg",
    name: "Contour De Force Mini Blush",
    price: 78,
    rating: 4.9,
    star_url: "https://i.ibb.co/4d3n7ZC/star.png",
    reviews: "(40)",
    product: "blush",
    shade_url: "https://i.ibb.co/P4hFywk/ic-multiple-shades-opt2.png",
    shade_no: 5,
    count: 1,
  },
  {
    image_url:
      "https://i.ibb.co/MGbG5pt/1-51afaa84-af89-42b5-bdb8-a51b01257bc0.jpg",
    name: "Contour De Force Face Palette",
    price: 799,
    rating: 4.7,
    star_url: "https://i.ibb.co/4d3n7ZC/star.png",
    reviews: "(5)",
    shade_url: "https://i.ibb.co/P4hFywk/ic-multiple-shades-opt2.png",
    shade_no: 7,
    count: 1,
    product: "blush",
  },
  {
    image_url:
      "https://i.ibb.co/s3L8jVM/sugar-cosmetics-contour-de-force-mini-bronzer-01-taupe-topper-cool-toned-brown-gray-undertone-110202.jpg",
    name: "Contour De Force Mini Bronzer",
    price: 399,
    rating: 4.7,
    star_url: "https://i.ibb.co/4d3n7ZC/star.png",
    reviews: "(20)",
    shade_url: "https://i.ibb.co/P4hFywk/ic-multiple-shades-opt2.png",
    shade_no: 11,
    count: 1,
    product: "",
  },
  {
    image_url:
      "https://i.ibb.co/41xztXR/sugar-cosmetics-matte-attack-transferproof-lipstick-01-boldplay-cardinal-pink-13678351515731.jpg",
    name: "Matte Attack Transferproof Lipstick",
    price: 699,
    rating: 4.7,
    star_url: "https://i.ibb.co/4d3n7ZC/star.png",
    reviews: "(10)",
    shade_url: "https://i.ibb.co/P4hFywk/ic-multiple-shades-opt2.png",
    shade_no: 4,
    count: 1,
    product: "matte",
  },
  {
    image_url:
      "https://i.ibb.co/B3NZyzg/sugar-cosmetics-mettle-satin-lipstick-01-sophie-bright-fuchsia-pink-fuchsia-13706258088019.jpg",
    name: "Mattle Satin Lipstick",
    price: 999,
    rating: 4.9,
    star_url: "https://i.ibb.co/4d3n7ZC/star.png",
    reviews: "(45)",
    shade_url: "https://i.ibb.co/P4hFywk/ic-multiple-shades-opt2.png",
    shade_no: 20,
    count: 1,
    product: "Matte",
  },
  {
    image_url:
      "https://i.ibb.co/FBRYK8d/1-df1e9403-ae9d-430c-8226-622d21c4743d.jpg",
    name: "Arch Arrival Brow Definer",
    price: 499,
    rating: 4.7,
    star_url: "https://i.ibb.co/4d3n7ZC/star.png",
    reviews: "(20)",
    shade_url: "https://i.ibb.co/P4hFywk/ic-multiple-shades-opt2.png",
    shade_no: 8,
    count: 1,
    product: "eye",
  },
];

// localStorage.setItem("cartItems", JSON.stringify(makeupData));

//Local Stogare Key: cartItems
var cartArr = JSON.parse(localStorage.getItem("cartItems")) || [];

if (cartArr == "") {
  let image = document.createElement("img");
  image.id = "emptyCartImg";
  image.src = "https://in.sugarcosmetics.com/ic_empty_cart.png";
  let p = document.createElement("p");
  p.id = "emptyCartText";
  p.innerText =
    "Hey! It's lonely here. Your bag seems to have no company. Why not add some products?";

  let button = document.createElement("button");
  button.id = "emptyCartBtn";
  button.innerText = "SHOP NOW";
  button.addEventListener("click", () => {
    location.href = "../index.html";
  });

  console.log(p);

  button.addEventListener("click", function () {
    indexfnc();
  });
  document.querySelector(".emptyCart").append(image, p, button);

  document.querySelector("#cart-container").remove();
} else {
  console.log("Cart: ", cartArr);
  displayCart(cartArr);

  function displayCart(cartArr) {
    document.querySelector(".cart-product").innerHTML = "";
    cartArr.map(function (data, index) {
      var divCartlft = document.createElement("div");
      divCartlft.id = "divCartlft";
      //Image Creation
      var image = document.createElement("img");

      image.setAttribute("src", data.image_url);

      //Name Creation
      var name = document.createElement("p");
      name.id = "name";
      name.textContent = data.name;

      //Image & Name in one div;
      var divImgName = document.createElement("div");
      divImgName.id = "divImgName";
      divImgName.append(image, name);

      //Price Creation

      var price = document.createElement("p");
      price.textContent = data.price;

      //Increment/Decrement Added Product Creation
      var divBox = document.createElement("div");
      divBox.id = "divBox";
      var divRmv = document.createElement("div");
      divRmv.id = "divRmv";
      divRmv.innerHTML = '<i class="fas fa-trash"></i>';
      var divDec = document.createElement("div");
      divDec.id = "divDec";
      divDec.innerHTML = '<i class="fas fa-minus-circle"></i>';
      var divQty = document.createElement("div");
      divQty.id = "divQty";
      divQty.textContent = data.count;
      var divInc = document.createElement("div");
      divInc.id = "divInc";
      divInc.innerHTML = '<i class="fas fa-plus-circle"></i>';

      var divPriceBox = document.createElement("div");
      divPriceBox.id = "divPriceBox";

      //Append to divBox
      divBox.append(divRmv, divDec, divQty, divInc, divPriceBox);

      var divQtyP = document.createElement("div");
      divQtyP.id = "divQtyP";
      divQtyP.textContent = data.count;

      var divMul = document.createElement("div");
      divMul.id = "divMul";
      divMul.textContent = "x";

      var divPrice = document.createElement("div");
      divPrice.id = "divPrice";
      divPrice.textContent = data.price;

      var divEqual = document.createElement("div");
      divEqual.id = "=";
      divEqual.textContent = "=";

      var divPTotal = document.createElement("div");
      divPTotal.id = "divPTotal";
      divPTotal.textContent = data.price * data.count;

      //Append to divPriceBox
      divPriceBox.append(divQtyP, divMul, divPrice, divEqual, divPTotal);

      //Append to divCartlft
      divCartlft.append(divImgName, divBox);
      document.querySelector(".cart-product").append(divCartlft);

      //Remove Creation
      // var remove = document.createElement("p");
      // remove.textContent = "Remove"
      divRmv.addEventListener("click", function () {
        removeItem(index);
      });

      //Increment function Call
      divInc.addEventListener("click", function () {
        incrementProduct(index);
      });

      //Decreement function Call
      divDec.addEventListener("click", function () {
        decrementProduct(index);
      });
    });
  }

  //Total calculate
  var total = cartArr.reduce(function (acc, cv) {
    return acc + cv.price * cv.count;
  }, 0);
  localStorage.setItem("total", total);

  console.log("Total: ", total);

  document.querySelector(
    ".smry-cart-total"
  ).textContent = `Cart Total : RS.${total} `;

  //Coupon Apply
  document.querySelector("#cart-total").textContent = total;
  localStorage.setItem("discountPrice", 0);

  var discPrice = JSON.parse(localStorage.getItem("discountPrice"));

  //Check didcount =0
  if (discPrice == 0) {
    document.querySelector("#disc-applied").textContent = 0;
    document.querySelector("#pay-amount").textContent = total;
  }

  document.querySelector("form").addEventListener("submit", discount);
  //Apply Discount
  function discount(event) {
    event.preventDefault();
    var coupon = document.querySelector("#coupon").value;
    if (coupon == "sahid30") {
      document.querySelector(".invalid-coupon").textContent = "";
      document.querySelector(".valid-coupon").textContent = "Coupon Applied";
      var discountPrice = total * 0.7;

      localStorage.setItem("discountPrice", discountPrice);
      document.querySelector("#disc-applied").textContent = total * 0.3;
      document.querySelector("#pay-amount").textContent = discountPrice;

      console.log("discount:", discountPrice);
    } else {
      // localStorage.setItem("discountPrice",0);
      document.querySelector(".valid-coupon").textContent = "";
      document.querySelector(".invalid-coupon").textContent = "Invalid Coupon";
    }
  }

  //Redirect to payment page
  document.getElementById("checkOut").addEventListener("click", checkOut);
  function checkOut(event) {
    total = JSON.parse(localStorage.getItem("total"));
    // window.location.href = "payment.html"
    let aname = document.getElementById("aname").value;
    let aphone = document.getElementById("aphone").value;
    let aemail = document.getElementById("aemail").value;
    let azip = document.getElementById("azip").value;
    let alocality = document.getElementById("alocality").value;
    let acity = document.getElementById("acity").value;
    let acountry = document.getElementById("acountry").value;

    if (
      aname == "" ||
      aphone == "" ||
      aemail == "" ||
      azip == "" ||
      alocality == "" ||
      acity == "" ||
      acountry == ""
    ) {
      alert("Please Enter Delivery Address!");
    } else {
      window.location.href = "payment.html";
    }
  }

  document.getElementById("back").addEventListener("click",back);
  function back(event){
  window.location.href = "../index.html"

  }

  //Remove From Cart
  function removeItem(index) {
    event.preventDefault();
    console.log(index);

    total = JSON.parse(localStorage.getItem("total"));
    var newTotal = total - cartArr[index].price;
    localStorage.setItem("total", newTotal);
    window.location.href = "cart.html";
    //If cart become empty then below code is executed
    if (newTotal == 0) {
      document.querySelector("#cart-container").remove();
      localStorage.removeItem("cartItems");
    }

    //When item is removed from cart then Discount Applied vis changed
    var coupon = document.querySelector("#coupon").value;
    if (coupon == "sahid30") {
      var newCount = --cartArr[index].count;
      console.log(newCount);
      localStorage.setItem("cartItems", JSON.stringify(cartArr));

      //     //Need to look
      //     //Update Quantiity when incremented
      //     var x = document.querySelectorAll("#divQty");
      //     x[index].textContent=newCount;

      //    //Update Quantiity to on when incremented(On divPriceBox)
      //     var y = document.querySelectorAll("#divQtyP");
      //     y[index].textContent=newCount;

      //     //Uodate Total Price when increment Product
      //      var z = document.querySelectorAll("#divPTotal");
      //     z[index].textContent = cartArr[index].price * cartArr[index].count

      var disRemove = total * 0.3 - cartArr[index].price * 0.3;
      console.log("dis ", disRemove);
      document.querySelector("#disc-applied").textContent = disRemove;
    } else {
      localStorage.setItem("discountPrice", 0);
      document.querySelector(
        "#total"
      ).textContent = `Cart Total : RS.${newTotal} `;
      document.querySelector("#cart-total").textContent = newTotal;
      document.querySelector("#pay-amount").textContent = newTotal;
    }
    //new change

    cartArr.splice(index, 1);
    // console.log(cartArr);
    localStorage.setItem("cartItems", JSON.stringify(cartArr));
    //  var cartArrRemove = JSON.parse(localStorage.getItem("cartItems"));
    console.log(cartArr);
    displayCart(cartArr);

    console.log(newTotal);

    document.querySelector(
      "#total"
    ).textContent = `Cart Total : RS.${newTotal} `;
    document.querySelector("#cart-total").textContent = newTotal;
    document.querySelector("#pay-amount").textContent = newTotal;
    //console.log("Aftet Rem Total: ",newTotal);

    //  cartArr.map(function (data,index){
    //      document.querySelector("")
    //  })
  }

  //Increment Product
  function incrementProduct(index) {
    event.preventDefault();

    var newCount = ++cartArr[index].count;
    // cartArr[index].count=newCount
    /////////////
    //Update Quantiity when incremented
    var x = document.querySelectorAll("#divQty");
    x[index].textContent = newCount;

    //Update Quantiity to on when incremented(On divPriceBox)
    var y = document.querySelectorAll("#divQtyP");
    y[index].textContent = newCount;

    //Uodate Total Price when increment Product
    var z = document.querySelectorAll("#divPTotal");
    z[index].textContent = cartArr[index].price * cartArr[index].count;

    /////////
    console.log(newCount);
    localStorage.setItem("cartItems", JSON.stringify(cartArr));

    // var newCount= --cartArr[index].count;
    // console.log(newCount)

    //DDiscount Applied Update after product Increment
    var disAdd = total * 0.3 + cartArr[index].price * 0.3;
    console.log("dis ", disAdd);
    document.querySelector("#disc-applied").textContent = disAdd;
    //Update Card Total
    total += cartArr[index].price;
    console.log("Total after inc. ", total);
    localStorage.setItem("total", total);
    document.querySelector("#total").textContent = `Cart Total : RS.${total} `;
    document.querySelector("#cart-total").textContent = total;
    document.querySelector("#pay-amount").textContent = total;
  }

  //Decrement Product
  function decrementProduct(index) {
    event.preventDefault();
    var count = cartArr[index].count;
    if (count == 1) {
      removeItem(index);
    } else {
      var newCount = --cartArr[index].count;
      localStorage.setItem("cartItems", JSON.stringify(cartArr));

      //Update Quantiity when incremented
      var x = document.querySelectorAll("#divQty");
      x[index].textContent = newCount;
      console.log(newCount);

      //Update Quantiity to on when Decrement(On divPriceBox)
      var y = document.querySelectorAll("#divQtyP");
      y[index].textContent = newCount;

      //Uodate Total Price when Decrement Product
      var z = document.querySelectorAll("#divPTotal");
      z[index].textContent = cartArr[index].price * cartArr[index].count;
      //DDiscount Applied Update after product decrement
      var disRemove = total * 0.3 - cartArr[index].price * 0.3;
      console.log("dis ", disRemove);
      document.querySelector("#disc-applied").textContent = disRemove;
      //Update Card Total
      total -= cartArr[index].price;
      console.log("Total after dec. ", total);
      localStorage.setItem("total", total);
      document.querySelector(
        "#total"
      ).textContent = `Cart Total : RS.${total} `;
      document.querySelector("#cart-total").textContent = total;
      document.querySelector("#pay-amount").textContent = total;
    }
  }

  //document.querySelector(".name").innerHTML= localStorage.getItem("login_user_name");
  //  localStorage.setItem("pr",20);
  //  console.log(localStorage.getItem("pr"));

  //Cart Empty function invoke
}

function indexfnc() {
  console.log("hello bn");
  window.location.href = "../index.html";
}
document.getElementById("b1").addEventListener("click", b1);

function b1() {
  let b1Obj = {
    image_url:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-matte-as-hell-crayon-minis-lipstick-01-scarlett-o-hara-28219914354771_39239823-2ed8-4b8d-b0db-48c857ae0e3f.jpg?v=1642070562",
    name: "Matte as Hell Crayon Mini Lipstick - 01 Scarlett O'Hara",
    price: 999,
    rating: 4.9,
    star_url: "https://i.ibb.co/4d3n7ZC/star.png",
    reviews: "(45)",
    shade_url: "https://i.ibb.co/P4hFywk/ic-multiple-shades-opt2.png",
    shade_no: 20,
    count: 1,
    product: "Matte",
  };
  cartArr.push(b1Obj);

  localStorage.setItem("cartItems", JSON.stringify(cartArr));

  console.log(b1Obj);
  window.location.href = "cart.html";
}

document.getElementById("b2").addEventListener("click", b2);
function b2() {
  let b1Obj = {
    image_url:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/SMNLL-Mini---Shade-02.jpg?v=1656000101",
    name: "Smudge Me Not Liquid Mini Lipstick - 02 Brink of Pink (Plum Rose)",
    price: 999,
    rating: 4.9,
    star_url: "https://i.ibb.co/4d3n7ZC/star.png",
    reviews: "(45)",
    shade_url: "https://i.ibb.co/P4hFywk/ic-multiple-shades-opt2.png",
    shade_no: 20,
    count: 1,
    product: "Matte",
  };
  cartArr.push(b1Obj);

  localStorage.setItem("cartItems", JSON.stringify(cartArr));

  console.log(b1Obj);
  window.location.href = "cart.html";
}

document.getElementById("b3").addEventListener("click", b3);
function b3() {
  let b1Obj = {
    image_url:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/2-illuminating-pink.jpg?v=1655964128",
    name: "Bling Leader Mini Illuminating Sunscreen SPF35 PA+++ - 02 Pink",
    price: 999,
    rating: 4.9,
    star_url: "https://i.ibb.co/4d3n7ZC/star.png",
    reviews: "(45)",
    shade_url: "https://i.ibb.co/P4hFywk/ic-multiple-shades-opt2.png",
    shade_no: 20,
    count: 1,
    product: "Matte",
  };
  cartArr.push(b1Obj);

  localStorage.setItem("cartItems", JSON.stringify(cartArr));

  console.log(b1Obj);
  window.location.href = "cart.html";
}
document.getElementById("b4").addEventListener("click", b4);

function b4() {
  let b1Obj = {
    image_url:
      "https://cdn.shopify.com/s/files/1/0906/2558/products/1_9814781c-2d1a-4019-ba96-94b9df6f2345.jpg?v=1648102353",
    name: "Stroke Of Genius Heavy-Duty Kohl - 05 Black Magic (Black With Silver",
    price: 999,
    rating: 4.9,
    star_url: "https://i.ibb.co/4d3n7ZC/star.png",
    reviews: "(45)",
    shade_url: "https://i.ibb.co/P4hFywk/ic-multiple-shades-opt2.png",
    shade_no: 20,
    count: 1,
    product: "Matte",
  };
  cartArr.push(b1Obj);

  localStorage.setItem("cartItems", JSON.stringify(cartArr));

  console.log(b1Obj);
  window.location.href = "cart.html";
}
