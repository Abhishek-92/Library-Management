package com.ava.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ava.model.Library;
import com.ava.service.LibraryService;

@CrossOrigin(origins = "http://localhost:3001")
@RestController
@RequestMapping("/api")
public class WebController {
	
	@Autowired
	LibraryService bookService;
	
	
	@GetMapping(path="/books/{id}")
	public Library getBookById(@PathVariable int id) {
		System.out.println("In Controller");
		 return bookService.findById(id);
	}
	
	@GetMapping(path="/books")
	public List<Library> getAllBooks(){
		return bookService.getAllLibrarys();
		
	}
	
	@PostMapping(path="/books")
	public Library insertLibrary (@RequestBody Library book) {
		return bookService.insertLibrary(book);
	}
	
    @DeleteMapping("/books/{id}")
   public void removeLibraryById(@PathVariable int id) { 
    	bookService.removeLibraryById(id);
   }

    @PutMapping("/books/{id}")
    public Library updateBook (@RequestBody Library book,@PathVariable int id) {
    	return bookService.updateLibraryById(book,id);
    }
}