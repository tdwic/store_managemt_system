package com.bravo.store_managemt_system.service;

import com.bravo.store_managemt_system.model.User;
import com.bravo.store_managemt_system.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;


import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;


@Service
public class UserService implements UserDetailsService{

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private EmailService emailService;

    public User addNewUser(User user){
        User u = userRepository.save(user);
        if(user.getRole() == 2){
            sendMail(user);
        }
        return u;
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

    public UserDetailsService loadUserByUsername(String email)  throws UsernameNotFoundException{
        User user = userRepository.findByEmail(email);

        if(user == null) {
            throw new UsernameNotFoundException("User not found");
        }

        return new User(user.getId(),user.getEmail(), user.getPassword(), user.getFirstname(), user.getLastname(), user.getRole());
    }

    public void sendMail(User user){
        try {
            emailService.sendEmail(user);
        } catch (MailException mailException) {
            System.out.println(mailException);
        }
    }



}
