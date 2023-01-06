package com.ava.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ava.dao.CustomerRepository;
import com.ava.dao.LibraryRepository;
import com.ava.model.Customer;
import com.ava.model.Library;

@Service
public class CustomerServiceImplementation implements CustomerService {

	
	@Autowired
	CustomerRepository customerRepo;
	
	@Autowired
	LibraryRepository repo;
	
	@Override
	public List<Customer> getAllCustomers() {
		return customerRepo.findAll();
	}

	@Override
	public Customer insertCustomer(Customer customer,int bookId) {
		Library book = repo.findById(bookId).get();
		book.setStatus("Borrowed");
		repo.save(book);
		return customerRepo.save(customer);
	}
	
	@Override
	public Customer insertBuyer(Customer customer,int bookId) {
		Library book = repo.findById(bookId).get();
		book.setStatus("Sold");
		repo.save(book);
		return customerRepo.save(customer);
	}	
}