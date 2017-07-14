// Write your code here
function (name, age) {
  this.introduce = function(){
     var str = "My name is ' + name + '. I am ' + age + ' years old.";
        return str;
    };
        }

module.exports = Person
