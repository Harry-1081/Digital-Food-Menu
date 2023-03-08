package com.project.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class ProductModel{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int productId;
	private String productName;
	private String productUrl;
	private float productRate;
	private String productShop;
	private String availability;
	
	public String isAvailability() {
		return availability;
	}
	public void setAvailability(String availability) {
		this.availability = availability;
	}
	public int getProductId() {
		return productId;
	}
	public void setProductId(int productId) {
		this.productId = productId;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public String getProductUrl() {
		return productUrl;
	}
	public void setProductUrl(String productUrl) {
		this.productUrl = productUrl;
	}
	public float getProductRate() {
		return productRate;
	}
	public void setProductRate(float productRate) {
		this.productRate = productRate;
	}
	public String getProductShop() {
		return productShop;
	}
	public void setProductCategory(String productShop) {
		this.productShop = productShop;
	}
	
	@Override
	public String toString() {
		return "ProductModel [ProductId=" + productId + ", productName=" + productName + ", productUrl=" + productUrl
				+ ", productRate=" + productRate + ", productShop=" + productShop + "]";
	}
	
}