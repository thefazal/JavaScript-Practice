console.log("this is tutorial7")
// 
function shah(name, shahText="Shah from JavaScript"){

    let name1 = "name1"; 
    console.log(name1);
    console.log(shahText + " " + name)
    console.log(name+ " is a good boy")

}
let name ="Fazal"
let name1 ="Lucky"
let name2 ="India"
let name3 ="world";
let name4="bharat";
let shahText="Good evenig"
//
shah(name,shahText);
shah(name1,shahText);
shah(name2,shahText);
shah(name3,shahText);
shah (name4);
//console.log(name + " is a good boy ")
//console.log(name1 + " is a good boy ")
//console.log(name2 + " is a good boy ")
//console.log(name3 + " is a good boy ")

/////////////////////////////////////////////////
function sum(a,b,c){
    let d = a + b + c;
    return d;
  // This line will never execute(unreachabel code)
   //.log("Function is returned");
// 
}
let returnVal =sum(1,2,3)
console.log(returnVal);