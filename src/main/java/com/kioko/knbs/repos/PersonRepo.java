package com.kioko.knbs.repos;

import com.kioko.knbs.models.Person;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

import reactor.core.publisher.Mono;

/**
 * PersonRepo
 */
public interface PersonRepo extends ReactiveMongoRepository<Person, String> {
    Mono<Boolean> existsByNationalId(String nationalId);

    Mono<Boolean> existsByPassportNo(String passportNo);

    Mono<Boolean> existsByBirthNo(String birthNo);

    Mono<Person> findByBirthNo(String birthNo);

    Mono<Person> findByPassportNo(String passportNo);

    Mono<Person> findByNationalId(String nationalId);

}