package com.bravo.store_managemt_system.controler;

import com.bravo.store_managemt_system.model.Category;
import com.bravo.store_managemt_system.model.Product;
import com.bravo.store_managemt_system.model.WishList;
import com.bravo.store_managemt_system.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://e-shopping-center.herokuapp.com")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    //Add new Category
    @RequestMapping(value = "/category",method = RequestMethod.POST)
    public Category addNewCategory(@RequestBody Category category){
        return categoryService.insertNewCategoryService(category);
    }

    //Find All Categories
    @RequestMapping(value = "/category" , method = RequestMethod.GET)
    public Iterable<Category> displayCategoryList () {
        return categoryService.listCat();
    }

    //Find By ID method
    @RequestMapping(value = "/category/{id}" , method = RequestMethod.GET)
    public Optional<Category> findOneCategory(@PathVariable String id){
        return categoryService.findCategoryDetails(id);
    }

    //Update method.
    @RequestMapping(value = "/category/{id}" , method = RequestMethod.PUT)
    public Category updateCategory(@PathVariable String id, @RequestBody Category category){
        Optional<Category> optCat = categoryService.findCategoryDetails(id);
        Category c = optCat.get();
        return categoryService.updateCategoryItem(category, c);
    }

    //Delete a Category
    @RequestMapping(value = "/category/{id}", method = RequestMethod.DELETE)
    public void deleteCategory(@PathVariable String id){
        categoryService.deleteCategoryDetails(id);
    }
}
