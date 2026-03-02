print("");
print("CASE 4");

try {
  int result = 12 ~/ 3;
  print("The result is $result");
} catch (e) {
  print("The exception thrown is $e");
} finally {
  print("This is FINALLY Clause and is always executed.");
}

print("");
print("CASE 5");

try {
  depositMoney(-200);
} on DepositException catch (e) {
  print(e.errorMessage());
} finally {
  // Code
}
}

class DepositException implements Exception {
  String errorMessage() {
    return "You cannot enter amount less than 0";
  }
}

void depositMoney(int amount) {
  if (amount < 0) {
    throw DepositException();   // `new` not needed
  }
}
// Output: