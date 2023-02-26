package com.project.serviceInt;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.model.ProductModel;
import com.project.repo.ProductRepo;
import com.project.service.ProductService;

@Service
public class ProductServiceInt implements ProductService{
	
	@Autowired
	private ProductRepo productRepo;

	@Override
	public List<ProductModel> getProducts() {
		return (List<ProductModel>)productRepo.findAll();
	}
	
	
}