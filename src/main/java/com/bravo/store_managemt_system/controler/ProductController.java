package com.bravo.store_managemt_system.controler;

import com.bravo.store_managemt_system.model.Product;
import com.bravo.store_managemt_system.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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


}
