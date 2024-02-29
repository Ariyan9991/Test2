var HeaderDivE = document.getElementById('DivH');
var DivHeight = HeaderDivE.getBoundingClientRect().height;
document.documentElement.style.setProperty("--div-top",DivHeight+"px");
console.log(window.getComputedStyle(document.documentElement).getPropertyValue('--div-top'));
