class Animal {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }
    setName(name) {
        this.name = name;
    }
    setWeight(weight) {
        this.weight = weight;
    }
    getName() {
        return this.name;
    }
    getWeight() {
        return this.weight;
    }
    toString() {
        return "Name: " + this.name + ", " + "Weight: " + this.weight;
    }
}

let objAnimal1 = new Animal();
objAnimal1.setName("Elephant");
objAnimal1.setWeight(45.6);
objAnimal1.toString();
let objAnimal2 = new Animal("Cat",3);
objAnimal2.setName("Mouse");

