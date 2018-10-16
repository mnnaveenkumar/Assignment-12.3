function myMap(arr, callback){
    return arr.map(callback);
}

var nos=[2, 4, 8, 10];
console.log("Nos :", nos);

console.log('Result :', myMap(nos, function(x){ return x*2; }) );