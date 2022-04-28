var array=[12,45,32,67];
console.log(array);
console.log(array[1]);
var position = array.indexOf(32);
console.log(position);

array.push(10);
console.log(array);
array.pop();
console.log(array);
console.log(array.length);
array.shift();
console.log(array);
array.unshift(48);
console.log(array);

var sli = array.slice(2);
console.log(sli);
var sli = array.slice(2,5);
console.log(sli);