// exception_handling.dart

class InsufficientBalanceException implements Exception {
  String errorMessage() {
    return "Insufficient Balance!";
  }
}

class BankAccount {
  double balance;

  BankAccount(this.balance);

  void withdraw(double amount) {
    if (amount > balance) {
      throw InsufficientBalanceException();
    } else {
      balance -= amount;
      print("Withdrawal successful. Remaining balance: $balance");
    }
  }
}

void main() {
  BankAccount account = BankAccount(1000);

  try {
    account.withdraw(1500);
  } catch (e) {
    print("Exception caught: $e");
  } finally {
    print("Transaction completed.");
  }
}