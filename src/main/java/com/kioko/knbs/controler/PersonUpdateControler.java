package com.kioko.knbs.controler;

import java.util.Optional;

import com.kioko.knbs.models.Person;
import com.kioko.knbs.repos.PersonRepo;
import com.kioko.knbs.util.GenericMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * PersonUpdateControler
 */
@RestController
@RequestMapping("/update")
public class PersonUpdateControler {
    @Autowired
    private PersonRepo personRepo;

    @PostMapping("/identification")
    public GenericMessage updateIdentification(@RequestBody Person person) {
        Optional<String> idOptional = Optional.ofNullable(person.getId());
        if (idOptional.isPresent()) {
            personRepo.findById(person.getId())

                    .subscribe(p -> {
                        p.setBirthNo(person.getBirthNo());
                        p.setNationalId(person.getNationalId());
                        p.setNssfNo(person.getNssfNo());
                        p.setPassportNo(person.getPassportNo());
                        p.setVoterId(person.getVoterId());

                        personRepo.save(p).subscribe();

                    });
            return new GenericMessage(1, "identification updated successfully");

        } else
            return new GenericMessage(0, "invalid request");

    }

    @PostMapping("/contact")
    public GenericMessage updateContact(@RequestBody Person person) {
        Optional<String> idOptional = Optional.ofNullable(person.getId());
        if (idOptional.isPresent()) {
            personRepo.findById(person.getId())

                    .subscribe(p -> {
                        p.setPhone(person.getPhone());
                        p.setEmailAddress(person.getEmailAddress());
                        personRepo.save(p).subscribe();

                    });
            return new GenericMessage(1, "contacts updated successfully");

        } else
            return new GenericMessage(0, "invalid request");

    }

    @PostMapping("/marital")
    public GenericMessage updateMarital(@RequestBody Person person) {
        Optional<String> idOptional = Optional.ofNullable(person.getId());
        if (idOptional.isPresent()) {
            personRepo.findById(person.getId())

                    .subscribe(p -> {
                        p.setMaritalStatus(person.getMaritalStatus());

                        personRepo.save(p).subscribe();

                    });
            return new GenericMessage(1, "Marital status updated successfully");

        } else
            return new GenericMessage(0, "invalid request");

    }

    @PostMapping("/religion")
    public GenericMessage updateReligion(@RequestBody Person person) {
        Optional<String> idOptional = Optional.ofNullable(person.getId());
        if (idOptional.isPresent()) {
            personRepo.findById(person.getId())

                    .subscribe(p -> {
                        p.setReligion(person.getReligion());
                        personRepo.save(p).subscribe();

                    });
            return new GenericMessage(1, "Religion updated successfully");

        } else
            return new GenericMessage(0, "invalid request");

    }

}