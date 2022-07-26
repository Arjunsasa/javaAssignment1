var first = prompt("Give a number from 0 to 20");

var second = prompt("Give another number from 0 to 20");

if (first < 0 || first > 20) {
    alert("Must enter number between 0 to 20");
}
else if (second < 0 || second > 20) {
    alert("Must enter number between 0 to 20");
}
else if (first > second) {
    alert(second + ", " + first);
}
else{
    alert(first + ", " + second);
}
