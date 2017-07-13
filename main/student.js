let Person = require('./person')
// Write your code here

var Student = function Student() {
      this.name = 'Tom'; 
      this.age = 21;
      this.class = 2;
     
     this.introduce = function(){
           alert('My name is ' + this.name + '. I am ' +  this.age 
                 + 'years old. I am a Student. I am at Class ' + this.class + ' .');}
    return this.introduce;
   
}

    
module.exports = Student
