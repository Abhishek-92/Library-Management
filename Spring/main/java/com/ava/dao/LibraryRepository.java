package com.ava.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ava.model.Library;

@Repository
public interface LibraryRepository extends JpaRepository<Library,Integer> {
	

}
