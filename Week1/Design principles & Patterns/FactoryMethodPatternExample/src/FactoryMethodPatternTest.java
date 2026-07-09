public class FactoryMethodPatternTest {
    public static void main(String[] args) {
        
        System.out.println("--- Processing a Word Document ---");
        DocumentFactory wordFactory = new WordFactory();
        wordFactory.processDocument();

        System.out.println("\n--- Processing a PDF Document ---");
        DocumentFactory pdfFactory = new PdfFactory();
        pdfFactory.processDocument();

        System.out.println("\n--- Processing an Excel Document ---");
        DocumentFactory excelFactory = new ExcelFactory();
        excelFactory.processDocument();
    }
}