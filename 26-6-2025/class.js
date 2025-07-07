// class is a blueprint or template for creating objects. It defines properties (variables) and methods

//  that thr objects created from the class will have


// class  ClassName{
//     contructor(property1,property2){
//         this.property1 = property1
//         this.property2 = property2
//     }
//     method1(){
//         console.log("this is a method1")
//     }
//     method2(){
//         console.log("this is a method2")
//     }
// }

// const p1 = {
//     property1:value1,
//     method1:()=>{
//         console.log("method1")
//     }
// }


// object 

// there is a bank, in that there will be multiple accounts 


// class BankAccount{
//     #pin
//    constructor(name,amount,pin){
//     this.name = name
//     this.balance = amount
//     this.#pin = pin
//     this.accountNumber = Math.floor(Math.random()*900000+100000)
//    }
//    deposit(amount){
//     if (amount>0){
//         this.balance += amount
//         console.log(`Deposited ${amount}. New Balance: Rs. ${this.balance}`)
//     }
//     else{
//         console.log("Deposit Amount must be greater than 0")
//     }
//    }
//    withDraw(amount){
//     if(amount>0 && amount <= this.balance){
//         this.balance -= amount
//         console.log(`Withdrew amount: ${amount}. New Balance: ${this.balance}`)
//     }
//     else{
//      console.log('Insufficent Amount or Invalid Amount')
//     }    
//    }
// }


// let c1 = new BankAccount("Priya",50000,4123)
// let c2 = new BankAccount("Jagadish",50000,1235)
// c2.deposit()
// c1.deposit
// c1.withDraw

// c1.deposit()

// [].pop()
// console.log(c1.balance)
// console.log(c1.deposit(10651))
// console.log(c1.balance)

// c1.withDraw(20146)

// console.log(c1.balance)

// console.log(c1.#pin)

// c1.getAllDetails(pin) 
// if pin == this.#pin
// --> name balance and account

// principkes --> 4 core principles
// inheritance polymorphism abstraction encapsulation

// encapsulation --> 
// 1. data bundling --> wrapping a code in single unit
// 2. makes the data private or hide the data



// let arr1 = [1,2,3]
// console.log(arr1.length)


// class Array{
//     contructor(){
//         this.length
//     }
//     pop(){}
//     shift(){}
//     unshift(){}
//     push(){}
//     slice(){}
//     splice(){}
//     splice(){}
// } 


// inheritance

// --> is aprinciple that allows one class to inherit properties and methods from another class. this promotes code reuse and modularity and heirarchial relationship


// class Animal {
//     constructor(name){
//         this.name = name
//     }
//     speak(){
//         console.log(`${this.name} make a sound.`)
//     }
// }
// class Dog extends Animal {
//     constructor(name, breed){
//         super(name)  //PARENT CLASS contructor
//         this.breed = breed       
//     }
//     // speak(){
//     //     console.log(`${this.name} barks`)
//     // }
// }

// const dog1 = new Dog("Tommy", "Labrador")

// dog1.speak()

//1. single level inheritance          
// father-->child



//2. multi level inheritance
// grandfather --> father --> child
// bankaccount --> saving account
            //    --> current account  


// 3. heirarchial inheritance
// class BankAccount {}
// class SavingAccount extends BankAccount{}
// class CurrentAccount extends BankAccount{}

// js doesnt support a multiple inheritance
// child extend father and Mother

// 5.hybrid inheritance (combination of any type)

//  polymorphism
// poly many, morphism --> forms
// methods with same name, but with different behavior 

// two main types of polymorphism
// 1. compile-time (method overloading) -- doesnt support by js
// 2. run-time (method overriding)

// method over riding

// class Animal {
//     makeSound(){
//         console.log("Animal makes a Sound")
//     }
// }
// class Dog extends Animal{
//     makeSound(){
//          console.log("Dog Barks")
//     }
// }
// class Cat extends Animal{
//     makeSound(){
//          console.log("Cat Barks")
//     }
// }


// const animals = [new Animal(), new Dog(), new Cat()]

// animals.forEach((element)=>{
//     element.makeSound()
// })

// method overloading -- not supported by js

// class Calculator{

//     add(a,b){
//         console.log(a,b)
//     }
//     add(a,b,c){
//         console.log(a,b,c)
//     }
//     add(a,b,c,d){
//         console.log(a,b,c,d)
//     }
// }
// let cal1 = new Calculator()
// cal1.add(1,2)
// cal1.add(1,2,3)


// class BankAccount{
//     #pin
//    constructor(name,amount,pin){
//     this.name = name
//     this.balance = amount
//     this.#pin = pin
//     this.accountNumber = Math.floor(Math.random()*900000+100000)
//    }
//    deposit(amount){
//     if (amount>0){
//         this.balance += amount
//         console.log(`Deposited ${amount}. New Balance: Rs. ${this.balance}`)
//     }
//     else{
//         console.log("Deposit Amount must be greater than 0")
//     }
//    }
//    withDraw(amount){
//     if(amount>0 && amount <= this.balance){
//         this.balance -= amount
//         console.log(`Withdrew amount: ${amount}. New Balance: ${this.balance}`)
//     }
//     else{
//      console.log('Insufficent Amount or Invalid Amount')
//     }    
//    }
//    getAllDetails(){
//     console.log(this.#pin)
//    }
// // }
// BankAccount.prototype.getAllDetails = function(){
//     console.log(this.#pin)
// }
// BankAccount.greet = ()=>{
//     console.log("Hello JI namaste chalo kaam ki baat pr aate h")
// }
let c1 = new BankAccount("Priya",50000,4123)

console.log(c1.getAllDetails())

// classname.prototype ==> refernces the class

