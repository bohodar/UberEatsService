let keyUp = document.querySelector('.up-key');

window.onscroll = upriseOfKeyUp;
console.dir(keyUp);
function upriseOfKeyUp() {
      if (window.pageYOffset > 300) {
      keyUp.style.transform = 'translateY(0px)';
    } else { 
    	keyUp.style.transform = 'translateY(100px)';
    }
}	
keyUp.onclick = function () {
	window.scrollTo(0,0);
};
