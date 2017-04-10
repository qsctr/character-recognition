class InputArea extends DisplayArea {

    readonly penThickness: number;
    readonly noiseRate = 0.2;

    constructor(canvasSelector: string) {

        super(canvasSelector);

        this.penThickness = Math.min(this.canvas.width, this.canvas.height) / 50 * 3;
        
        const zoomX = parseFloat(getComputedStyle(this.canvas).width as string)
            / this.canvas.width;
        const zoomY = parseFloat(getComputedStyle(this.canvas).height as string)
            / this.canvas.height;

        this.canvas.addEventListener('mousemove', e => {
            const canvasX = (e.clientX - this.canvas.offsetLeft) / zoomX - this.penThickness / 2;
            const canvasY = (e.clientY - this.canvas.offsetTop) / zoomY - this.penThickness / 2;
            switch (e.buttons) {
                case 1:
                    this.context.fillRect(canvasX, canvasY, this.penThickness, this.penThickness);
                    break;
                case 2:
                    this.context.clearRect(canvasX, canvasY, this.penThickness, this.penThickness);
                    break;
            }
        });

        this.canvas.addEventListener('contextmenu', e => {
            e.preventDefault();
        });

    }

    addNoise() {
        this.context.putImageData(new ImageData(
            this.getData().map((x, i) =>
                i % 4 === 3 && Math.random() < this.noiseRate ?
                    (x === 0 ? Math.random() * 255 : x - Math.random() * x) : x
            ), this.canvas.width, this.canvas.height
        ), 0, 0);
    }

    getData() {
        return this.context.getImageData(0, 0, this.canvas.width, this.canvas.height).data;
    }

    getBuffer() {
        return this.getData().filter((_, i) => i % 4 === 3).buffer;
    }

    getSize() {
        return this.canvas.width * this.canvas.height;
    }

}
