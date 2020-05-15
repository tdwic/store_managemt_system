package com.bravo.store_managemt_system.service;
import com.bravo.store_managemt_system.model.WishList;
import com.bravo.store_managemt_system.repository.WishListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service


public class WishListService {

    @Autowired
    public WishListRepository wishListRepository ;

    public WishList addNewItemService(WishList wishList){
        return wishListRepository.save(wishList);
    }

    public ArrayList<WishList> getWishLists(){
        return (ArrayList<WishList>) wishListRepository.findAll();
    }

    public void clearWishList(){
        wishListRepository.deleteAll();
    }

    public void clearWishListById(String id){
        wishListRepository.deleteById(id);
    }

}
