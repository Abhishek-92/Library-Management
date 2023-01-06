package com.ava.service;

import java.util.List;

import com.ava.model.Customer;

public interface CustomerService {

	List<Customer> getAllCustomers();

	Customer insertCustomer(Customer customer, int bookId);

	Customer insertBuyer(Customer customer, int bookId);

}
