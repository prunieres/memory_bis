var cards = document.getElementsByClassName('card');
var imgs = document.getElementsByTagName('img');

for (i=0; i< cards.length; i++){
    cards[i].addEventListener("click", display);
    function display(){
    	this.classList.toggle('invisible');
    }
}

