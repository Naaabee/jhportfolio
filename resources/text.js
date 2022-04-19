const des = document.getElementById("des1");
const icon1 = document.getElementById("nomnom");
const icon2 = document.getElementById("serv");
const icon3 = document.getElementById("portfolio");
const icon4 = document.getElementById("random");


icon1.onmouseover = function(){
    des.innerHTML = "A home cooked food delivery app. An idea i had during my internship organised by MAGIC (Malaysian Global Innovation and Creativity Centre)."
}
icon1.onmouseout = function() {
    des.innerHTML = "This is a empty text box"
}

icon2.onmouseover = function(){
    des.innerHTML = "Just having fun redesigning the app during my internship with SERV."
}
icon2.onmouseout = function() {
    des.innerHTML = "This is a empty text box"
}

icon3.onmouseover = function(){
    des.innerHTML = "The portfolio you're seeing right now :)"
}
icon3.onmouseout = function() {
    des.innerHTML = "This is a empty text box"
}

icon4.onmouseover = function(){
    des.innerHTML = "Coming Soon 😬✌🏼"
}
icon4.onmouseout = function() {
    des.innerHTML = "This is a empty text box"
}