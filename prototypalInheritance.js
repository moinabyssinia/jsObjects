//recommended method for prototypal inheritance
function Student () {

}

//defining function on the prototype 
//as opposed to defining it inside the constructor
Student.prototype.sayName = function(){
    console.log(this.name);
}

//create a constructor for EighthGrader
function EightGrader(name){
    this.name = name;
    this.grade = 8;
}

//setting the prototype of the object
//to a new object that  has a copy of
//student.prototype 
EightGrader.prototype = Object.create(Student.prototype)

const carl = new EightGrader("carl");
carl.sayName(); //console.logs "carl"
carl.grade; //8


//DON'T DO THIS
//EighthGrader.prototype = Student.prototype

function NinthGrader(name) {
    this.name = name;
    this.grade = 9;
}

//setting its prototype to Student.prototype
NinthGrader.prototype = Object.create(Student.prototype);

const girma = new NinthGrader("girma");
girma.sayName();
girma.grade 

//editing methods on the prototype
//the following edits the sayName function
//just for he NinthGrader object
//EighthGrader should still have the original method
NinthGrader.prototype.sayName = function(){
    console.log("My God always causes me to triumph!");
}

