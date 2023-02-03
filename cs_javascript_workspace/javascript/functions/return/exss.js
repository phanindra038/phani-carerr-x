 

 function addition (num1,num2){
    return num1 + num2;
 }

 let firstnum1= addition (10,11);
 let secondnum2= addition(18,19);
 console.log(firstnum1 , secondnum2);

 let sum = [ firstnum1,secondnum2];
 console.log(sum);


 let add =
 function (num1,num2){
    return num1 + num2;
 }
 let thirdnum3= add (100,200)

//let result = [ firstnum1,secondnum2 ,thirdnum3];
 //console.log(result);

 
 let result = [ firstnum1,secondnum2 ,add(500,200)];
 console.log(result);