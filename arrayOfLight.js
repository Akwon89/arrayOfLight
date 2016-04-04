function arrayOfLight(x) {
    var answer = [];
    for ( i = 0; i <= x; i++)
        answer[i] = i; 
    return answer;
}

console.log(arrayOfLight(10));

//print out [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

//other way

function arrayOfLight(x) {
  var arr = [];
  for ( i = 0; i <= x; i++) {
    arr.push(i);
  }
  return arr;
}

console.log(arrayOfLight(10));

//print out [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]