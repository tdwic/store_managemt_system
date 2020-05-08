package com.bravo.store_managemt_system.repository;
import com.bravo.store_managemt_system.DTO.DemoUser;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface demo extends MongoRepository<DemoUser,String> {}
