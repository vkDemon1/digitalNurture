import org.junit.Test;
import static org.junit.Assert.*; // Imports all the assert methods

public class AssertionsTest { 
    
    @Test 
    public void testAssertions() { 
        assertEquals(5, 2 + 3); 
 
        assertTrue(5 > 3); 
 
        assertFalse(5 < 3); 
 
        assertNull(null); 
 
        assertNotNull(new Object()); 
    } 
}