package com.bravo.store_managemt_system.controler;

import com.bravo.store_managemt_system.model.Category;
import com.bravo.store_managemt_system.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    //List all Category
    @RequestMapping(value = "/category", method = RequestMethod.GET)
    public ArrayList<Category> displayCategoryList(){
        return categoryService.listAllCategory();
    }

    //Add new Category
    @RequestMapping(value = "/category",method = RequestMethod.POST)
    public Category addNewCategory(@RequestBody Category category){
        return categoryService.insertNewCategoryService(category);
    }

    //Delete a Category
    @RequestMapping(value = "/category/{categoryId}", method = RequestMethod.DELETE)
    public void deleteCategory(@PathVariable String categoryId){
        categoryService.deleteCategoryDetails(categoryId);
    }
}
