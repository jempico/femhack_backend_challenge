class ComputedData {
    constructor(alpha, v0) {
        this.id = 1;
        this.alpha = alpha;
        this.v0 = v0;
        this.g = 2.8;
        this.h_max = (( v0 * v0 ) / ( 2 * this.g )).toFixed(3);
        this.x_max = ((2 * v0 * Math.sin(alpha)) / this.g).toFixed(3);
    }
    setId(newId) {
        this.id = newId;
    }    
}

function computedDataFactory(alpha, v0) {
    return new ComputedData(alpha, v0)
}

//Exporting computedDataFactory function
module.exports = computedDataFactory;

