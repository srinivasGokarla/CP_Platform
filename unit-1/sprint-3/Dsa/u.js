var mat1 = [
    [1, 2, 3],
    [5, 6, 7],
    [7, 8, 9],

];
var mat2 = [
    [2, 1, 2],
    [1, 2, 1],
    [2, 1, 2],
];

var sum = [];
for(var r = 0; r < mat1.length;r++) {
    sum[r] = []
    for(var cl = 0; cl < mat1[r].length; cl++) {
sum[r][cl] = mat1[r][cl] + mat2[r][cl];
    }
}
console.log(sum);