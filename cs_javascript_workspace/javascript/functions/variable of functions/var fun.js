let ram = "ramesh";
let phani = "phanindra";
let d= "devi"; // globel or outer variables

function green(){
    console.log("name is  "+ ram);
    console.log("name is  "+ phani);
    console.log("name is  "+ d);
}
green();

function great(){
 let s = "suresh";
 let m = "manoj";
 let sa ="sairam"; // local variable
 console.log("name is s = "+ s);
 console.log("name is sa = "+ sa);
 console.log("name is m = "+ m);
 console.log("name is d = "+ d);// globel variable
 console.log("name is phani = "+ phani);
 console.log("name is ram = "+ ram);
}
great();

