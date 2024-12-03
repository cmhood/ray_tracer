const IMAGE_WIDTH = 768;
const IMAGE_HEIGHT = 480;

addEventListener("load", main);

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
