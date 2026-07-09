public class Forecasting {

    public static double calculateFutureValue(double currentAmount, double growthRate, int years) {
        // Base Case: If 0 years left, the value doesn't grow anymore
        if (years == 0) {
            return currentAmount;
        }
        
        double previousYearValue = calculateFutureValue(currentAmount, growthRate, years - 1);
        return previousYearValue * (1 + growthRate);
    }

    public static void main(String[] args) {
        double initialInvestment = 5000.0;
        double annualGrowthRate = 0.07; // 7% growth
        int forecastYears = 5;

        double finalValue = calculateFutureValue(initialInvestment, annualGrowthRate, forecastYears);
        System.out.printf("Predicted value after %d years: $%.2f%n", forecastYears, finalValue);
    }
}