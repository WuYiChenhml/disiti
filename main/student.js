
// Write your code here
function Person() {
     this.name = "dongjc";    
     this.age = 32;
     this.Introduce = function () {
         alert("My name is " + this.name + ".I am " + this.age + "years old.");
     };
     alert("My name is " + this.name + ".I'm " + this.age + "years old.");
 };

module.exports = Student
