function circle(x){
    var y = x / 2; 

    console.log(y);

    var sqY = y * y;

    console.log(sqY);

    var p = Math.PI;

    var areaOfCircle = p * sqY * sqY;

    console.log(areaOfCircle);
    
    var percentage = ((sqY / areaOfCircle ) * 100);

    console.log(percentage + "%") 
}