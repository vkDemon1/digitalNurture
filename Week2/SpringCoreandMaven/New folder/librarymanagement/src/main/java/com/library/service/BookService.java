package com.library.service;

import com.library.repository.BookRepository;

public class BookService {
    
    private BookRepository bookRepository;

    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void displayBooks() {
        System.out.println("BookService is asking repository for data...");
        if (bookRepository != null) {
            bookRepository.getBooks();
        } else {
            System.out.println("Repository is not injected!");
        }
    }
}