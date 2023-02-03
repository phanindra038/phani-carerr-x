let arr =[];
arr = ['phani','raj','suresh','sai'];
console.log(arr);
console.log(arr.length);
 // using push add name in last of array 
  arr.push('devi','ramesh');
  console.log(arr);
  console.log(arr.length);
  // using pop remove the value of last in array varabile.
  arr.pop();
  console.log(arr);
  console.log(arr.length);
  // using unshift add value in the first in array
  arr.unshift('sing','ramya');
  console.log(arr);
  console.log(arr.length);
// using shift to remove value in first in arryay
arr.shift();
console.log(arr);
  console.log(arr.length);
  // another method you can write
  var rem= arr.shift();
  console.log(rem);
  console.log(arr.length);

  // using index number to print array
  console.log(arr['4']);
  console.log(arr['1']);
  console.log(arr['3']);
  console.log(arr[arr.length -1]);
  // using push, pop ,unshift ,shift ,length, length-1, index number wise print // 

  // using  alpha
  arr.sort();
  console.log(arr);

  //  using reverse
  arr.reverse();
  console.log(arr);

  // splice using remove & adding for certain index number//
 arr.splice(0,1 );
 console.log(arr);

 arr.splice(1,2,'amma');
 console.log(arr);
 
/// using indexof for finding the value of array $ lastIndexof 
//            0      1     2       3      4      5      6 
let amm = ['phani','raj','amma','suresh','sai','devi','amma']
let a = amm.indexOf ('devi');
let b = amm.indexOf ('amma');
console.log(a);
console.log(b);
 // having 2 names we can find index number usind lastIndexof 
let c = amm.lastIndexOf('amma');
console.log(c);

// sort , reverse, splice, indexof ,lastIndexof/// 

 
  