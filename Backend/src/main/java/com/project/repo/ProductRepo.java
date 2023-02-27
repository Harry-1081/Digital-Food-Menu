package com.project.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.model.ProductModel;

public interface ProductRepo extends JpaRepository<ProductModel, Integer>
{

	boolean existsByProductNameIgnoreCase(String productName);
	
}