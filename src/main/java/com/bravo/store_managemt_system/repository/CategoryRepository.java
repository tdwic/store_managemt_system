package com.bravo.store_managemt_system.repository;

import com.bravo.store_managemt_system.model.Category;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends MongoRepository<Category, String>{
}
