package com.kioko.knbs.controler;

import java.util.List;

import com.kioko.knbs.models.Work;
import com.kioko.knbs.repos.PersonRepo;
import com.kioko.knbs.util.GenericMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * PersonWorkControler
 */
@RestController
@RequestMapping("/work")
public class PersonWorkControler {
    @Autowired
    private PersonRepo personRepo;

    @PostMapping("/add/{id}")
    public GenericMessage addWork(@PathVariable("id") String id, @RequestBody Work work) {

        if (personRepo.existsById(id).block()) {
            personRepo.findById(id)

                    .subscribe(p -> {
                        p.getWorks().add(work);
                        personRepo.save(p).subscribe();

                    });
            return new GenericMessage(1, "work added successfully");

        } else
            return new GenericMessage(0, "invalid request");

    }

    @PostMapping("/update/{id}")
    public GenericMessage updateWork(@PathVariable("id") String id, @RequestBody List<Work> works) {

        if (personRepo.existsById(id).block()) {
            personRepo.findById(id)

                    .subscribe(p -> {
                        p.setWorks(works);
                        personRepo.save(p).subscribe();

                    });
            return new GenericMessage(1, "work updated successfully");

        } else
            return new GenericMessage(0, "invalid request");

    }

}