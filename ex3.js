/*
 Write a JavaScript conditional statement to find the largest
 of five numbers.
 Display an alert box to show the results.
 */
//Declare variables
let a = -5;
let b = -2;
let c = -6;
let d = 0;
let e = -1;

if (a>b && a>c && a>d && a>e){
    alert(a);
} else if (b>a && b>c && b>d && b>e){
    alert(b);
} else if (c>a && c>b && c>d && c>e){
    alert(c);
} else if (d>a && d>b && d>c && d>e){
    alert(d);
} else{
    alert(e);
}
