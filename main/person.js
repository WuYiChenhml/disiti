// Write your code here
var Person = function(){
 this.name = 'Tom';
 this.age = 21;
   this.introduce = function(){
    alert('My name is ' + this.name + '. I am ' + this.age + 'years old.');  }
return this.introduce;
}

module.exports = Person
