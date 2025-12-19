
// person object static
let person ={
    name: 'omer',
    age:8,
    welcome:function(){
        console.log(`welcome ${this.name} !!!!`);
    }
};

// access obj ele
console.log(person.name);
person.welcome();
// del obj prop
delete person.age;

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

let person2={};
Object.assign(person2,person,{job:"tech"});
console.log(person2)


function Person(name,age) {
    this.name=name;
    this.age=age;
}
function Animal(name) {
    this.name=name;
   
}
function Dog(name) {
   Animal.call(this,name);
   
}
let newp= new Person("nada",23);
let newp2= new Person("sayed",20);
console.log(newp);
console.log(newp2);

let arr= new Array(7,9,8,7,4);
console.log(Array.prototype)
console.log(person.prototype)
console.log(Animal.prototype)




Animal.prototype.sleep=function() {
    console.log(this.name+" say Zoooo!!")

}

let a= new Animal('cat');

a.sleep();
Dog.prototype=Object.create(Animal.prototype);
Dog.prototype.sleep=function() {
    console.log(this.name+" say lolo!!")
}
let b= new Dog('ann');
b.sleep();


class Birds{
 constructor (name){
       this.name=name;
    console.log("dd")
 }
 speak(){
    console.log("weee");
 }
};


class asphor extends Birds{
    constructor (name,ty){
       super(name);
       this.ty=ty;

    }
    speak(){
        super.speak();
        console.log("feee");
    }
    getData(){
          console.log(`welcome ${this.name} + ${this.ty} !!!!`);
    }
}
let obj1= new Birds('cacc');
console.log(obj1);
obj1.speak();
let obj2= new asphor('cacc','asphor');
console.log(obj2);
obj2.speak();
obj2.getData();

let str= JSON.stringify(obj2);
console.log(str);

let jsonObj=JSON.parse(str);
console.log(jsonObj);