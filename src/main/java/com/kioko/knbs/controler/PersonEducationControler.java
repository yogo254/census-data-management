package com.kioko.knbs.controler;

import java.util.List;

import com.kioko.knbs.controler.exception.InvalidRequestException;
import com.kioko.knbs.models.Education;
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
 * PersonEducationControler
 */
@RestController
@RequestMapping("/education")
public class PersonEducationControler {
    @Autowired
    private PersonRepo personRepo;

    @PostMapping("/add/{id}")
    public Mono<GenericMessage> addEducation(@PathVariable("id") String id, @RequestBody Education education) {

        return personRepo.findById(id).map(person -> {
            if (person != null) {
                person.getEducations().add(education);
                personRepo.save(person).subscribe();
                return new GenericMessage(1, "education added successfully");

            } else
                throw new InvalidRequestException("Invalid request");
        });

    }

    @PostMapping("/update/{id}")
    public Mono<GenericMessage> updateEducation(@PathVariable("id") String id,
            @RequestBody List<Education> educations) {

        return personRepo.findById(id).map(person -> {
            if (person != null) {
                person.setEducations(educations);
                personRepo.save(person).subscribe();
                return new GenericMessage(1, "education added successfully");
            } else
                throw new InvalidRequestException("Invalid request");
        });

    }

}