/*-scope of the const variable type is local, outside thw block you cannot acess this variable.
  -scope of the var variable are global outside block also we can acesss var. 
*/



var name = 'mayur';
var id = 1;
console.log(name, id);
//var city = "pune";

{
    const city = 'Mumbai';
    city='delhi';
    console.log(city);
}
console.log(city);

{
    let city='Rampur';
    city='jamnagar'
    console.log(city);
}
console.log(city);