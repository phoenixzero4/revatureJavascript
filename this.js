


var y = this;

function myFunction() {
    return this;
}

//var x = this;

// refers to the Global object [object window]


let people = function (name, age) {
    this.name = name;
    this.age = age;

    this.displayInfo = function () {
      //  document.write(this.name + " is " + this.age + " years old");
        console.log("Hello , " + person1.fullName.call(person2));
    }
}


var person1 = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

var person2 = {
    firstName: "John",
    lastName: "Wilson",
}

//document.write("Hello , " + person1.fullName.call(person2));
console.log("Hello , " + person1.fullName.call(person2));

