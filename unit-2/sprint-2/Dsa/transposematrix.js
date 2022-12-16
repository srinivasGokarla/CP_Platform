
var M = 4;
var N = 3;
function transpose(mat,mat1) {
    for(var i = 0; i < N;i++) {
        for(var j = 0; j < M; j++) {
            mat1[i][j] == mat[j][i]
        }
        
    }
    var  mat = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 2, 3],
    ];
    var mat1 = array(N);
    for(var i = 0; i < N; i++) {
        for(var j = 0; j< M; j++) {
            
        }
        console.log(mat1[i][j])
    }
}