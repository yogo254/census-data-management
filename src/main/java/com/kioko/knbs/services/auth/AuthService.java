package com.kioko.knbs.services.auth;

import com.kioko.knbs.models.auth.Permission;
import com.kioko.knbs.models.auth.Role;
import com.kioko.knbs.models.auth.User;
import com.kioko.knbs.repos.auth.UserRepo;
import com.kioko.knbs.util.auth.JwtUtil;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import reactor.core.publisher.Mono;

/**
 * AuthService
 */
@Service
public class AuthService {
    @Autowired
    private UserRepo userRepo;

    public Mono<Boolean> authenticate(String email, String password) {
        return userRepo.findByEmail(email).map(user -> {
            if (user != null)
                return PasswordService.verifyUserPassword(password, user.getPassword(), user.getSalt());
            else
                throw new InvalidCredencialException("Invalid credentials");

        });

    }

    public boolean auth(String email, List<String> permissions) {
        User user = userRepo.findByEmail(email).block();
        List<String> uPermissions = new ArrayList<>();
        user.getRoles().stream().map(Role::getPermissions).map(this::getPermNames)
                .forEach(pers -> uPermissions.addAll(pers));

        long invalidPermCount = permissions.stream().map(p -> uPermissions.contains(p)).filter(b -> !b).count();

        if (invalidPermCount == 0)
            return true;
        else
            return false;

    }

    private List<String> getPermNames(List<Permission> permissions) {
        return permissions.stream().map(Permission::getName).collect(Collectors.toList());
    }

}