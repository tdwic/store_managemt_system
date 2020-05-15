package com.bravo.store_managemt_system.service;
import com.bravo.store_managemt_system.model.ShoppingCart;

import com.bravo.store_managemt_system.repository.ShoppingCartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class ShoppingCartService {
    @Autowired
    public ShoppingCartRepository shoppingCartRepository ;


    public ShoppingCart addNewItemService(ShoppingCart shoppingCart){
//        SequenceGeneratorService sq = new SequenceGeneratorService();
//        shoppingCart.setCartId(sq.generateSequence(shoppingCart.SEQUANCE_NAME));

        return shoppingCartRepository.save(shoppingCart);
    }
    public ArrayList<ShoppingCart> getShoppingCart(){
        return (ArrayList<ShoppingCart>) shoppingCartRepository.findAll();
    }

    public void clearCart(){
         shoppingCartRepository.deleteAll();
    }
    public void clearCartItem(String id){
        shoppingCartRepository.deleteById(id);
    }
}
