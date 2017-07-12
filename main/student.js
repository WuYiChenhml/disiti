let Person = require('./person')
// Write your code here

function Student(name，age，class) {
     this.method = Person; 
     this.method(name，age);
     delete this.method; 
     this.class = 2;
     this.Introduce = function () {
         console.log('My name is Tom. I am 21 years old. I am a Student. I am at Class 2.');
     }
    
}
    
  var Student = new Student(); 
Person.Introduce(); 
module.exports = Student
