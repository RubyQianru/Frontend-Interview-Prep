/**
 * class 语法糖 
 * 面向对象的概念
 * 
 */

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return `${this.x}, ${this.y}`
    }
}