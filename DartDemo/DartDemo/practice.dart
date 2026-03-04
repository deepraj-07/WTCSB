//factorial programm 
void main() {
  int num = 5;
  int fact = 1;

  for (int i = 1; i <= num; i++) {
    fact = fact * i;
  }

  print("Factorial of $num is $fact");
}

//Prime nummber check 
void main() {
  int num = 17;
  bool isPrime = true;

  if (num <= 1) {
    isPrime = false;
  }

  for (int i = 2; i <= num ~/ 2; i++) {
    if (num % i == 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    print("$num is a Prime Number");
  } else {
    print("$num is not a Prime Number");
  }
}

//List Sorting
void main() {
  List<int> numbers = [5, 2, 8, 1, 9];

  numbers.sort();

  print("Sorted List: $numbers");
}