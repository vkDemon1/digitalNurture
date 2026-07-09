import java.util.Arrays;

public class SearchSystem {

    // Linear
    public static Product linearSearch(Product[] products, int targetId) {
        for (Product p : products) {
            if (p.productId == targetId) {
                return p;
            }
        }
        return null;
    }

    // Binary
    public static Product binarySearch(Product[] products, int targetId) {
        int left = 0;
        int right = products.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (products[mid].productId == targetId) {
                return products[mid];
            } else if (products[mid].productId < targetId) {
                left = mid + 1; // Look in the right half
            } else {
                right = mid - 1; // Look in the left half
            }
        }
        return null;
    }

    public static void main(String[] args) {
        Product[] inventory = {
            new Product(302, "Headphones", "Electronics"),
            new Product(105, "Coffee Maker", "Home"),
            new Product(201, "Running Shoes", "Apparel")
        };

        System.out.println("--- Linear Search ---");
        System.out.println(linearSearch(inventory, 105));

        System.out.println("\n--- Binary Search ---");
        // We MUST sort the array before using Binary Search
        Arrays.sort(inventory); 
        System.out.println(binarySearch(inventory, 302));
    }
}