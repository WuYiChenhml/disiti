// Write your code here
function Person(name, age) {
  this.introduce = function(){
     var str = "My name is " + name + ". I am " + age + " years old.";
        return str;
    };
        }

module.exports = Person
