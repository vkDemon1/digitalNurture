package com.example;
import static org.mockito.Mockito.*; 
import static org.junit.Assert.*; // Needed for assertEquals
import org.junit.Test; // Changed to match your JUnit 4 setup
import org.mockito.Mockito; 

public class MyServiceTest { 

    @Test 
    public void testExternalApi() { 
        // 1. Create a "fake" version of the ExternalApi
        ExternalApi mockApi = Mockito.mock(ExternalApi.class); 
        
        when(mockApi.getData()).thenReturn("Mock Data"); 

        MyService service = new MyService(mockApi); 
        
        String result = service.fetchData(); 
        assertEquals("Mock Data", result); 
    } 

    @Test 
    public void testVerifyInteraction() { 
        // 1. Create the fake API and the service
        ExternalApi mockApi = Mockito.mock(ExternalApi.class); 
        MyService service = new MyService(mockApi); 
        
        service.fetchData(); 
        
        verify(mockApi).getData(); 
    } 
}