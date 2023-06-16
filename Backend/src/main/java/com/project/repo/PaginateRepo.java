package com.project.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.model.ProductModel;

public interface PaginateRepo extends JpaRepository<ProductModel,Integer> {
    
}
