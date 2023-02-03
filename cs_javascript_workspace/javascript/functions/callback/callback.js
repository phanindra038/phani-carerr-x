function morning (firstname){
    //console.log(` hai good mrng ${firstname}`);
    return ` hai goodmorning ${firstname}`;

}
function goodafternoon ( firstname){
    return `hai good afternoon ${firstname}`
}

function gudevng (firstname){
    return `hai good evng ${firstname}`
} 
 

function greet (firstname , dc){
    let myname = "phanindra";
    //dc(firstname); or $ {dc(firstname)}
    //console.log (`${dc (firstname)} my name is ${myname}`)
    dc(firstname);
    console.log(` ${dc (firstname)} my name is  ${myname}`)
}
greet("ram ", morning);
greet("suresh", goodafternoon );
greet("ramkumar ", gudevng );