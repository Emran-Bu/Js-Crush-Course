// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// 1 2 3 4 5 6
// 1 2 3 4 5 6 7
// 1 2 3 4 5 6 7 8
// 1 2 3 4 5 6 7 8 9
// 1 2 3 4 5 6 7 8 9 10


var n = 10;
for(var i = 1; i <= n; i++){
    var result = ' '
    for(var j = 1; j <= i; j++){
        result += j + ' '
    }
    console.log(result)
}

// 
console.log('\n');
// 

// **********
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// **********

var u = 10;
for(var i = 1; i <= u; i++){
    var result = ' '
    for(var j = 1; j <= u; j++){
        result += '*'
    }
    console.log(result);
}

// 10
// 10 9
// 10 9 8
// 10 9 8 7
// 10 9 8 7 6
// 10 9 8 7 6 5
// 10 9 8 7 6 5 4
// 10 9 8 7 6 5 4 3
// 10 9 8 7 6 5 4 3 2
// 10 9 8 7 6 5 4 3 2 1

// 
console.log('\n');
// 

var y = 1

for(var i = 10; i>=y; i--){
    var result = ' '
    
    for(var j = 10; j>=i; j--){
        // console.log(j);
        result += j + ' '
    }
// console.log(i);
console.log(result);

}


// 
console.log('\n');
// 

// 1
// 1 1
// 1 1 1
// 1 1 1 1
// 1 1 1 1 1


var t = 5
for(i = 1; i<=t; i++){
    // console.log(1);
    var result = ' ';
    for(var j = 1; j<=i; j++){
        result += '1 '
    }
    console.log(result);
}


// 1 1 1 1 1
// 1 1 1 1
// 1 1 1
// 1 1
// 1

// 
console.log('\n');
// 

var t = 15
for(i = 1; i<=t; i++){
    // console.log(1);
    var result = ' ';
    for(var j = t; j>=i; j--){
        result += '1 '
    }
    console.log(result);
}