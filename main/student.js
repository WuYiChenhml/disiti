let Person = require('./person')
// Write your code here

function Student(name,age,class) {
      this.name = name; 
      this.age = age;
      this.class = class;
     
     this.introduce = function(){
           alert('My name is ' + this.name + '. I am ' + this.age + 'years old. I am a Student. I am at Class ' + this.class + ' .');}
   
}

    
module.exports = Student
