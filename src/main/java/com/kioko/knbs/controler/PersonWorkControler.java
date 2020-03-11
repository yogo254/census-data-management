package com.kioko.knbs.controler;

import java.util.List;

import com.kioko.knbs.controler.exception.InvalidRequestException;
import com.kioko.knbs.models.Work;
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
 * PersonWorkControler
 */
@RestController
@RequestMapping("/api/person/work")
public class PersonWorkControler {
    @Autowired
    private PersonRepo personRepo;

    @PostMapping("/add/{id}")
    public Mono<GenericMessage> addWork(@PathVariable("id") String id, @RequestBody Work work) {

        return personRepo.findById(id).map(person -> {
            if (person != null) {
                person.getWorks().add(work);
                personRepo.save(person).subscribe();
                return new GenericMessage(1, "work added successfully");

            } else
                throw new InvalidRequestException("Invalid request");
        });

    }

    @PostMapping("/update/{id}")
    public Mono<GenericMessage> updateWork(@PathVariable("id") String id, @RequestBody List<Work> works) {
        return personRepo.findById(id).map(person -> {
            if (person != null) {
                person.setWorks(works);
                personRepo.save(person).subscribe();
                return new GenericMessage(1, "work updated successfully");
            } else
                throw new InvalidRequestException("Invalid request");
        });

    }

}