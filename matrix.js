class Matrix {
    constructor ( length = 0, width = 0 ) {
        this.cols = length;
        this.rows = width;
        this.arr = [];
    }

    generateMatrix() {
        const arr = [];
  
        for(var i = 0; i < this.rows; i++) {
            arr.push( [ ] );
            arr[i].push( new Array( this.cols ) );
            for(var j = 0; j < this.cols; j++) {
                arr[i][j] = Math.round( Math.random() )
            };
        };
  
        this.arr = arr;
    }

    transposeMatrix(defaultMatrix){
        const arr = [];
        this.rows = defaultMatrix.rows;
        this.cols = defaultMatrix.cols;
  
        for(var i = 0; i < defaultMatrix.rows; i++){
            arr.push([]);
        };
    
        for(var i = 0; i < defaultMatrix.rows; i++){
            for(var j = 0; j < defaultMatrix.cols; j++){
                arr[j].push(defaultMatrix.arr[i][j]);
            };
        };
    
        this.arr = arr;
    }

}

const _m1 = new Matrix( 3, 4 );
_m1.generateMatrix();
console.log( _m1.arr );
const _m2 = new Matrix();
_m2.transposeMatrix(_m1);
console.log( _m2.arr );