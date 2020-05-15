package com.bravo.store_managemt_system.repository;
import com.bravo.store_managemt_system.model.WishList;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface WishListRepository extends MongoRepository<WishList,String> {

}
