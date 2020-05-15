package com.bravo.store_managemt_system.controler;

import com.bravo.store_managemt_system.model.User;
import com.bravo.store_managemt_system.service.CategoryService;
import com.bravo.store_managemt_system.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/user",method = RequestMethod.GET)
    public ArrayList<User> displayUsers(){
        return userService.listAllUsers();
    }

    @RequestMapping(value = "/user" ,method = RequestMethod.POST)
    public User addNewUserDetails(@RequestBody User user){
        return userService.addNewUser(user);
    }

    @RequestMapping(value = "/user/{id}",method = RequestMethod.DELETE)
    public void deleteUser(@PathVariable String id){
        userService.deleteUser(id);

    }

}
