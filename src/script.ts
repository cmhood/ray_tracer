const IMAGE_WIDTH = 768;
const IMAGE_HEIGHT = 480;

addEventListener("load", main);

class Vec3 {
	constructor(public x: number, public y: number, public z: number) {}

	get length(): number {
		return this.length_squared ** 0.5;
	}

	get length_squared(): number {
		return this.x ** 2 + this.y ** 2 + this.z ** 2;
	}

	scale(k: number): Vec3 {
		return new Vec3(this.x * k, this.y * k, this.z * k);
	}

	add(v: Vec3): Vec3 {
		return new Vec3(this.x + v.x, this.y + v.y, this.z + v.z);
	}
}

class Ray {
	constructor(public origin: Vec3, public direction: Vec3) {}

	at(t: number): Vec3 {
		return this.direction.scale(t).add(this.origin);
	}
}

function
main()
{
	let canvas = document.createElement("canvas");
	document.body.appendChild(canvas);
	canvas.width = IMAGE_WIDTH;
	canvas.height = IMAGE_HEIGHT;

	let ctx = canvas.getContext("2d");
	if (!ctx) {
		die("Failed to get canvas drawing context");
	}

	for (let y = 0; y < IMAGE_HEIGHT; ++y) {
		for (let x = 0; x < IMAGE_WIDTH; ++x) {
			let r = Math.floor(256 * (x / IMAGE_WIDTH));
			let g = Math.floor(256 * (y / IMAGE_HEIGHT));
			console.assert(0 <= r && r <= 255);
			console.assert(0 <= g && g <= 255);
			ctx.fillStyle = `rgba(${r}, ${g}, 255, 1.0)`;
			ctx.fillRect(x, y, 1, 1);
		}
	}
}

function
die(message: string): never
{
	throw new Error(message);
}
