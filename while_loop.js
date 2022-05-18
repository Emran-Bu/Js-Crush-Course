// number print
var i = 0;
// while(i<=10){
//     console.log(i);
//     i++;
// }

// summation
var sum = 0;
var i = 0;
while(i<=10){
    var result = sum + i;
    console.log(sum + ' + ' + i  + ' : ' + result);
    sum += i;
    i++;
}

// odd number

var i = 0;

while(i<=10){
    if (i%2 == 1) {
        console.log(i);
    }
    i++;
}
console.log('\n');
// even number sum

var i = 0;
var sum = 0;
while(i<=10){
    if (i%2 == 0) {
        console.log(sum+ ' + ' +i + ' : ' + (sum+i));
        sum += i;
    }
    i++;
}
console.log('total even number : ' + sum);

// 
var run = 1;

while(run<=10){
    console.log('emran');
    if (run == 7) {
        break;
    }
    run++;
}

// 
var running = true;

while (running) {
    var rand = Math.floor(Math.random() * 10 + 1);

    console.log(rand);

    if (rand == 10) {
        console.log('winner');
        running = false;
    }
}

// 

var way = true
while (way) {
    console.log('ok');
    way = false
}

