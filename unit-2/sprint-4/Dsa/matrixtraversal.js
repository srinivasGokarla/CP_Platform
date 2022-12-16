function masaiTraversalAndQueries(N, M, q, arr){
   
    var array = [];
    var array1 = [];
  if(q == 1){
  for (var i = 0;i < N; i++){
          if (i % 2 === 0){
              for (var j = 0; j < M; j++){
             array.push(arr[i][j]);    
              } 
          } else {
              for ( j = M-1; j >= 0; j--) {
                    array.push(arr[i][j]);
              }
          }
      }
      console.log(array.join(" ").trim());
  } else {
  
      for ( var i = 0; i < N; i++){
          if(i % 2 === 0){
              for (var j = M-1;j >= 0; j--) {
                   array1.push(arr[i][j]);
                  }
          } else {
              for (var j = 0; j < M; j++){ 
                  array1.push(arr[i][j]);
              }
          }
      } 
      console.log(array1.join(" ").trim());     
  }
  }