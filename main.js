
//! function declareation premtive prameter
function greating(name) {
  name = "omer";
  console.log(`welcom ${name}`);
}

//! default parmeter
function greating(name = 'Guest') {
  name = "omer";
  console.log(`welcom ${name}`);
}
let rname = "nada";
greating(rname);
console.log(rname);
greating();

var obj = { name: "nada", age: 9 };

//! function declareation refrence prameter
function greating3(obj) {
  obj.name = "999";
  console.log(`welcom ${obj.name}`);
}


greating3(obj);
console.log(obj.name);

//! return value
function squar(x) {
  return x * x;
}
squar(5);
//! function expresion
let squary = function (num) {
  return num * num;
}
let result = squary(6);
//! anymmouse function expresion
(function () {
  //! function scope
  localvar = 9;
  console.log("hello from anymous fuction");
})()

//! arrow function 
let mul = (p1, p2) => {
  return p1 * p2;
}
let double = p1 => {
  return p1 * 2;
}
let half = p1 => p1 / 2;

// document.writeln("welcom from external file")
//! global scope
var studentAge = 90;

//!arr
let arr = [1, 2, 3, 4, 5, 6];
let arr2 = new Array(12, 34.9, 6, '7', 73, true)
//! access
console.log(arr[0])
//! modify
arr[0] = 9;
//
console.log(arr)
//! get lenght
console.log(arr.length)
arr[arr.length] = 89;
//! add
arr.push(33);
//! remove last
let lastitem = arr.pop();

console.log(lastitem)
console.log(arr)

//! remove start
arr.shift();
//! add start
arr.unshift(8);
console.log(arr)

arr.push(4);
//! get first indext of ele or -1 not found
console.log(arr.indexOf(4))
//! get last indext of ele or -1 not found
console.log(arr.lastIndexOf(4))
//! copy arr start ,end => end not include
let co = arr.slice(1, 5) //end not include
console.log(co)
//!add ele in specfic postaion start ,delete num ele ,add ele,ele,ele
console.log("ffff",co);
co.splice(0, 1, 7, 8)
console.log(co)
//! convert string spreate by spreator
console.log(co.join(','))
//! merge two arr
let newaerr = arr.concat(co);
let newaer = [...arr, ...co];
console.log(newaerr)
//! reverse
console.log(arr.reverse())
//! sort
console.log(arr.sort()) //alph
console.log(arr.sort((a, b) => a - b)) //sort num asc
console.log(arr.sort((a, b) => b - a)) //sort num desc
//! loop arr
for (let index = 0; index < arr.length; index++) {
  console.log(arr[index]);

}
console.log("___________________")

for (let n of arr) {
  console.log(n)
}
console.log("__________________")

arr.forEach(element => {
  console.log(element);
});
//! map
let pop = arr.map((ele) => {
  return ele * 2

});
console.log(pop)

//! filter
let filte = arr.filter((ele) => {
  return ele % 2 == 0;
})
console.log(filte)

//! reduce
let reduc = arr.reduce((total, ele) => {
  return total += 1;
}, 0)
console.log(reduc)
// single comment

/*
mult line comment


*/

/**
 * decoment comment
 * @param{number} a -hhhh
 * @returns {number} -jjjjj
 * 
 * 
 */

//! var data type
var x = "hello"
console.log(typeof x);
var x = true
console.log(typeof x);
var x = 5
console.log(typeof Xt);
var x = 10n
console.log(typeof x);
//! convert to anther datatype
var s = "60";
s = Number(s);
console.log(typeof s);
var n = 80;
n = String(n);
console.log(typeof n);
var s = "60.9px";
s = parseInt(s);
console.log(typeof s);
console.log(s);
var s = "60.9px";
s = parseFloat(s);
console.log(typeof s);
console.log(s);
//! auto convert to dateype based operation
console.log("6" + 2) //62
console.log(6 + '2') //62
// auto int  convert  to str becouse + operation allowed in str
console.log(6 / '2')
// auto str  convert  to int becouse - operation not allowed in str
console.log(4 == "4");// value 
console.log(4 === "4"); // value + type

//! condatioal statment
let temp = 30;

