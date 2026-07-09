public class Logger {
    private static Logger instance;

    private Logger() {
        System.out.println("Logger instance initialized.");
    }

    public static synchronized Logger getInstance() {
        // If the instance doesn't exist yet, create it
        if (instance == null) {
            instance = new Logger();
        }
        return instance;
    }
    
    public void logMessage(String message) {
        System.out.println("[LOG]: " + message);
    }
}