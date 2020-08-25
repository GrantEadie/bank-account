// Account Business Logic

function Account(name, balance) {
  this.name = name;
  this.balance = balance;
}

Account.prototype.withdraw = function(amount) {
  return this.balance -= amount;
}

Account.prototype.deposit = function(amount) {
  return this.balance += amount;
}


let acct = new Account("joseph karnafel", 500);
console.log(acct.deposit(142));

// USER INTERFACE LOGIC -------------------

function displayBalance(account) {
  $("#balance-amount").text("$" + ((account.balance) / 100));
}

$(document).ready(function() {
  $("form#new-acct").submit(function(event) {
    event.preventDefault();
    let name = $("input#name").val();
    let initialDeposit = parseInt($("input#initial-deposit").val() * 100);
    let account = new Account(name, initialDeposit);
    displayBalance(account);
    $("form#deposit-withdraw").submit(function(event) {
      event.preventDefault();
      let depositAmount = parseInt(($("input#deposit-amount").val()) * 100);
      let withdrawAmount = parseInt(($("input#withdrawal-amount").val()) * 100);
      if (depositAmount && !withdrawAmount) {
        $("#balance-amount").text("$" + (account.deposit(depositAmount) / 100));
      } else if (!depositAmount && withdrawAmount) {
        $("#balance-amount").text("$" + (account.withdraw(withdrawAmount) / 100));
      }
    }) 
  })
})