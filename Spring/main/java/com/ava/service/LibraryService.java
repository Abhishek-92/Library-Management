package com.ava.service;

import java.util.List;

import com.ava.model.Library;

public interface LibraryService {

	Library insertLibrary(Library book);

	Library findById(int id);

	List<Library> getAllLibrarys();

	Library updateLibraryById(Library book, int id);

	void removeLibraryById(int id);

}

