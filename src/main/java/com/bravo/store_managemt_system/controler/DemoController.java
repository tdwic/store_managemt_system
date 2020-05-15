//package com.bravo.store_managemt_system.controler;
//
//import com.bravo.store_managemt_system.DTO.DemoUser;
//import com.bravo.store_managemt_system.repository.demo;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//import java.awt.*;
//
//@RestController
//@CrossOrigin(origins = "http://localhost:3000")
//public class DemoController {
//
//    @Autowired
//    private demo demorepository;
//    //Accept only int value and return them after process
//    @RequestMapping(value = "/demo/{j}", method = RequestMethod.GET)
//    public int showData(@PathVariable int j){
//        System.out.println("this is the value of " + j);
//        j=j+23;
//
//        return j;
//    }
//
//    @RequestMapping(value = "/user", method = RequestMethod.POST)
//    public DemoUser userRegistration(@RequestBody DemoUser demoUser){
//        System.out.println("Name " + demoUser.getName());
//        System.out.println("Age "+demoUser.getAge());
//        System.out.println("Role " + demoUser.getRole());
//
//        return demorepository.save(demoUser);
//
//    }
//
//    @RequestMapping(value = "/user", method = RequestMethod.PUT)
//    public DemoUser userUpdate(@RequestBody DemoUser demoUser){
//        System.out.println("Name " + demoUser.getName());
//        System.out.println("Age "+demoUser.getAge());
//        System.out.println("Role " + demoUser.getRole());
//
//        return demoUser;
//
//    }
//
//
//}
