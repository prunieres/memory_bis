var cards = document.getElementsByClassName('card');
var imgs = document.getElementsByTagName('img');
// console.log(cards);
// console.log(cards);

for (i=0; i< cards.length; i++){
    cards[i].addEventListener("click", display);
}

function display(){
	this.classList.add('invisible');
	if (this.className = 'invisible'){
		this.className = 'visible';
	}else{
		this.classList.add('invisible');
	}
}
   
		// if(this.className = 'invisible'){
		// 	this.className = 'visible';
		// }else{
		// 	this.className = 'invisible';
		// }
