package com.badraccoon.demo.controllers;

import com.badraccoon.demo.models.User;
import com.badraccoon.demo.services.UserService;
import com.badraccoon.demo.validators.UserValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService uService;
    @Autowired
    private UserValidator uValidator;

    @PostMapping("/register")
    public User register(@Valid @RequestBody User user, BindingResult result) {
        uValidator.validate(user, result);
        if (result.hasErrors()) {
            user.setRegistrationStatus(result.getAllErrors().toString());
        } else {
            user.setRegistrationStatus("success");
            uService.registerUser(user);
        }
        return user;
    }

    @PostMapping("/login")
    public User login(@RequestBody User user) {
        User loginUser = uService.fetchRegisteredUserByName(user.getUsername(), user.getPassword());
        if (loginUser != null) return loginUser;
        else return uService.fetchRegisteredUserByEmail(user.getEmail(), user.getPassword());
    }
}
