import { login } from "./login.js";

let logininfo = JSON.parse(localStorage.getItem("info")) || [];

document.getElementById("login").innerHTML = login();

import { signUpPage, infopage } from "./signUpPage.js";

document.getElementById("signappend").innerHTML = signUpPage();
let info = infopage();

let navlogin = document.getElementById("navlogin");

navlogin.addEventListener("click", () => {
  let login = document.getElementById("signappend");
  login.style.display = "block";
  login.style.overflowY;
});
//===========Animation
let close = document.getElementById("close");
close.addEventListener("click", () => {
  let login = document.getElementById("signappend");
  login.style.transform = "translateX(800px)";
  login.style.transition = "1s";
  setTimeout(()=>{
    login.style.display="none";
    login.style.transform = "translateX(0px)"
  },1000);
 
});

$(".enterotp").keyup(function () {
  if (this.value.length == this.maxLength) {
    $(this).next(".enterotp").focus();
  }
});
$(".loginput1").keyup(function () {
  if (this.value.length == this.maxLength) {
    $(this).next(".loginput1").focus();
  }
});

let reqotp = document.getElementById("requestptp");
let otpc2;
reqotp.addEventListener("click", () => {
  let userotp = Math.floor(Math.random() * 1000 + 1000);
  otpc2=userotp;
  setTimeout(() => {
    alert(`${userotp} is Your OTP to login.`);
  }, 2000);
});

let varifyotp = document.getElementById("verify");

varifyotp.addEventListener("click", () => {
  
  let otp1 = document.querySelector(".enterotp1").value;
  let otp2 = document.querySelector(".enterotp2").value;
  let otp3 = document.querySelector(".enterotp3").value;
  let otp4 = document.querySelector(".enterotp4").value;
  let otp = otp1 + otp2 + otp3 + otp4;
  console.log(otp);
  let wrong = document.getElementById("incorrect");
  if (otp == otpc2) {
    document.getElementById("loginbox").innerHTML = info;
    userName();
  } else {
    wrong.innerText = "Incorrect OTP! Please try again.";
    wrong.style.color = "red";
  }
});
var obj = JSON.parse(localStorage.getItem("userDetails")) || {};
function userName() {
  let savebtn = document.getElementById("savebtn");
  savebtn.addEventListener("click", () => {
    let username = document.getElementById("username").value;
    let lastname = document.getElementById("userlastname").value;
    obj = { username, lastname };
    localStorage.setItem("userDetails", JSON.stringify(obj));
    window.location.href = "login.html";
  });
}
localStorage.setItem("userDetails", JSON.stringify(obj));

let userInfo = JSON.parse(localStorage.getItem("userDetails"));

if (Object.keys(userInfo).length > 0) {
  let changename = document.getElementById("changename");
  changename.innerText =
    "Hi," + userInfo.username + " " + userInfo.lastname + " ";
  let changebox = document.getElementById("navlogin");
  changebox.style.backgroundColor = "lightgrey";
  changebox.style.height = "30px";
  changebox.style.padding = "5px";
}
