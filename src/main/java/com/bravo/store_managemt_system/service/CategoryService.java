package com.bravo.store_managemt_system.service;

import com.bravo.store_managemt_system.model.Category;
import com.bravo.store_managemt_system.model.WishList;
import com.bravo.store_managemt_system.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    public DATABASE_SEQUENCE_SERVICE dbSeqService;


    public Category insertNewCategoryService(Category category) {
        //dbSeqService.setTableCurrentNumber("table_cat_sequence");
        return categoryRepository.save(category);
    }

    public ArrayList<Category> listAllCategory(){
        return (ArrayList<Category>) categoryRepository.findAll();

    }

    public Iterable<Category> listCat(){
        return (Iterable<Category>) categoryRepository.findAll();
    }

    //Update method in Service Class
    public Category updateCategoryItem(Category category){
        return categoryRepository.save(category);
    }
    public void deleteCategoryDetails(String id){
        categoryRepository.deleteById(id);
    }
}
