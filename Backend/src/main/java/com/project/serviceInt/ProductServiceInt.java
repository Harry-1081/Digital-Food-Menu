package com.project.serviceInt;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

import com.project.model.ProductModel;
import com.project.repo.PaginateRepo;
import com.project.repo.ProductRepo;
import com.project.service.ProductService;

@Service
public class ProductServiceInt implements ProductService{
	
	@Autowired
	private ProductRepo productRepo;

	@Autowired
	private PaginateRepo paginateRepo;

	@Override
	public List<ProductModel> getProducts(String sort,int pageno) {
		int count=10;
		if(sort.equals("asc")){
			Pageable page = PageRequest.of(pageno, count, Sort.by("productRate"));
			return paginateRepo.findAll(page).get().toList();
		}
		else if(sort.equals("desc")){
			Pageable page = PageRequest.of(pageno, count, Sort.by(Direction.DESC, "productRate"));
			return paginateRepo.findAll(page).get().toList();
		} 	
		else{
			Pageable page = PageRequest.of(pageno, count);
			return paginateRepo.findAll(page).get().toList();
		}
	}

	@Override
	public ProductModel createProduct(ProductModel productModel) {
		return productRepo.save(productModel);
	}

	@Override
	public void deleteProduct(Integer productId) {
		productRepo.deleteById(productId);
	}

	@Override
	public void updateProduct(ProductModel productModel) {
		productRepo.save(productModel);
	}

	@Override
	public boolean isProductExist(String productName) {
		return productRepo.existsByProductNameIgnoreCase(productName);
	}

	@Override
	public boolean isProductExistbyid(int productId) {
		return productRepo.existsById(productId);
	}

	@Override
	public ProductModel getProductbyid(int productId) {
		Optional<ProductModel> optional = productRepo.findById(productId);
		ProductModel productModel = optional.get();
		return productModel;
	}
	
	@Override
	public List<ProductModel> getProductbyname(String productName) 
	{
		
		return (List<ProductModel>) productRepo.findByProductNameContainingIgnoreCase(productName);
	}
}