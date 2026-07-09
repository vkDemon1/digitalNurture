public class SingletonPatternTest {
    public static void main(String[] args) {
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        logger1.logMessage("Application has started.");
        logger2.logMessage("Processing user data...");

        if (logger1 == logger2) {
            System.out.println("\nSUCCESS: Singleton pattern is working! Both variables contain the same instance.");
        } else {
            System.out.println("\nERROR: Singleton pattern failed! Different instances exist.");
        }
    }
}