let name = {
  fname: "Ruzbihan",
  lname: "Zaleek",
};

let name2 = {
  fname: "Elon",
  lname: "Musk",
};

let printFullName = function (hometown, country) {
  console.log(
    this.fname + " " + this.lname + " from " + hometown + ", " + country
  );
};

// function borrowing
/********************************CALL******************************************/
// call("this to point out the object", "params")
printFullName.call(name, "Wattala", "Sri Lanka"); // prints Ruzbihan Zaleek
printFullName.call(name2, "New York", "USA"); // Prints Elon Musk

/********************************APPLY******************************************/
// only different between call and apply method is the way we pass the arguments
// call -> params as comma separated
// apply -> params as an array
printFullName.apply(name2, ["New York", "USA"]);

/********************************BIND******************************************/
//bind method binds the whatever we provide to the object and keeps a copy of
//fully bind object
let printMyName = printFullName.bind(name2, "New York", "USA");
console.log(printMyName);
printMyName();
