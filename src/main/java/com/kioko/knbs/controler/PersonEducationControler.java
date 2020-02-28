package com.kioko.knbs.controler;

import java.util.List;

import com.kioko.knbs.models.Education;
import com.kioko.knbs.repos.PersonRepo;
import com.kioko.knbs.util.GenericMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * PersonEducationControler
 */
@RestController
@RequestMapping("/education")
public class PersonEducationControler {
    @Autowired
    private PersonRepo personRepo;

    @PostMapping("/add/{id}")
    public GenericMessage addEducation(@PathVariable("id") String id, @RequestBody Education education) {

        if (personRepo.existsById(id).block()) {
            personRepo.findById(id)

                    .subscribe(p -> {
                        p.getEducations().add(education);
                        personRepo.save(p).subscribe();

                    });
            return new GenericMessage(1, "education added successfully");

        } else
            return new GenericMessage(0, "invalid request");

    }

    @PostMapping("/update/{id}")
    public GenericMessage updateEducation(@PathVariable("id") String id, @RequestBody List<Education> educations) {

        if (personRepo.existsById(id).block()) {
            personRepo.findById(id)

                    .subscribe(p -> {
                        p.setEducations(educations);
                        personRepo.save(p).subscribe();

                    });
            return new GenericMessage(1, "education added successfully");

        } else
            return new GenericMessage(0, "invalid request");

    }

}