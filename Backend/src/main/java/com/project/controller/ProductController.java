package com.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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

	@GetMapping(value="/getbyid/{productId}")
	private ResponseEntity<Object> getProductbyid(@PathVariable int productId) 
	{
		boolean isProductExistbyid = productService.isProductExistbyid(productId);
		if (isProductExistbyid)
		{
		ProductModel productModel = productService.getProductbyid(productId);
		return new ResponseEntity<>(productModel, HttpStatus.OK);
		}
		else
		{
			return new ResponseEntity<>("ID not found",HttpStatus.OK);
		}
	}
	
	@GetMapping(value="/getbyname/{productName}")
	private ResponseEntity<Object> getProductbyname(@PathVariable String productName) 
	{
		List<ProductModel> productModel = productService.getProductbyname(productName);
		return new ResponseEntity<>(productModel, HttpStatus.OK);
	}
	
	@PostMapping(value="/add")
	public String createProduct(@RequestBody ProductModel productModel)
	{
		boolean isProductExist = productService.isProductExist(productModel.getProductName());
		if(isProductExist)
			return "Product exists already";
		else {
		productModel = productService.createProduct(productModel);
		return "Product added";}
	}
	
	
	@DeleteMapping(value="/delete")
	public ResponseEntity<Object> deleteProduct(@RequestParam int productId)
	{
			productService.deleteProduct(productId);
			return new ResponseEntity<>("R.I.P."
					+ "\nCause of Death : ProductPageModel Deletion", HttpStatus.OK);
	}
	
	
	@PutMapping(value="/edit/{productId}")
	public ResponseEntity<Object> updateProduct(@PathVariable int productId, @RequestBody ProductModel productModel)
	{
			productModel.setProductId(productId);
			productService.updateProduct(productModel);
			return new ResponseEntity<>("ProductPageModel details are updated successsfully !", HttpStatus.OK);
	}
		
	
}