package com.cognizant.orm_learn;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import com.cognizant.orm_learn.model.Country;
import com.cognizant.orm_learn.service.CountryService;

@SpringBootApplication
public class OrmLearnApplication {

    private static final Logger LOGGER = LoggerFactory.getLogger(OrmLearnApplication.class);
    
    // 1. Include a static reference to CountryService
    private static CountryService countryService;

    public static void main(String[] args) {
        // 2. Modify run() to capture the ApplicationContext
        ApplicationContext context = SpringApplication.run(OrmLearnApplication.class, args);
        
        // 3. Set the CountryService reference by asking Spring for the "bean"
        countryService = context.getBean(CountryService.class);

        LOGGER.info("Inside main - Application Started Successfully!");
        
        // 4. Execute the test method
        testGetAllCountries();
    }

    // 5. Define the test method exactly as requested in the instructions
    private static void testGetAllCountries() {
        LOGGER.info("Start");
        
        // Tell the service to fetch all countries from the database
        List<Country> countries = countryService.getAllCountries();
        
        // Print the list to the console using the SLF4J logger
        LOGGER.debug("countries={}", countries);
        
        LOGGER.info("End");
    }
}