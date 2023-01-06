package com.ava.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ava.dao.LibraryRepository;
import com.ava.model.Library;

@Service
public class LibraryServiceImplementation implements LibraryService {
	
	@Autowired
	LibraryRepository repo;
	
	@Override
	public Library findById(int id) {
		return repo.findById(id).get();
	}
	
	@Override
	public Library insertLibrary(Library book) {
		// TODO Auto-generated method stub
		return repo.save(book);
	}
	
	@Override
	public List<Library> getAllLibrarys() {
		// TODO Auto-generated method stub
		
		System.out.println("in service");
		return repo.findAll();
	}
	
	@Override
	public Library updateLibraryById(Library book,int id) {
		Library toUpdate = repo.findById(id).get();
		toUpdate.setTitle(book.getTitle());
		toUpdate.setAuthor(book.getAuthor());
		toUpdate.setPrice(book.getPrice());		
		return repo.save(toUpdate);
	}
	
	@Override
	public void removeLibraryById(int id) {
		repo.deleteById(id);
	}
}