class Ground {
    constructor(x, y, w, h) {
        let options = {isStatic: true};
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        World.add(world, this.body);
    }
    show() {
        let p = this.body.position;
        push();
        rectMode(CENTER);
        noStroke();
        fill("Purple");
        rect(p.x, p.y, this.w, this.h);
        pop();
    }
}