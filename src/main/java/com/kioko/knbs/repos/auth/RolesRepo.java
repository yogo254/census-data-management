package com.kioko.knbs.repos.auth;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import com.kioko.knbs.models.auth.Role;

/**
 * RolesRepo
 */
public interface RolesRepo extends ReactiveMongoRepository<Role, String> {

}