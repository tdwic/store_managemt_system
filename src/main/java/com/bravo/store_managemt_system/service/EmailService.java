package com.bravo.store_managemt_system.service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import com.bravo.store_managemt_system.model.User;

@Service
public class EmailService {
    private JavaMailSender javaMailSender ;

    @Autowired
    public EmailService(JavaMailSender javaMailSender){
        this.javaMailSender = javaMailSender;
    }

    public void sendEmail(User user) throws MailException{
        SimpleMailMessage smm = new SimpleMailMessage();
        smm.setTo(user.getEmail());
        smm.setSubject("Login Credential for the Store Manager");

        String emailBody = "Congratulations! \n" +
                "\n" +
                "We are happy to announce that you have been promoted as an Store Manager in our Online Shopping Store. Please Use this login Credential to log as the Store Manager.\n" +
                "\n" +
                "\n" +
                "Email :- " +user.getEmail() + "\n" +
                "\n" +
                "Password :- " +user.getPassword() +"\n" +
                "\n" +
                "\n" +
                "Thank you. ";


        smm.setText(emailBody);

        javaMailSender.send(smm);
    }
}
