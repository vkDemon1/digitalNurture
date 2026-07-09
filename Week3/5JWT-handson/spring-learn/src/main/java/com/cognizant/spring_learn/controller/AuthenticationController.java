package com.cognizant.spring_learn.controller;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthenticationController {

    private static final Logger LOGGER = LoggerFactory.getLogger(AuthenticationController.class);

    @GetMapping("/authenticate")
    public Map<String, String> authenticate(@RequestHeader("Authorization") String authHeader) {
        LOGGER.info("START: authenticate()");
        
        String base64Credentials = authHeader.substring("Basic".length()).trim();
        
        byte[] credDecoded = java.util.Base64.getDecoder().decode(base64Credentials);
        String credentials = new String(credDecoded, java.nio.charset.StandardCharsets.UTF_8);
        
        final String[] values = credentials.split(":", 2);
        String username = values[0];
        
        LOGGER.debug("Successfully decoded credentials for user: {}", username);

        String token = io.jsonwebtoken.Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new java.util.Date())
                .setExpiration(new java.util.Date(System.currentTimeMillis() + 1000 * 60 * 60 * 10)) // Valid for 10 hours
                .signWith(io.jsonwebtoken.SignatureAlgorithm.HS256, "my-super-secret-key") // The secret signature
                .compact();

        Map<String, String> response = new HashMap<>();
        response.put("token", token);
        
        LOGGER.info("END: authenticate()");
        return response;
    }
}