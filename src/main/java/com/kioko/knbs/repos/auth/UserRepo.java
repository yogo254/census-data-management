package com.kioko.knbs.repos.auth;

import com.kioko.knbs.models.auth.User;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

import reactor.core.publisher.Mono;

/**
 * UserRepo
 */

public interface UserRepo extends ReactiveMongoRepository<User, String> {
    Mono<User> findByEmail(String email);

    Mono<Boolean> existsByEmail(String email);

}