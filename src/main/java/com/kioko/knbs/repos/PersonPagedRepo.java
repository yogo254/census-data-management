package com.kioko.knbs.repos;

import com.kioko.knbs.models.Person;

import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * PersonPagedRepo
 */
public interface PersonPagedRepo extends PagingAndSortingRepository<Person, String> {

}