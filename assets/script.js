const slides = [
	{
		image : "./assets/images/slideshow/slide1.jpg",
		tagLine :"Impressions tous formats <span>en boutique et en ligne</span>",
	},
	{
		image : "./assets/images/slideshow/slide2.jpg",
		tagLine :"Tirages haute définition grand format <span>pour vos bureaux et events</span>",
	},
	{
		image : "./assets/images/slideshow/slide3.jpg",
		tagLine :"Grand choix de couleurs <span>de CMJN aux pantones</span>",
	},
	{
		image : "./assets/images/slideshow/slide4.png",
		tagLine:"Autocollants <span>avec découpe laser sur mesure</span>",
	}
]


// Les variables // 

let arrowLeft = document.getElementById("slideLeft");
let arrowRight = document.getElementById("slideRight");
const img = document.querySelector('.banner-img');
const tagline = document.querySelector("#banner p");
const nombreDeSlide = slides.length
console.log(nombreDeSlide)


//Flèche gauche//
arrowLeft.addEventListener("click", () => {
	const slidesdots = document.querySelectorAll(".dots .dot");
	slidesdots[index].classList.remove('dot_selected');
	index--
	if (index < 0) {
		index = nombreDeSlide -1;
	}
	slidesdots[index].classList.add('dot_selected');
	img.src= slides[index].image;
	tagline.innerHTML = slides[index].tagLine;
	console.log("Vous avez cliqué sur la flèche gauche")
});

//fleche droite//

arrowRight.addEventListener("click", () => {
	const slidesdots = document.querySelectorAll(".dots .dot");
	slidesdots[index].classList.remove('dot_selected');
	index++
	if (index > nombreDeSlide -1) {
		index=0;
	}
	slidesdots[index].classList.add('dot_selected');
	img.src= slides[index].image;
	tagline.innerHTML= slides[index].tagLine;
	console.log("Vous avez cliqué sur la flèche droite");
});


// Bullets points//

let dots = document.querySelector('.dots')
let index = 0

for (let i = 0; i < nombreDeSlide; i++) {
    let dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === 0) {
        dot.classList.add('dot_selected');
    }
    dots.appendChild(dot);
}

