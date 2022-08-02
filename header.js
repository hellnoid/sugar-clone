function navbar() {
  return `
  <div id="navbar">
  <div id="offer">
    <h5>FREE set of 4 lipsticks & pouch on a spend of Rs.999</h5>
  </div>
  <div id="head">
    <img
      src="https://media.sugarcosmetics.com/upload/Logo-static.jpg"
      alt=""
    />
    <input
      type="text"
      placeholder="Search for products.."
      id="searchParam"
    />
    <button id="search-btn">Search</button>
    <a href="#"
      ><h5><i class="fa-solid fa-user"></i> Login/Register</h5></a
    >
    <div id="functions">
      <a href="#"><i class="fa-solid fa-heart"></i></a>
      <a href="#"><i class="fa-solid fa-bag-shopping"></i></a>
      <a href="#"
        ><img
          src="https://in.sugarcosmetics.com/desc-images/discountIcon.svg"
          alt=""
      /></a>
    </div>
  </div>
</div>`;
}
export default navbar;
