// Write your code here
 var Person = function (name, age) {
  this.introduce=function(){
        return 'My name is ' + name + '. I am ' + age + ' years old.'; 
    };
        };

module.exports = Person
