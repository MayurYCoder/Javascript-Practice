console.log("element creation");
let element=document.createElement('li');
console.log(element);
element.className='Mayur';
element.id='createid';

let text=document.createTextNode('Text node is created in javascript');
element.appendChild(text);

let ul=document.querySelector('ul.this');
// ul.appendChild(element);
