package com.badraccoon.demo.services;

import com.badraccoon.demo.models.User;
import com.badraccoon.demo.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository uRepo;

    public User fetchRegisteredUserByName(String username, String password) {
        Optional<User> optionalUser = uRepo.findByUsernameAndPassword(username, password);
        return optionalUser.orElse(null);
    }

    public User fetchRegisteredUserByEmail(String email, String password) {
        Optional<User> optionalUser = uRepo.findByEmailAndPassword(email, password);
        return optionalUser.orElse(null);
    }

    public User fetchUserByName(String username) {
        Optional<User> optionalUser = uRepo.findByUsername(username);
        return optionalUser.orElse(null);
    }

    public User fetchUserByEmail(String email) {
        Optional<User> optionalUser = uRepo.findByEmail(email);
        return optionalUser.orElse(null);
    }

    public User registerUser(User user) {
        return uRepo.save(user);
    }
}
