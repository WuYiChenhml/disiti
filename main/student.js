
// Write your code here
function Student(name, age, Class) {
     this.introduce=function(){
         return 'My name is ' + name + '. I am ' + age + ' years old. I am a Student. I am at Class ' + Class + '.';
     };
 }

module.exports = Student
