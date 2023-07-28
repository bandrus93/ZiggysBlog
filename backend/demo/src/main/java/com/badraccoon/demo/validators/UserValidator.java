package com.badraccoon.demo.validators;

import com.badraccoon.demo.models.User;
import com.badraccoon.demo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;

import java.util.Objects;

@Component
public class UserValidator {
    @Autowired
    private UserService uService;

    public boolean supports(Class<?> clazz) {
        return User.class.equals(clazz);
    }

    public void validate(Object target, Errors errors) {
        User user = (User) target;
        if (uService.fetchUserByName(user.getUsername()) != null) {
            errors.rejectValue("username", "Username already taken");
        }
        if (uService.fetchUserByEmail(user.getEmail()) != null) {
            errors.rejectValue("email", "There is already an account tied to this email address");
        }
        if (!Objects.equals(user.getPassword(), user.getPassConfirm())) {
            errors.rejectValue("password", "Passwords do not match");
        }
    }
}
