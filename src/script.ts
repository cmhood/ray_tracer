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
	const canvas = document.createElement("canvas");
	document.body.appendChild(canvas);
	canvas.width = IMAGE_WIDTH;
	canvas.height = IMAGE_HEIGHT;

	const ctx = canvas.getContext("2d");
	if (!ctx) {
		die("Failed to get canvas rendering context");
	}

	for (let y = 0; y < IMAGE_HEIGHT; ++y) {
		for (let x = 0; x < IMAGE_WIDTH; ++x) {
			const color = new Vec3(
			    Math.floor(256 * x / IMAGE_WIDTH),
			    Math.floor(256 * y / IMAGE_HEIGHT), 0);
			setPixel(ctx, x, y, color);
		}
	}
}

function
setPixel(ctx: CanvasRenderingContext2D, x: number, y: number, color: Vec3)
{
	console.assert(0 <= color.x && color.x <= 255);
	console.assert(0 <= color.y && color.y <= 255);
	console.assert(0 <= color.z && color.z <= 255);
	ctx.fillStyle = `rgba(${color.x}, ${color.y}, ${color.z}, 1.0)`;
	ctx.fillRect(x, y, 1, 1);
}

function
die(message: string): never
{
	throw new Error(message);
}
