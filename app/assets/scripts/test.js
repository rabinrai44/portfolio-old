var $ = require('jquery');
//var Person = require('./modules/Person');
import Person from './modules/Person'; // ES6 method

class Adult extends Person {
  payTaxes() {
    console.log(this.name + " now owes $0 in taxes.");
  }
}

alert("ABC 321");

var john = new Person("John Doe", "yellow");
john.greet();

var jane = new Adult("Jane Smith", "green");
jane.greet();
jane.payTaxes();
