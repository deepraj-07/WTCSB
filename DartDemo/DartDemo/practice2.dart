//Fibonacci number
void main() {
  int n = 10;
  int a = 0, b = 1;

  print("Fibonacci Series:");

  for (int i = 0; i < n; i++) {
    print(a);
    int next = a + b;
    a = b;
    b = next;
  }
}

//Palindrome number check

void main() {
  int num = 121;
  int original = num;
  int reversed = 0;

  while (num > 0) {
    int digit = num % 10;
    reversed = reversed * 10 + digit;
    num = num ~/ 10;
  }

  if (original == reversed) {
    print("$original is a Palindrome");
  } else {
    print("$original is not a Palindrome");
  }
}