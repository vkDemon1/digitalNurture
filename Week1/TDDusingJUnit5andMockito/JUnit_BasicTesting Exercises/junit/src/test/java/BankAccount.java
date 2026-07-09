public class BankAccount {
    private double balance;

    // Constructor
    public BankAccount(double initialBalance) {
        this.balance = initialBalance;
    }

    // Deposit method
    public void deposit(double amount) {
        this.balance += amount;
    }

    // Withdraw method
    public void withdraw(double amount) {
        this.balance -= amount;
    }

    // Get Balance method
    public double getBalance() {
        return this.balance;
    }
}