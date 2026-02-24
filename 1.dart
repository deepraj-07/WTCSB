import 'dart:io';

double add(double a, double b) {
  return a + b;
}
double sub(double a, double b) {
  return a - b;
}
double mul(double a, double b) {
  return a * b;
}
double div(double a, double b) {
  if (b == 0) {
    print("Divide by Zero");
    return 0;
  }
  return a / b;
}
void main(List<String> args) {
  print("Enter first number:");
  double num1 = double.parse(stdin.readLineSync()!);
  print("Enter second number:");
  double num2 = double.parse(stdin.readLineSync()!);
  print("Addition: ${add(num1, num2)}");
  print("Subtraction: ${sub(num1, num2)}");
  print("Multiplication: ${mul(num1, num2)}");
  print("Division: ${div(num1, num2)}");
} 