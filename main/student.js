let Person = require('./person')
// Write your code here

function Student() {
     this.name = "Tom";   
     this.age = 21;
	this.class = 2;
     this.Introduce = function () {
         console.log('My name is Tom. I am 21 years old. I am a Student. I am at Class 2.');
     }
    
}

module.exports = Student
