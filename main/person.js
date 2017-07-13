// Write your code here
var Person = function(){
 this.name = 'Tom';
 this.age = 21;
   this.introduce = 'My name is ' + this.name + '. I am ' + this.age + 'years old.';  
return this.introduce;
}
var person = new Person();
module.exports = Person
