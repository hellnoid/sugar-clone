import navbar from "./header.js";
let nav_div = document.getElementById("nav_id");
nav_div.innerHTML = navbar();

let searchBar = document.getElementById("search-bar");
document.getElementById("search-icon").addEventListener("click", async ()=>{
    let searchParam = searchBar.value;
    localStorage.setItem("search_term", searchParam);

    location.href = "product.html";
})