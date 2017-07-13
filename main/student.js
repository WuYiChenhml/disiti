let Person = require('./person')
// Write your code here

var Student = function Student(name，age，Class) {
      this.name = name; 
      this.age = age;
      this.class = Class;
     
     this.introduce = 'My name is ' + this.name + '. I am ' +  this.age + 'years old. I am a Student. I am at Class ' + this.class + ' .';
    return this.introduce;
   
}
var Student = new Student();
    
module.exports = Student
