package com.bravo.store_managemt_system.service;

import com.bravo.store_managemt_system.model.User;
import com.bravo.store_managemt_system.repository.CategoryRepository;
import com.bravo.store_managemt_system.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User addNewUser(User user){
        return userRepository.save(user);
    }

    public ArrayList<User> listAllUsers(){
        return (ArrayList<User>) userRepository.findAll();
    }

    public void deleteUser(String id){
        userRepository.deleteById(id);
    }
}
