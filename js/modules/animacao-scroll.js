///////////////////////////////////////////////
/////| ANIMAÇÃO AO SCROLL
///////////////////////////////////////////////
export default function initAnimacaoScroll() {
	const	ceta = document.querySelector('.ceta'),
			ativeCeta = document.querySelector('.ativeCeta'),
			
			rights = document.querySelectorAll('[data-scrollAnima="right"]'),
			lefts = document.querySelectorAll('[data-scrollAnima="left"]'),
			ups = document.querySelectorAll('[data-scrollAnima="up"]'),
			downs = document.querySelectorAll('[data-scrollAnima="down"]'),
			windowMetade = window.innerHeight * 0.8;

	function animationScroll(){
		
		
		if (ativeCeta.classList.contains('ativo')) {
			ceta.classList.add('ativo');
		}else{
			ceta.classList.remove('ativo');
		}
		

		rights.forEach((right)=>{
			const top = right.getBoundingClientRect().top;
			const isVisible = (top - windowMetade) < 0;
			if (isVisible) {
				right.classList.add("ativo");
			} else {
				right.classList.remove("ativo");
			}
		});

		lefts.forEach((left)=>{
			const top = left.getBoundingClientRect().top;
			const isVisible = (top - windowMetade) < 0;
			if (isVisible) {
				left.classList.add("ativo");
			} else {
				left.classList.remove("ativo");
			}
		});

		ups.forEach((up)=>{
			const top = up.getBoundingClientRect().top;
			const isVisible = (top - windowMetade) < 0;
			if (isVisible) {
				up.classList.add("ativo");
				ceta.classList.add("ativo");
			} else {
				up.classList.remove("ativo");
			}
		});

		downs.forEach((down)=>{
			const top = down.getBoundingClientRect().top;
			const isVisible = (top - windowMetade) < 0;
			if (isVisible) {
				down.classList.add("ativo");
			} else {
				down.classList.remove("ativo");
			}
		});
		

	}
	window.addEventListener("scroll", animationScroll);
}