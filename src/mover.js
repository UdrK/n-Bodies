class Mover {

    constructor (position, mass, color, radius=4, velocity=createVector(0,0), acceleration=createVector(0,0), id=0) {
        this.id = id;
        this.position = position;
        this.color = color;
        this.mass = mass;
        this.radius = radius;
        
        this.velocity = velocity;
        this.acceleration = acceleration;
    }

    applyForce(externalForce) {
        const force = p5.Vector.div(externalForce, this.mass);
        this.acceleration.add(force);
    }

    checkCollision(mover) {
        const distance = p5.Vector.sub(this.position, mover.position);
        if (distance.mag() <= (this.radius) + (mover.radius)) {
            return true;
        }
        return false;
    }

    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
        this.radius = (velocityToRadiusConst * this.velocity.mag());
        this.color[0] += hueChangeConstant;
    }

    display() {
        noStroke();
        //fill(color('#45131c'));
        if(parseInt(this.mass) % 2 == 0 || this.id == 4)
            fill(color('#ffd500'));
        else
            fill(color('#005abb'));
        ellipse(this.position.x, this.position.y, this.radius, this.radius)
        point();
    }

    toJSON() {
        let json = {};
        let pos = [this.position.x, this.position.y];
        let vel = [this.velocity.x, this.velocity.y];
        let acc = [this.acceleration.x, this.acceleration.y];
        let id = this.id;
        json.position = pos;
        json.color = [this.color.v1, this.color.v2, this.color.v3];
        json.mass = this.mass;
        json.radius = this.radius;
        json.velocity = vel;
        json.acceleration = acc;
        json.id = id;
        return json;
    }

    fromJSON(json) {
        this.position = createVector(json.position[0], json.position[1]);
        this.color = color(json.color[0], json.color[1], json.color[2]);
        this.mass = json.mass;
        this.radius = json.radius;
        this.id = json.id;
        
        this.velocity = createVector(json.velocity[0], json.velocity[1]);
        this.acceleration = createVector(json.acceleration[0], json.acceleration[1]);
        return this;
    }
}
