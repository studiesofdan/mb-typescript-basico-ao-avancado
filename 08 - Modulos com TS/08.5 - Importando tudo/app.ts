import { Human } from "./type";

class User implements Human {
    name;
    age;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const joao = new User("João", 25);
console.log(joao);