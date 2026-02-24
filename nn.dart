import 'dart:io';

void main() {
  // Read input with fallback if user enters nothing
  String name = stdin.readLineSync() ?? "Guest";
  print(name);

  // Null-aware operator (??=)
  String? a;
  a ??= "Guest";
  print(a);

  // Safe length with null-aware access
  String? s = stdin.readLineSync();
  int? len = s?.length;
  print(len);

  print("");
  print("CASE 5");
  try {
    depositMoney(-200);
  } catch (e) {
    print(e);
  } finally {
    print("This will always execute");
  }
}

void depositMoney(int amount) {
  if (amount <= 0) {
    throw Exception("Amount must be greater than 0");
  }
  print("Deposited: $amount");
}
