package com.bravo.store_managemt_system.repository;

import com.bravo.store_managemt_system.DTO.DemoUser;
import com.bravo.store_managemt_system.model.Product;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends MongoRepository<Product,String> {
}
