
window.setTimeout(function() {

let gateway = document.getElementById('gateway-content');
let scroll = document.getElementsByClassName('css-mcm29f');
let shadeblocker = document.getElementsByClassName('css-gx5sib');
let siteContent = document.getElementById('site-content');

siteContent.style.position = "static";
gateway.style.display = "none";
scroll[0].style.overflow = "scroll";
shadeblocker[0].style.display = "none";
}, 500);

