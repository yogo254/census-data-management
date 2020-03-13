package com.kioko.knbs.controler;

import com.kioko.knbs.controler.exception.InvalidRequestException;
import com.kioko.knbs.models.Person;
import com.kioko.knbs.repos.PersonRepo;
import com.kioko.knbs.util.GenericMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import reactor.core.publisher.Mono;

/**
 * PersonUpdateControler
 */
@RestController
@RequestMapping("/api/person/update")
public class PersonUpdateControler {
    @Autowired
    private PersonRepo personRepo;

    @PostMapping("/identification")
    public Mono<GenericMessage> updateIdentification(@RequestBody Person person) {

        return personRepo.findById(person.getId()).map(p -> {
            if (p != null) {
                p.setBirthNo(person.getBirthNo());
                p.setNationalId(person.getNationalId());
                p.setNssfNo(person.getNssfNo());
                p.setPassportNo(person.getPassportNo());

                personRepo.save(p).subscribe();
                return new GenericMessage(1, "identification updated successfully");

            } else
                throw new InvalidRequestException("Invalid request");
        });

    }

    @PostMapping("/contact")
    public Mono<GenericMessage> updateContact(@RequestBody Person person) {

        return personRepo.findById(person.getId()).map(p -> {
            if (p != null) {
                p.setPhone(person.getPhone());
                p.setEmailAddress(person.getEmailAddress());
                personRepo.save(p).subscribe();
                return new GenericMessage(1, "contacts updated successfully");

            } else
                throw new InvalidRequestException("Invalid request");
        });

    }

    @PostMapping("/marital")
    public Mono<GenericMessage> updateMarital(@RequestBody Person person) {

        return personRepo.findById(person.getId()).map(p -> {
            if (p != null) {
                p.setMaritalStatus(person.getMaritalStatus());

                personRepo.save(p).subscribe();
                return new GenericMessage(1, "Marital status updated successfully");

            } else
                throw new InvalidRequestException("Invalid request");
        });

    }

    @PostMapping("/religion")
    public Mono<GenericMessage> updateReligion(@RequestBody Person person) {

        return personRepo.findById(person.getId()).map(p -> {
            if (p != null) {
                p.setReligion(person.getReligion());
                personRepo.save(p).subscribe();
                return new GenericMessage(1, "Religion updated successfully");

            } else
                throw new InvalidRequestException("Invalid Request");

        });

    }

}