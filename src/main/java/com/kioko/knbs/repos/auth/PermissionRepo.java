package com.kioko.knbs.repos.auth;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import com.kioko.knbs.models.auth.Permission;

/**
 * PermissionRepo
 */
public interface PermissionRepo extends ReactiveMongoRepository<Permission, String> {

}