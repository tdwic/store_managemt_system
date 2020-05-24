package com.bravo.store_managemt_system.controler;
import com.bravo.store_managemt_system.model.Product;
import com.bravo.store_managemt_system.model.ShoppingCart;
import com.bravo.store_managemt_system.service.ProductService;
import com.bravo.store_managemt_system.service.ShoppingCartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@CrossOrigin(origins = "e-shopping-center.herokuapp.com")
public class ShoppingCartController {
    @Autowired
    private ShoppingCartService shoppingCartService;

    @RequestMapping(value = "/shoppingcart", method = RequestMethod.POST)
    public ShoppingCart addNewItem(@RequestBody ShoppingCart shoppingCart){

        return shoppingCartService.addNewItemService(shoppingCart);

    }

    @RequestMapping(value = "/shoppingcart", method = RequestMethod.GET)
    public ArrayList<ShoppingCart> showData(){

        return shoppingCartService.getShoppingCart() ;

    }

    @RequestMapping(value = "/clearCart", method = RequestMethod.DELETE)
    public void clearCart(){

        shoppingCartService.clearCart();

    }


    @RequestMapping(value = "/clearCartByItem/{id}", method = RequestMethod.DELETE)
    public void clearCartByItem(@PathVariable String id){
        shoppingCartService.clearCartItem(id);
    }

}
