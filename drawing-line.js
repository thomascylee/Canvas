class DrawingLine extends PaintFunction {
    constructor(contextReal) {
        super();
        this.context = contextReal;
        this.context.strokeStyle = rgbaColor;
        this.context.lineJoin = "round";
        this.context.lineWidth = slider.value;
    }

    onMouseDown(coord, event) {
        this.context.strokeStyle = rgbaColor;
        this.context.lineJoin = this.context.lineCap = "round";
        this.context.lineWidth = slider.value;
        this.context.beginPath();
        this.context.moveTo(coord[0], coord[1]);
    }

    onDragging(coord, event) {
        this.draw(coord[0], coord[1]);
    }

    onMouseMove() { }
    onMouseUp(coord, event) {
        this.draft = false; 
        this.capture();
    }
    onMouseLeave() { }
    onMouseEnter() { }

    draw(x, y) {
        this.context.lineTo(x, y);
        this.context.moveTo(x, y);
        this.context.closePath();
        this.context.stroke();
    }
}
