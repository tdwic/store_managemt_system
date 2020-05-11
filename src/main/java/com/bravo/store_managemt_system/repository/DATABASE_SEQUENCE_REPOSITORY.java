package com.bravo.store_managemt_system.repository;

import com.bravo.store_managemt_system.model.DATABASE_SEQUENCE;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DATABASE_SEQUENCE_REPOSITORY extends MongoRepository<DATABASE_SEQUENCE,String> {
    public DATABASE_SEQUENCE findByTableName();

}
