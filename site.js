function toTop() {  
  document.getElementById('app').scrollIntoView();    
}

var prevScrollpos = window.pageYOffset;
document.getElementById("fixed-button").style.visibility = "hidden";
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset
    if (($(document).height()*.85) > currentScrollPos) {
        document.getElementById("fixed-button").style.visibility = "hidden";
    } 
    else {
        document.getElementById("fixed-button").style.visibility = "visible";
    }
    prevScrollpos = currentScrollPos;
} 