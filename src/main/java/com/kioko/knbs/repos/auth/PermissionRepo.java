package com.kioko.knbs.repos.auth;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

import reactor.core.publisher.Mono;

import com.kioko.knbs.models.auth.Permission;

/**
 * PermissionRepo
 */
public interface PermissionRepo extends ReactiveMongoRepository<Permission, String> {
    Mono<Permission> findByName(String name);

    Mono<Boolean> existsByName(String name);

}