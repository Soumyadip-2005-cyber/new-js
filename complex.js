const somehow=[1,45,66,77,88]
 const newarr=somehow.map((e)=>{
    return e*3;
})
console.log(newarr,somehow.reverse());


let newgp=math.random()
 let first,second,third;

// first case
 if (newgp<0.33) {
    first='shop'
 }

 else if(newgp>=0.33 && newgp<0.66){
    first="crazy"
    
}
  else {
    first='fire'
 }

//  second case
 
if (newgp<0.33) {
    first='Amazing'
 }

 else if(newgp>=0.33 && newgp<0.66){
    first="Foods"
    
}
  else {
    first='Limited'
 }

 //  third case

 if (newgp<0.33) {
    first='Engine'
 }

 else if(newgp>=0.33 && newgp<0.66){
    first="Garments"
    
}
  else {
    first='Hub'
 }

console.log(`${first} ${second} ${third}`)


