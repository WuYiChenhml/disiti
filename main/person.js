// Write your code here
Person = function () {
	this.name = "Tom";    //通过this关键字设置默认成员
    this.age = 31;
    this.Introduce = function () {
         console.log("My name is " + this.name + ".I'm " + this.age + " years old.");
   };
};

module.exports = var Person；
