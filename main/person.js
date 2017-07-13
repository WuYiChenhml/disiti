// Write your code here
var Person = function(){
 this.name = 'Tom';
 this.age = 21;
   this.inteoduce = function(){
    console.log('My name is ' + this.name + '. I am ' + this.age + 'years old.');  
   }
}
person.introduce;
module.exports = Person
