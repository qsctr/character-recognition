class DisplayArea {

    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;

    constructor(canvasSelector: string) {
        this.canvas = document.querySelector(canvasSelector) as HTMLCanvasElement;
        this.context = this.canvas.getContext('2d') as CanvasRenderingContext2D;
        this.context.font = this.canvas.height + 'px Arial';
        this.context.textAlign = 'center';
        this.context.textBaseline = 'bottom';
    }

    renderChar(char: string) {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.fillText(char, this.canvas.width / 2, this.canvas.height, this.canvas.width);
    }

    fillBlack() {
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
    
}
