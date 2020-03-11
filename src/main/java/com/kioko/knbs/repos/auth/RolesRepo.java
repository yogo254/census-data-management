package com.kioko.knbs.repos.auth;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

import reactor.core.publisher.Mono;

import com.kioko.knbs.models.auth.Role;

/**
 * RolesRepo
 */
public interface RolesRepo extends ReactiveMongoRepository<Role, String> {
    Mono<Role> findByName(String name);

    Mono<Boolean> existsByName(String name);
}