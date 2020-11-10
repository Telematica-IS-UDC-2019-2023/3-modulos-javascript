function greet3() {
    this.message = 'Archivo greet3.js';
    this.greet = function () {
        console.log(this.message);
    }
}

module.exports = new greet3;