if (temp >= 100) {
  console.log("boiling!");
} else if (temp >= 60 && temp < 100) {
  console.log("warm");
} else {
  console.log("cold");
}

//! Ternary operator 
let status = (temp >= 100) ? "boiling" : "not boiling";


var day = 3;

switch (day) {

  case 2:
    console.log("Sunday");
    break;
  case 3:
    console.log("Monday");
    break;
  default:
    console.log("none");
}

//! loops

for (var c = 2; c < 5; c++) {
  console.log(c);
}


var count = 1;
while (count < 5) {
  console.log(count);
  count++;
}

var c = 0;
do {
  // document.writeln(c);
  c++;
} while (c > 5)

//! dom 

//! access ele
// let button = document.getElementById('btn');
// // console.log(button);
// // let btn=document.getElementsByClassName('btn')[1];
// let list = document.getElementsByTagName('ul')[0];
// console.log(list);
// // let parent=document.getElementById('body');

// let head = document.querySelector('.head');
// head.innerHTML="<img src='im.jpg' width=78 height=90>"
// userinput=document.getElementById("userinput");
// userinput.setAttribute('value','love you dear');
// console.log(userinput.getAttribute("value"))
// //! change style
// // btn.style.color="red";
// // btn.innerHTML="welcom";
// button.style.color = "red";
// button.style.backgroundColor="blue";

// list.style.backgroundColor = "black"
// list.style.color = 'white';
// console.log("arrr",img.getAttribute('src'));   

// img.setAttribute('src','./about.jpg');
// img.setAttribute('width',500);

// if(document.body.classList.contains('dark')){

//   document.body.classList.remove('dark')
// }else{
//     document.body.classList.add('dark')
// }


// button.addEventListener('click', function () {

//   if (document.body.classList.contains('dark')) {

//     document.body.classList.remove('dark');
//     button.innerHTML = 'dark';
//   } else {
//     document.body.classList.add('dark');
//     button.innerHTML = 'light';
//   }
// });

// list.addEventListener('mouseover', function () {
//   list.style.backgroundColor = 'red';
// });
// list.addEventListener('mouseout', function () {
//   list.style.backgroundColor = 'blue'
// })
// let tasks = [];
// let form = document.getElementById('form');
// let taskname = document.getElementById('name');
// let taskdesc = document.getElementById('desc');
// let taskptoirty = document.getElementById('proirity');
// let tasklist = document.getElementById('tasklist');
// let Filterproirity= document.getElementById('Filterproirity');

// Filterproirity.addEventListener('change',rendertasks);

// function rendertasks() {
//   tasklist.innerHTML='';
//   tasks.filter((t)=>t.priorty==Filterproirity.value || Filterproirity.value=='All')
//   .forEach((task, index) => {
//     var newlistitem = document.createElement('div')
//     newlistitem.innerHTML = `

//   <p contenteditable="true" oninput="editName(${index}, this)">
//   name : ${task.name} 
//   </p>

//   <p contenteditable="true" oninput="editDesc(${index}, this)"> 
//   description: ${task.desc} 
//   <p>

//   priorty: ${task.priorty} 

//   <button onclick="deletetask(${index})"style="background-color:red">delete</button>
//   `;
//     newlistitem.classList.add(`${task.priorty}`)
//     tasklist.appendChild(newlistitem);
//   })
// }

// function editName(index,ele){
// tasks[index].name=ele.innerHTML;
// // rendertasks();
// }

// function editDesc(index,ele){
// tasks[index].desc=ele.innerHTML;
// // rendertasks();
// }
// // tasklist.style.backgroundColor="red";
// // tasklist.innerHTML="hello we are here"

// form.addEventListener('submit', function (e) {
//   e.preventDefault();
//   let val = taskname.value;
//   tasks.push({ name: val, description: taskdesc.value, priorty: taskptoirty.value })
//   rendertasks()
//   taskname.value = ' ';
//   taskdesc.value = '';
//   taskptoirty.value = 'high'
// })

// function deletetask(index) {
//   if (confirm("are tou sure want delete")) {
//     tasks.slice(index,1)
//     renderTasks()
//   }
// }



function hello() {
  console.log("welcome");

}

