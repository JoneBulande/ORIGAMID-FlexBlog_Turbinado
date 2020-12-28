///////////////////////////////////////////////
/////| SCROLL SUAVE
///////////////////////////////////////////////
export default function initScrollSuave() {
	
	const	ceta = document.querySelector('.ceta'),
			links = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

	function scrollSuave(event) {
		event.preventDefault();
		const href = event.currentTarget.getAttribute("href");
		const section = document.querySelector(href);
		section.scrollIntoView({
			block:'start',
			behavior: 'smooth'
		})
	}

	links.forEach((link)=>{
		link.addEventListener("click", scrollSuave);
	});
	
	ceta.addEventListener("click", scrollSuave);
}