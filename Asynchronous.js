console.log("this is asynchronous demo");

setTimeout(()=>{
for(index=0; index<=600; index++){
    console.log("This is index no"+index);
}
},100);

console.log("Asynchronous Demo");