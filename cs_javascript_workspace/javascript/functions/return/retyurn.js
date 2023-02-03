
let aallheight=90;

function calculation (value){
console.log("The value in cm :"  +  value * 2.45 + " cm");
let newvalue = ( value * 2.45);
return newvalue;

}

//let width= 100;
 let width = calculation (100)
//let height = 150; 
height = calculation (aallheight)
calculation (width);
calculation  (height);   
calculation (aallheight);
let wallheight= calculation (300)




let dimensions =[width ,height ,wallheight];
console.log(dimensions);
