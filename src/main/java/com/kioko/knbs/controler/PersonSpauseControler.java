package com.kioko.knbs.controler;

import java.util.List;

import com.kioko.knbs.repos.PersonRepo;
import com.kioko.knbs.util.GenericMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * PersonSpauseControler
 */
@RestController
@RequestMapping("/spauce")
public class PersonSpauseControler {

    @Autowired
    private PersonRepo personRepo;

    @PostMapping("/add/{id}")
    public GenericMessage addSpauce(@PathVariable("id") String id, @RequestBody String spause) {

        if (personRepo.existsById(id).block()) {
            personRepo.findById(id)

                    .subscribe(p -> {
                        p.getSpauces().add(spause);
                        personRepo.save(p).subscribe();

                    });
            return new GenericMessage(1, "spause added successfully");

        } else
            return new GenericMessage(0, "invalid request");

    }

    @PostMapping("/update/{id}")
    public GenericMessage updateSpause(@PathVariable("id") String id, @RequestBody List<String> spauces) {

        if (personRepo.existsById(id).block()) {
            personRepo.findById(id)

                    .subscribe(p -> {
                        p.setSpauces(spauces);
                        ;
                        personRepo.save(p).subscribe();

                    });
            return new GenericMessage(1, " spauces updated successfully");

        } else
            return new GenericMessage(0, "invalid request");

    }

}