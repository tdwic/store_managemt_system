package com.bravo.store_managemt_system.controler;

import com.bravo.store_managemt_system.model.Category;
import com.bravo.store_managemt_system.model.WishList;
import com.bravo.store_managemt_system.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    //Add new Category
    @RequestMapping(value = "/addCategory",method = RequestMethod.POST)
    public Category addNewCategory(@RequestBody Category category){
        return categoryService.insertNewCategoryService(category);
    }

    @RequestMapping(value = "/listCategoryDet" , method = RequestMethod.GET)
    public Iterable<Category> displayCategoryList () {
        return categoryService.listCat();
    }

    //List all Category. Working one as well.
//    @RequestMapping(value = "/listCategory", method = RequestMethod.GET)
//    public ArrayList<Category> displayCategoryList(){
//        return categoryService.listAllCategory();
//    }

    //Update method.
    @RequestMapping(value = "/category/{id}" , method = RequestMethod.PUT)
    public Category updateCategory(@PathVariable String id, @RequestBody Category cat){
        return categoryService.updateCategoryItem(cat);
    }




    //Delete a Category
    @RequestMapping(value = "/category/{id}", method = RequestMethod.DELETE)
    public void deleteCategory(@PathVariable String id){
        categoryService.deleteCategoryDetails(id);
    }
}
