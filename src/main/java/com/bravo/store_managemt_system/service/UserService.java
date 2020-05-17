package com.bravo.store_managemt_system.service;

import com.bravo.store_managemt_system.model.User;
import com.bravo.store_managemt_system.repository.CategoryRepository;
import com.bravo.store_managemt_system.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

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

    public Optional<User> findUserDetails(String id){
        return (Optional<User>) userRepository.findById(id);
    }

    public User updateUserDetails(User user, User u){
        if(user.getFirstname() != null){
            u.setFirstname(user.getFirstname());
        }
        if(user.getLastname() != null){
            u.setLastname(user.getLastname());
        }
        if(user.getEmail() != null){
            u.setEmail(user.getEmail());
        }
        if(user.getPassword() != null){
            u.setPassword(user.getPassword());
        }

        return userRepository.save(u);
    }

    public void deleteUser(String id){
        userRepository.deleteById(id);
    }
}
