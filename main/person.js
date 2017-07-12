// Write your code here
function Person(name，age){
   this.name = "Tom";//姓名属性
   this.age = 21;//年龄属性
   this.Introduce: function (){console.log('My name is Tom. I am 21 years old.')}
}
var p = new Person();
Person.Introduce();  
module.exports = Person；
