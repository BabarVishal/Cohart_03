class Rectangle{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    area(){
        const area = this.width * this.height;
        return area;
    }

    print(){
        console.log("color is" + this.color); 
    }
}

const reat = new Rectangle(2,3);
const area = reat.area();
console.log(area);
