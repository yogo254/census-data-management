package com.kioko.knbs.repos;

import com.kioko.knbs.models.Person;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

/**
 * PersonRepo
 */
public interface PersonRepo extends ReactiveMongoRepository<Person, String> {

}