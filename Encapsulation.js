// let myName = "Rezon";

// let age = 23;

// let height = "5 ft 8 inch";

// let skinColor = "medium bright";

// let getInfo = (myName, age)=> {
// console.log(`My name is ${myName}. I am ${age} years of old.`)}

// let moreInfo = (height, skinColor)=> {
// console.log(`My height is ${height}. As an Asian, my skin color is ${skinColor}.`)
// }

// getInfo(myName, age);
// moreInfo(height, skinColor);


//  >>>>>>>>>>>>>>>>>>> Target is to capsule all similer things to one single object and not to pass parameters. >>>>>>>>


// let personalizedObj = {
//     myName: "Rezon",
//     age: 23,
//     height: "5 ft 8 inch",
//     skinColor: "medium bright",

//     getInfo: function () {
//         console.log(`My name is ${this.myName}. I am ${this.age} years of old.`)
//     },

//     moreInfo: function () {
//         console.log(`My height is ${this.height}. As an Asian, my skin color is ${this.skinColor}.`)
//     }
// }

// personalizedObj.getInfo();
// personalizedObj.moreInfo();

//  >>>>>>>>>>>>>>>>>>> Target Fillup. Now terget is to use class systex >>>>>>>>

// class Person {
//     constructor(myName, age, height, skinColor){
//     this.myName =  myName,
//     this.age = age,
//     this.height = height, 
//     this.skinColor = skinColor
//     }

//     getInfo() {
//         console.log(`My name is ${this.myName}. I am ${this.age} years of old.`)
//     }

//     moreInfo () {
//         console.log(`My height is ${this.height}. As an Asian, my skin color is ${this.skinColor}.`)
//     }
// }

// let rezonObj = new Person("Rezon", 23, "5 feet 8 inch", "medium bright");
// let tamimObj = new Person("Tamim", 43, "5 feet 3 inch", "medium bright");

// rezonObj.getInfo();
// tamimObj.getInfo();

//  >>>>>>>>>>>>>>>>>>> Target Fillup. Now terget is to Restrict property or methods. They can't be visible publicly >>>>>>>>

// class AnotherPerson {
//     #height;
//     #skinColor;
    
//     constructor(myName, age, height, skinColor){
//     this.myName =  myName,
//     this.age = age,
//     this.#height = height, 
//     this.#skinColor = skinColor
//     }

//     getInfo() {
//         console.log(`My name is ${this.myName}. I am ${this.age} years of old.`)
//     }

//     moreInfo () {
//         console.log(`My height is ${this.#height}. As an Asian, my skin color is ${this.#skinColor}.`)
//     }
// }

// let Toyub = new AnotherPerson("Toyub", 18, "6 feet 10 inch", "bright");

// console.log(Toyub.height)
// Toyub.moreInfo()

// Result: 
// undefined
// My height is 6 feet 10 inch. As an Asian, my skin color is bright.

//  >>>>>>>>>>>>>>>>>>> Target Fillup. Encapsulation Consept done. >>>>>>>>



