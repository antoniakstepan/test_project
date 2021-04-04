const fhoto = document.querySelector('.target__fhoto');
const prevSlide = document.querySelector('.target__left');
const nextSlide = document.querySelector('.target__right')

const list = ['./../img/card__photo.png', './../img/main.png',]
prevSlide.addEventListener('click', () => {
	const currentFhoto = fhoto
	console.log(currentFhoto)
});
