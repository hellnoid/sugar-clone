// function navbar() {
//   return `
//   <div id="navbar">
//   <div id="offer">
//     <h5>FREE set of 4 lipsticks & pouch on a spend of Rs.999</h5>
//   </div>
//   <div id="head">
//     <img
//       src="https://media.sugarcosmetics.com/upload/Logo-static.jpg"
//       alt=""
//     />
//     <input
//       type="text"
//       placeholder="Search for products.."
//       id="searchParam"
//     />
//     <button id="search-btn">Search</button>
//     <a href="#"
//       ><h5><i class="fa-solid fa-user"></i> Login/Register</h5></a
//     >
//     <div id="functions">
//       <a href="#"><i class="fa-solid fa-heart"></i></a>
//       <a href="#"><i class="fa-solid fa-bag-shopping"></i></a>
//       <a href="#"
//         ><img
//           src="https://in.sugarcosmetics.com/desc-images/discountIcon.svg"
//           alt=""
//       /></a>
//     </div>
//   </div>
// </div>`;
// }
// export default navbar;

let header = () => {
  return `<div id="head1">
          
  <a href=""> <img src="https://media.sugarcosmetics.com/upload/Logo-static.jpg" id="logo"></a>
      <div id="search">
           <input id="search-bar" type="text" placeholder="Try Liquid Lipstick">
     
           <input id="search-icon" type="submit" value="Search">
      </div>
   
      <img id="user" class="icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/2048px-OOjs_UI_icon_userAvatar.svg.png"> 
     
      <a id="login-signup" href="" >Login/Register</a>
  
<!-----   icons --->
  <a href=""><img id="heart" class="icon" src="https://cdn0.iconfinder.com/data/icons/glyphpack/51/heart-512.png">  </a>
 <a href=""><img class="icon" src="https://cdn-icons-png.flaticon.com/512/7446/7446956.png">  </a>
 <a href=""><img  class="icon" src="https://static.thenounproject.com/png/170070-200.png"></a>
                  
</div>
<!-----------head2-->
<div class="navbar">
    <div class="dropdown">
      <button class="dropbtn">MAKEUP 
       
      </button>
      <div class="dropdown-content">
        <a href="#">LIPS</a>
        <a href="#">EYES</a>
        <a href="#">FACE</a>
      </div>
    </div> 
     <div class="dropdown">
      <button class="dropbtn">BRUSHES 
       
      </button>
      <div class="dropdown-content">
        <a href="#">FACE BRUSHES</a>
        <a href="#">EYE BRUSHES</a>
       
      </div>
    </div> 
     <div class="dropdown">
      <button class="dropbtn">SKINCARE
       
      </button>
      <div class="dropdown-content">
        <a href="#">MOISTURISERS</a>
        <a href="#">SUNSCREEN</a>
        <a href="#">SETTING MISTS</a>
        <a href="#">COFFE CULTURE<br> RANGE</a>
        <a href="#">SHEET MASK<br> COMBO</a>
        <a href="#">CITRUS GOT REAL<br> RANGE</a>
        <a href="#">AQUAHOLIC<br> RANGE</a>
        <a href="#">MASKS</a>
      </div>
    </div> 
     <div class="dropdown">
      <button class="dropbtn">GIFTING
       
      </button>
      <div class="dropdown-content">
        <a href="#">SUGAR MERCH<br> STATION</a>
        <a href="#">MAKEUP KITS</a>
        <a href="#">BEST SELLERS</a>
        <a href="#">VALUE SETS</a>
        <a href="#">SUGAR SETS</a>
         <a href="#">E-GIFT CARDS</a>
      </div>
    </div> 
     <div class="dropdown">
      <button class="dropbtn">BLOG
       
      </button>
      <div class="dropdown-content">
        <a href="#">FEATURED</a>
        <a href="#">MAKE UP</a>
        <a href="#">SKINCARE</a>
      </div>
    </div> 
    
    <a href="">OFFERS</a>
    <a href="">STORES</a>
  </div>`


}
export { header }
