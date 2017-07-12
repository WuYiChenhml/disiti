// Write your code here
function Person() {
   this.name = "Tom";    //通过this关键字设置默认成员
   this.age = 21;
   this.Introduce = function () {
      console.log("My name is Tom. I am 21 years old.");
  }
}
var person = new Person();
person.Introduce();
module.exports = Person；
