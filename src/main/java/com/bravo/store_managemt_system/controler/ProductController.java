package com.bravo.store_managemt_system.controler;

import com.bravo.store_managemt_system.model.Product;
import com.bravo.store_managemt_system.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {

   @Autowired
   private ProductService productService;

   @RequestMapping(value = "/product", method = RequestMethod.POST)
   public Product addNewProduct(@RequestBody Product product){

      return productService.addNewProductService(product);

   }

   @RequestMapping(value = "/product", method = RequestMethod.PUT)
   public Product updateProduct(@RequestBody Product product){

      return productService.updateProduct(product);

   }

   @RequestMapping(value = "/product/{productId}", method = RequestMethod.DELETE)
   public void removeProduct(@PathVariable String productId){

      productService.removeProduct(productId);




   }

   @RequestMapping(value = "/product", method = RequestMethod.GET)
   public ArrayList<Product> showData(){

      return productService.getProduct() ;

   }

   @RequestMapping(value = "/productByCategoryId/{id}", method = RequestMethod.GET)
   public ArrayList<Product> showData(@PathVariable String id){

      return (ArrayList<Product>) productService.getProductListByCategoryId(id);

   }

}
