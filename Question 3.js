/*
Write a “person” class to hold all the details.
        
class Person {
    
    constructor(firstName, surName, age, email, mobile, city){
        this.firstName = firstName;
        this.surName = surName;
        this.age = age;
        this.email=email;
        this.mobile=mobile;
        this.city = city;
    }
    getPersonDetails(){
        return  `Name: ${this.firstName} ${this.surName}
        age: ${this.age}
        email: ${this.email}
        mobile: ${this.mobile}
        city: ${this.city}`;
    }
}
let person1 = new Person("nithya", "ramesh",30, "nithyanisha@gmail.com", 9712344552, "coimbatore");
let person2 = new Person("janani","ram", 27, "jananiufrdmn@gmail.com", 7639782192, "chennai");
let person3 = new Person("bala","senthil",28, "balasenthil@gmail",1233456789,"salem");


console.log(person1.getPersonDetails());
console.log(person2.getPersonDetails());
console.log(person3.getPersonDetails());

//OUTPUT:

Name: nithya ramesh
        age: 30
        email: nithyanisha@gmail.com
        mobile: 9712344552
        city: coimbatore
Name: janani ram
        age: 27
        email: jananiufrdmn@gmail.com
        mobile: 7639782192
        city: chennai
Name: bala senthil
        age: 28
        email: balasenthil@gmail
        mobile: 1233456789
        city: salem//

        */