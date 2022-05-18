var i = 0;
do{
    console.log(i);
    i++;
} while (i<=10)

// 
var run = false
do{
    console.log('ok');
 } while(run);


//  even number print
var i = 0

 do{
     if (i%2 == 0) {
         console.log(i);
     }
     i++;
 } while(i<=10)

 

//  sum of odd number print
var i = 0
var sum = 0;
do{
    if (i%2 == 1) {
        console.log(sum + ' + ' + i + ' : ' + (sum + i));
        sum += i
    }
    i++;
} while(i<=10)

//  sum of number print
var i = 0
var sum = 0;
do{
        console.log('\n' + sum + ' + ' + i + ' : ' + (sum + i));
        sum += i
    i++;
} while(i<=10)