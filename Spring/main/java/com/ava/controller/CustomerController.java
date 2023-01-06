package com.ava.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ava.model.Customer;
import com.ava.service.CustomerService;
import com.ava.service.LibraryService;

@CrossOrigin(origins = "http://localhost:3001")
@RestController
@RequestMapping("/api")
public class CustomerController {
	
	@Autowired
	CustomerService customerService;
	
	@Autowired
	LibraryService bookService;
	
	@GetMapping(path="/customers")
	public List<Customer> getAllCustomers(){
		return customerService.getAllCustomers();
	}
	
	@PostMapping(path="/customers/borrow/{bookId}")
	public Customer insertCustomer (@RequestBody Customer customer,@PathVariable int bookId ) {
		
		Customer c = customerService.insertCustomer(customer,bookId);
		
		return c;
	}
	
	@PostMapping(path="/customers/buy/{bookId}")
	public Customer insertBuyer (@RequestBody Customer customer,@PathVariable int bookId ) {
		
		Customer d = customerService.insertBuyer(customer,bookId);
		
		return d;
	}
}