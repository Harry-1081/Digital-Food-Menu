package com.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.model.ProductModel;
import com.project.service.ProductService;

@RestController
@RequestMapping(value="/product")
@CrossOrigin("*")
public class ProductController{
	
	@Autowired
	private ProductService productService;
	
	@GetMapping(value="/getall")
	private ResponseEntity<Object> getProducts() 
	{
		List<ProductModel> productList = productService.getProducts();
		return new ResponseEntity<>(productList, HttpStatus.OK);
	}
}