window.addEventListener('scroll', () => {
	document.body.style.setProperty('--scroll', window.pageYOffset + window.innerHeight);/// (document.body.offsetHeight - window.innerHeight));
}, false);
