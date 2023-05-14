const canvas = document.getElementById('canvasAnim');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let spots = [];
let hue = Math.random() < 0.5 ? 'hsl(209, 100%, 49%)' : 'hsl(53, 88%, 52%)';

const mouse = {
	x: undefined,
	y: undefined
};

class Particle {
	constructor() {
		this.x = mouse.x;
		this.y = mouse.y;
		this.size = Math.random() * 2 + 0.1;
		this.speedX = Math.random() * 2 - 1;
		this.speedY = Math.random() * 2 - 1;
		this.color = hue;
	}

	update() {
		this.x += this.speedX;
		this.y += this.speedY;
		if (this.size > 0.1) this.size -= 0.009;
	}

	draw() {
		ctx.fillStyle = this.color;
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
		ctx.fill();
	}
}

canvas.addEventListener('mousemove', (event) => {
	mouse.x = event.x;
	mouse.y = event.y;
	for (let i = 0; i < 2; i++) {
		spots.push(new Particle());
	}
});

function handleParticle() {
	for (let i = 0; i < spots.length; i++) {
		spots[i].update();
		spots[i].draw();

		for (let j = 0; j < spots.length; j++) {
			const dx = spots[i].x - spots[j].x;
			const dy = spots[i].y - spots[j].y;
			const distance = Math.sqrt(dx * dx + dy * dy);
			if (distance > 10 && distance < 35) {
				ctx.beginPath();
				ctx.strokeStyle = spots[i].color;
				ctx.lineWidth = spots[i].size / 10;
				ctx.moveTo(spots[i].x, spots[i].y);
				ctx.lineTo(spots[j].x, spots[j].y);
				ctx.stroke();
			}
		}

		if (spots[i].size <= 0.1) {
			spots.splice(i, 1);
			i--;
		}
	}
}

function animate() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	handleParticle();
	requestAnimationFrame(animate);
}

window.addEventListener('resize', function () {
	// eslint-disable-next-line no-restricted-globals
	canvas.width = innerWidth;
	// eslint-disable-next-line no-restricted-globals
	canvas.height = innerHeight;
	// init();
});

window.addEventListener('mouseout', function () {
	mouse.x = undefined;
	mouse.y = undefined;
});

animate();
