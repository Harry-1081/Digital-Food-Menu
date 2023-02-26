package com.project.service;

import java.util.List;
import com.project.model.ProductModel;

public interface ProductService{

	public abstract List<ProductModel> getProducts();

	public abstract ProductModel createProduct(ProductModel productModel);

	public abstract void updateProduct(ProductModel productModel);

	public abstract void deleteProduct(Integer productId);
	
}