
// Write your code here
function Student() {
     this.name = "Tom";    
     this.age = 21;
     this.class = 2;
     this.Introduce = function () {
         alert("My name is " + this.name + ".I am " + this.age + "years old. I am a Student. I am at Class " + this.class +'.');
     };
     alert("My name is " + this.name + ".I'm " + this.age + "years old. I am a Student. I am at Class " + this.class +'.');
 };

module.exports = Student
