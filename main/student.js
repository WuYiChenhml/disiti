let Person = require('./person')
// Write your code here

function = Student(name，age，class) {
     this.method = Person; 
     this.method(name，age);
     delete this.method; 
     this.class = 2;
     this.introduce = function () {
         console.log('My name is Tom. I am 21 years old. I am a Student. I am at Class 2.');
     }
    
}
    
Person.introduce(); 
module.exports = Student
