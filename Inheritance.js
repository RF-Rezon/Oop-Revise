class HumanBeing {
    constructor(myName, age) {
    this.myName = myName
    this.age = age
    }

    getInfo() {
        console.log(`My name is ${this.myName}. I am ${this.age} years of old.`)
    }
}


class Boys extends HumanBeing{
    #height;
    #skinColor;

    constructor(myName, age, height, skinColor) {
        super(myName, age)
        this.#height = height
        this.#skinColor = skinColor
    }

    boyMoreInfo() {
        console.log(`My height is ${this.#height}. As an Asian, my skin color is ${this.#skinColor}.`)
    }
}

const Rejwan = new Boys("Rejwan", 23, "5 feet 8", "nice");
Rejwan.boyMoreInfo()

class Girls extends HumanBeing {
    #hill;
    #hair;

    constructor(myName, age, hill, hair) {
        super(myName, age)
        this.#hill = hill
        this.#hair = hair
    }
    girlMoreInfo(){
        console.log(`I have nice ${this.#hair} hire and ${this.#hill}, i have a pire of hill! `)
    }
}

let HidderFairy = new Girls("HidderFairy", 18, "Yes", "Black");
HidderFairy.girlMoreInfo();


console.log("Boys and Girls both Inheritating The HumanBeing Class ❤")