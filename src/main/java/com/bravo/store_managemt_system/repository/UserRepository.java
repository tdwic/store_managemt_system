package com.bravo.store_managemt_system.repository;

import com.bravo.store_managemt_system.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User,String> {
}
