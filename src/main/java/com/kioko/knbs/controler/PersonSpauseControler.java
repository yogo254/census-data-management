package com.kioko.knbs.controler;

import java.util.List;

import com.kioko.knbs.controler.exception.InvalidRequestException;
import com.kioko.knbs.repos.PersonRepo;
import com.kioko.knbs.util.GenericMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import reactor.core.publisher.Mono;

/**
 * PersonSpauseControler
 */
@RestController
@RequestMapping("api/person/spauce")
public class PersonSpauseControler {

    @Autowired
    private PersonRepo personRepo;

    @PostMapping("/add/{id}")
    public Mono<GenericMessage> addSpauce(@PathVariable("id") String id, @RequestBody String spause) {

        return personRepo.findById(id).map(person -> {
            if (person != null) {
                person.getSpauces().add(spause);
                personRepo.save(person).subscribe();
                return new GenericMessage(1, "spause added successfully");
            } else
                throw new InvalidRequestException("invalid request");
        });

    }

    @PostMapping("/update/{id}")
    public Mono<GenericMessage> updateSpause(@PathVariable("id") String id, @RequestBody List<String> spauces) {

        return personRepo.findById(id).map(person -> {
            if (person != null) {
                person.setSpauces(spauces);

                personRepo.save(person).subscribe();
                return new GenericMessage(1, " spauces updated successfully");
            } else
                throw new InvalidRequestException("invalid request");

        });

    }
}