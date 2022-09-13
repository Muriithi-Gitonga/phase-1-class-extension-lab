//Your code here

class Polygon {
    //accept array of integers
    constructor(arr) {
        this.arr = arr;
    }

    get countSides() {
        return this.arr.length; 
    }

    get perimeter() {
        return this.arr.reduce((acc,length) => acc + length);
    }
}

class Triangle extends Polygon {
    get isValid () {
        return ((this.arr[0]+this.arr[1] > this.arr[2]) && (this.arr[1]+this.arr[2] > this.arr[0]) && (this.arr[2]+this.arr[0] > this.arr[1]) )
        
    }
}

class Square extends Polygon {
    get isValid () {
        return ((this.arr[0] === this.arr[1]) && (this.arr[0] === this.arr[2]) && (this.arr[0] === this.arr[3]))
       
    }
    get area () {
        return this.arr[0] * this.arr[1]
    }
}


