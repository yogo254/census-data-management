package com.kioko.knbs.repos.auth;

import com.kioko.knbs.models.auth.User;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

/**
 * UserRepo
 */

public interface UserRepo extends ReactiveMongoRepository<User, String> {

}