const assert = require('assert');

// ... Ton code ici ...

class BankCustomer {
  constructor (nameC, codeS){
    let name = nameC
    let code = codeS
    this.getName = () => name
    this.verifyPinInput= (test)=>{
      if (test===code){
        return true
      }else {
        return false
      }
    }
  }

}




// Tests
const customer = new BankCustomer('John Doe', '3579');
assert.equal(typeof customer.getName, 'function');
assert.equal(typeof customer.verifyPinInput, 'function');
assert.equal(customer.getName(), 'John Doe');
assert.ok(customer.verifyPinInput('3579'));

console.log(customer.getName())
console.log(customer.verifyPinInput('3579'))
