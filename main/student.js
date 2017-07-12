let Person = require('./person')
// Write your code here

var Student = new Object();
Student.name = "Tom";
Student.age = 21;
Student.class = 2;

Student.say = function() {
	console.log('My name is Tom. I am 21 years old. I am a Student. I am at Class 2.');
}

module.exports = Student
