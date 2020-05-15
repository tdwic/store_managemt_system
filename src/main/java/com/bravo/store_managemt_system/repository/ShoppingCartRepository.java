package com.bravo.store_managemt_system.repository;
import com.bravo.store_managemt_system.model.ShoppingCart;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ShoppingCartRepository extends MongoRepository<ShoppingCart,String> {
        }

