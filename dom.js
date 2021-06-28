// Examine The Document
// console.dir(document)

// // console.log(document.URL);
// // console.log(document.title);
// // console.log(document.doctype)
// // console.log(document.head)
// // console.log(document.all)
// // console.log(document.all[10])
// // console.log(document.forms)
// // console.log(document.links)


// Get element by Id

// let itemHeader = document.getElementById("main-header");
// text = itemHeader.innerHTML = "Hello World wide web + <b> Hope</b>"
// text = itemHeader.style.border = "solid 3px black";
// // console.log(text);

// Get element by Classname


// let items = document.getElementsByClassName("list-group-item")
// console.log(items[1].textContent = 'Hello World')
// console.log(items[2].style.fontWeight = 'bold')
// console.log(items[3].style.backgroundColor = 'yellow')

// // items.style.backgroundColor = "Yellow"

// for (i = 0 ; i < items.length; i++){
//    items[i].style.backgroundColor = "Red";
// }

// const heading = document.createElement("h1");
// const heading_text = document.createTextNode("Big Head!");
// heading.appendChild(heading_text);
//document.body.appendChild(heading);

// query selector

let header = document.querySelector('#main-header')
header.style.border = 'solid 4px black'

let input = document.querySelector('input')
input.value = 'hello world' 

let submit = document.querySelector('input[type="submit"]')
submit.value = 'SEND'

let item = document.querySelector('.list-group-item')
item.style.color = 'red' 

let lastitem = document.querySelector('.list-group-item:last-child')
lastitem.style.backgroundColor = 'Green'

// Event listening

let button = document.querySelector('#button').addEventListener('click',
buttonClick)

function buttonClick(e){
   // console.log('button clicked')
//    document.querySelector('#header-title').textContent = "Changed"
//    document.getElementById('main').style.backgroundColor = 'Brown'
   let output = document.getElementById('output')
   output.innerHTML = '<h2>' + e.target.id +'</h2>'
   
}

function runEvent(e){
   console.log('EVENT TYPE: '+ e.type)
   
}