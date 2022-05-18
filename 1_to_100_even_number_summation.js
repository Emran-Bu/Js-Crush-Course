// 1 to 10 print

// for(var i = 1; i <= 10; i++) {
//     console.log(i);
// }

// normal sum

// var sum = 0;
// for (var i = 0; i <= 10; i++) {
//     var r = sum + i;
//     console.log(sum + ' + ' + i + ' = : ' + r);
//     sum = sum + i;
// }

// console.log('\n' + 'The Result is :  = ' + sum);

// even number sum
var sum = 0;
for (var i = 1; i <= 10; i++) {
    if(i % 2 == 0) {
        // console.log(i);
        console.log('\n' + sum + ' + ' + i + ' : ' + ( sum + i));
        sum += i;
    }
}
console.log('\ntotal even number sum : ' + sum + '\n');

// odd number sum

var sum = 0;

for (let i = 0; i <= 10; i++) {
    // console.log(i);
    if( i % 2 == 1){
        // console.log(i);
        var result = sum + i;
        console.log(sum + ' + ' +  i  + ' : ' + result);
        sum += i
    }
}

console.log('\ntotal odd number sum : ' + sum);


