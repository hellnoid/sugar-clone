import { header } from "./header.js";

let logininfo = JSON.parse(localStorage.getItem("info")) || [];

document.getElementById("header").innerHTML = header();

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
  setTimeout(() => {
    login.style.display = "none";
    login.style.transform = "translateX(0px)";
  }, 1000);
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
  let mob1 = document.getElementsByClassName("loginput1")[0].value;
  let mob2 = document.getElementsByClassName("loginput1")[1].value;
  let mob3 = document.getElementsByClassName("loginput1")[2].value;
  let mob4 = document.getElementsByClassName("loginput1")[3].value;
  let mob5 = document.getElementsByClassName("loginput1")[4].value;
  let mob6 = document.getElementsByClassName("loginput1")[5].value;
  let mob7 = document.getElementsByClassName("loginput1")[6].value;
  let mob8 = document.getElementsByClassName("loginput1")[7].value;
  let mob9 = document.getElementsByClassName("loginput1")[8].value;
  let mob0 = document.getElementsByClassName("loginput1")[9].value;
  let mob = mob1 + mob2 + mob3 + mob4 + mob5 + mob6 + mob7 + mob8 + mob9 + mob0;
  console.log(mob);
  if (mob.length == 10) {
    let userotp = Math.floor(Math.random() * 1000 + 1000);
    otpc2 = userotp;
    setTimeout(() => {
      alert(`${userotp} is Your OTP to login.`);
    }, 2000);
  } else {
    alert("Enter correct mobile number!");
  }
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
    window.location.href = "index.html";
  });
}
localStorage.setItem("userDetails", JSON.stringify(obj));

let userInfo = JSON.parse(localStorage.getItem("userDetails"));

if (Object.keys(userInfo).length > 0) {
  let changename = document.getElementById("changename");
  changename.innerText = "Hi," + userInfo.username;
  let changebox = document.getElementById("navlogin");
  changebox.style.backgroundColor = "lightgrey";
  changebox.style.height = "45px";
  changebox.style.width = "250px";
  changebox.style.padding = "0px";
}
