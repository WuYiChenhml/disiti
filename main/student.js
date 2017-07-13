let Person = require('./person')
// Write your code here

var Student = function Student() {
      this.name = 'Tom'; 
      this.age = 21;
      this.class = 2;
     
     this.introduce = 'My name is ' + this.name + '. I am ' +  this.age + 'years old. I am a Student. I am at Class ' + this.class + ' .';
    return this.introduce;
   
}
var Student = new Student();
    
module.exports = Student
