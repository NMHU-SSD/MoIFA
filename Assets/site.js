function toTop() {  
  document.getElementById('app').scrollIntoView();    
}

var prevScrollpos = window.pageYOffset;
document.getElementById("fixed-button").style.visibility = "visible";
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset
    /*if (($(document).height()*.50) > currentScrollPos) {
        document.getElementById("fixed-button").style.visibility = "hidden";
    } 
    else {
        document.getElementById("fixed-button").style.visibility = "visible";
    }*/
    prevScrollpos = currentScrollPos;
} 