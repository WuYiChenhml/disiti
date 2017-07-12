let Person = require('./person')
// Write your code here

function Student(name，age，Class) {
      this.method = Person; 
      this.method(name，age);
      delete this.method; 
      this.class = 2;
     
     this.introduce = 'My name is ' + this.name + '. I am ' +  this.age + 'years old. I am a Student. I am at Class ' + this.class + ' .';
    return = this.introduce;
   
}
    
module.exports = Student
