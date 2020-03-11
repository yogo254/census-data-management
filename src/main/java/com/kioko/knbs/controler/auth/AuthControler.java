package com.kioko.knbs.controler.auth;

import java.util.ArrayList;

import java.util.List;

import com.kioko.knbs.excetions.UserExistsException;
import com.kioko.knbs.models.auth.Permission;
import com.kioko.knbs.models.auth.Role;
import com.kioko.knbs.models.auth.User;
import com.kioko.knbs.repos.auth.UserRepo;
import com.kioko.knbs.services.auth.AuthService;
import com.kioko.knbs.services.auth.InvalidCredencialException;
import com.kioko.knbs.services.auth.PasswordService;
import com.kioko.knbs.util.auth.JwtUtil;
import com.kioko.knbs.util.auth.Login;
import com.kioko.knbs.util.auth.Token;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * AuthControler
 */
@RestController
@RequestMapping("/api/auth")
public class AuthControler {
    @Autowired
    private AuthService authService;
    @Autowired
    private JwtUtil jwtUtil;
    @Autowired
    private UserRepo userRepo;

    @PostMapping(value = "/login")
    public Mono<Token> login(@RequestBody Login login) {

        return authService.authenticate(login.getEmail(), login.getPassword()).map(b -> {
            if (b)
                return new Token(jwtUtil.getToken(login));
            else
                throw new InvalidCredencialException("invalid credencials");
        });

    }

    @PostMapping(value = "/register")
    public Mono<Token> register(@RequestBody User user) {

        return userRepo.existsByEmail(user.getEmail()).map(b -> {

            if (!b) {
                String salt = PasswordService.getSalt(30);
                user.setSalt(salt);
                user.setPassword(PasswordService.generateSecurePassword(user.getPassword(), salt));

                Login login = new Login();
                List<Permission> perms = new ArrayList<>();
                perms.add(new Permission("*user"));
                List<Role> roles = new ArrayList<>();
                roles.add(new Role("user", perms));
                user.setRoles(roles);

                userRepo.save(user).subscribe();
                return new Token(jwtUtil.getToken(login));
            } else
                throw new UserExistsException("user with the email exists");

        });

    }

    @GetMapping(value = "/all")
    public Flux<User> getAllUsers() {
        return userRepo.findAll();
    }

}