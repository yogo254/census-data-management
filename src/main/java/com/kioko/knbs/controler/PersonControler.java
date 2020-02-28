package com.kioko.knbs.controler;

import com.kioko.knbs.models.Person;
import com.kioko.knbs.repos.PersonRepo;
import com.kioko.knbs.util.GenericMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import reactor.core.publisher.Mono;

/**
 * PersonControler
 */
@RestController
@RequestMapping("/person")
public class PersonControler {
    @Autowired
    private PersonRepo personRepo;

    @PostMapping("/register")
    public GenericMessage register(@RequestBody Person person) {

        personRepo.save(person).subscribe();

        return new GenericMessage(1, "person details added succesfully");

    }

    @GetMapping("/details/{id}")
    public Mono<Person> getPersonDetails(@PathVariable("id") String id) {
        return personRepo.findById(id);
        

    }

}