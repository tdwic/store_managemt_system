package com.bravo.store_managemt_system.controler;
import com.bravo.store_managemt_system.model.WishList;
import com.bravo.store_managemt_system.service.WishListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@CrossOrigin(origins = "http://e-shopping-center.herokuapp.com")
public class WishListController {
    @Autowired
    private WishListService wishListService;

    @RequestMapping(value = "/wishListAdd", method = RequestMethod.POST)
    public WishList wishListAdd(@RequestBody WishList wishList){
        return wishListService.addNewItemService(wishList);
    }

    @RequestMapping(value = "/getAllWishList", method = RequestMethod.GET)
    public ArrayList<WishList> getAllWishList(){
        return wishListService.getWishLists() ;
    }

    @RequestMapping(value = "/clearWishList", method = RequestMethod.DELETE)
    public void clearCart(){

        wishListService.clearWishList();

    }


    @RequestMapping(value = "/clearWishListItemById/{id}", method = RequestMethod.DELETE)
    public void clearCartByItem(@PathVariable String id){
        wishListService.clearWishListById(id);
    }

}
