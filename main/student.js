
// Write your code here
function Student(name, age, Class) {
     this.introduce=function(){
          var str = 'My name is ' + name + '. I am ' + age + ' years old. I am a Student. I am at Class ' + Class + '.';
         return str;
     };
 }

module.exports = Student
