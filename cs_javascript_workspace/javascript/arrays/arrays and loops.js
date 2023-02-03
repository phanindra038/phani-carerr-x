let firstname = ["phanindra","ramya", "saiganesh", "manojkumar","akhil"];

let lastname = "maradapudi"
let full=[];

 for(i=0; i< firstname.length ; i++){

    let fullname = `${firstname[i]} ${lastname}`;
   // let full = fullname;
   full.push(fullname);
  
 }
 console.log(full)

 // function and return if arrays for loop nd objects//
 let veg = [23,33,44,56, 75, 87 ,77]; // arrays
  let mart = [23,55 ,22, 78, 88,75,52,];
  // function creaction 
 
  function calculatortotal (arry){
    // loops 
    let value =0;
    for( let i =0; i< arry.length ; i++){
        value = value + arry[i];
        //console.log(value);
    }  
    if (value >100){
        console.log("more than 100")
    }
    else 
    {
        console.log("hey good  less than 100")
    }
    return value;
  }
  let vegvalue = calculatortotal(veg);
  let martvalue = calculatortotal(mart);
  let random = calculatortotal([1 , 2, 4, 6, 7, 8, 7, 7 ,5 ,4 ,3 ,3]);
  // cosole normal
  console.log('total of veg:'+ "  "+  vegvalue);
  console.log( 'total of mart:' + " " +martvalue);
  console.log( 'total of randam:' + ' ' +random);

// objects
console.log( {
    veg : vegvalue,
    mart : martvalue,
    randomvalue : random,
}

)