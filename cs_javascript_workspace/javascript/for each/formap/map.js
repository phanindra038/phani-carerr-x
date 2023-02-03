let person = 
[{name:"phanindra", age : 27, gender : "male", location :"vizag" },
{ name:"suresh", age : 29, gender : "male", location :"vzm" },
{name:"rani", age : 20, gender : "female", location :"hyd" }
];
// map is using for store data in arrys
 let ages = person.map(function(people){
    return people.age;
 });
 console.log(ages);

 let names = person.map(function(newnames){
    return newnames.name;
 });
 console.log(names);

 let newpersons = person.map(function(anni){
 return{
    fullname : anni.name,
    olderage : anni.age,
    currentloc : anni.location
 };

 });
 console.log(newpersons);