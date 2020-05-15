package com.bravo.store_managemt_system.service;

import com.bravo.store_managemt_system.model.Product;
import com.bravo.store_managemt_system.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class ProductService {

    @Autowired
    public ProductRepository productRepository;


    public Product addNewProductService(Product product){
        return productRepository.save(product);
    }

    public Product updateProduct(Product product){
        return productRepository.save(product);
    }

    public void removeProduct(String productId){
        productRepository.deleteById(productId);
    }

    public ArrayList<Product> getProduct(){
        return (ArrayList<Product>) productRepository.findAll();
    }
}