hello();
console.log(hello())// undefine => no return
function add(n1=9,n2=6) {
  // function scope
  var result=n1+n2;
  // console.log(result);
  return result;
}
add();//nan ,//after put defult
add(2,4)
console.log(add(4,5));


var y= function(){
  console.log("welcome!!")
}
{
  //block scope
}

y();
function callantherfun(fn){
  var xr=9;
  console.log("call anther method")
  fn()
}
// console.log(xr)
callantherfun(y);
// global scope
var d=9;
for (let index = 0; index <1; index++) {
  var cr=9;
  
}


console.log(cr)
// var not block scope & function scope

//let block


var rr=[899,true,'iiuuu'];
console.log(rr)
console.log(rr[2])
rr[1]=false
console.log(rr)
rr[3]=33;
console.log(rr)
console.log(rr.length)
rr.pop()
console.log(rr)
rr.push(9,5)
console.log(rr)
rr.splice(1,1,7)// delete all except nuum at index 1
console.log(rr)
rr.shift()
console.log(rr)
rr.unshift(5)
console.log(rr)
arr=[3,4,5,6,7,8,9,0,7]
console.log(rr.indexOf(7));
console.log(rr.lastIndexOf(7));
console.log(rr.indexOf(70));
co=arr.slice(0, 3)
console.log(co)
let newaerrr = arr.concat(co);
console.log(newaerrr)
var str=newaerr.join(",");
console.log(str);
let names=["nada","omer","ali",'sayed']
console.log(names);
names.sort();
console.log(names);

let numbers=[10,2,3,6,55];
console.log(numbers);
numbers.sort((a,b)=> a-b); //asce => - a then b, + b then a 
console.log(numbers);

for (let i = 0; i < numbers.length; i++) {
 console.log(numbers[i]);
  
}
for(let nam of names){
console.log(nam);
}
names.forEach((nam,ind) => {
  console.log(nam," ",ind);
});
let button = document.getElementById('btn');
// console.log(button);
// let btn=document.getElementsByClassName('btn')[1];
let list = document.getElementsByTagName('ul')[0];
console.log(list);
// let parent=document.getElementById('body');

let head = document.querySelector('.head');
head.innerHTML="<img src='im.jpg' width=78 height=90>"
userinput=document.getElementById("userinput");
userinput.setAttribute('value','love you dear');
console.log(userinput.getAttribute("value"))
//! change style
// btn.style.color="red";
// btn.innerHTML="welcom";
button.style.color = "red";
button.style.backgroundColor="blue";
let newele=document.createElement("a");
newele.setAttribute('href','http://google.com')
var text=document.createTextNode("hello i'm text node")
newele.appendChild(text);
document.body.appendChild(newele);
button.addEventListener('click', ()=>{
  alert("clicked")
});
 arr = [5, 7, 9, 23, 1, 25, 55];

arr.pop();

arr.pop();

arr.unshift(3);

//arr.splice(0, 0, 3);

arr.reverse();

console.log(arr);


console.log("__________________________________")
// function sumArray(arr) {
//   var sum = 0;
//   for (let num of arr) {

//     sum += num;
//   }
//   return sum;
// }
// function countevennum(arr) {
//   var c = 0;
//   for (let num of arr) {
//     if (num % 2 == 0) c++;

//   }
//   return c;
// }
// function isprime(num) {
//   let yuy=9;
//   for (let i = 2; i < num; i++) {
//     if (num % i == 0) return false;
//   }
//   return true;
// }
// arr=[9,7,6,3,4];
// even=arr.filter((num)=>num%2==0);
// doublear =arr.map(num=>num*2);
// sumarr=arr.reduce((total,num)=>total+=num,0)
// console.log(even);
// console.log(doublear);
// console.log(sumarr);
// arr.forEach(num=>console.log(num));

// console.log("sum is ", sumArray([1, 2, 3]));
// console.log("count even is ", countevennum([1, 2, 3]));
// console.log(" is prime",isprime(5));
// console.log(" is prime",isprime(2));
// console.log(" is prime",isprime(6));


// {

//   var poopo=0;
// }
// console.log(poopo);
// console.log(yuy);