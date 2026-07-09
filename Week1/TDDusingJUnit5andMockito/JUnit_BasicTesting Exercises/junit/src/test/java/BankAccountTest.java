import org.junit.Before;
import org.junit.After;
import org.junit.Test;
import static org.junit.Assert.*;

public class BankAccountTest {
    
    private BankAccount account;

    @Before
    public void setUp() {
  
        System.out.println("Setting up: Creating a fresh bank account with $100.");
        account = new BankAccount(100.0);
    }

    @After
    public void tearDown() {
       
        System.out.println("Tearing down: Cleaning up after the test.\n");
        account = null; 
    }

    @Test
    public void testDepositUsingAAA() {
        double depositAmount = 50.0;
        double expectedBalance = 150.0;

        account.deposit(depositAmount);

        assertEquals(expectedBalance, account.getBalance(), 0.001);
    }

    @Test
    public void testWithdrawUsingAAA() {
        double withdrawAmount = 20.0;
        double expectedBalance = 80.0;

        account.withdraw(withdrawAmount);

        assertEquals(expectedBalance, account.getBalance(), 0.001);
    }
}