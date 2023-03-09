package com.project.repo;

import org.springframework.data.repository.CrudRepository;
import java.util.List;
import com.project.model.ProductModel;

public interface ProductRepo extends CrudRepository<ProductModel, Integer>
{

	boolean existsByProductNameIgnoreCase(String productName);

    List<ProductModel> findByProductNameContainingIgnoreCase(String productName);
	
}