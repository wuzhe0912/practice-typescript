// static
class Bank {
  private static balance: number = 1000;
  static withdraw(money: number) {
    if (this.balance <= 0) return;
    this.balance -= money;
  }
  static getBalance() {
    return this.balance;
  }
}

function userAWithdraw(money: number) {
  Bank.withdraw(money);
  console.log(Bank.getBalance());
}

userAWithdraw(20);

function userBWithdraw(money: number) {
  Bank.withdraw(money);
  console.log(Bank.getBalance());
}

userBWithdraw(100);
