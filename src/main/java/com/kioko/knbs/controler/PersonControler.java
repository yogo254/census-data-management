package com.kioko.knbs.controler;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.kioko.knbs.controler.exception.InvalidRequestException;
import com.kioko.knbs.models.Person;
import com.kioko.knbs.repos.PersonPagedRepo;
import com.kioko.knbs.repos.PersonRepo;
import com.kioko.knbs.util.GenericMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;

import org.springframework.data.domain.Slice;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import reactor.core.publisher.Mono;

/**
 * PersonControler
 */
@RestController
@RequestMapping("/api/person")
@CrossOrigin
public class PersonControler {
    @Autowired
    private PersonRepo personRepo;
    @Autowired
    private PersonPagedRepo pagedRepo;

    @PostMapping("/register")
    public GenericMessage register(@RequestBody Person person) {
        Optional<String> nationalId = Optional.ofNullable(person.getNationalId());
        Optional<String> passport = Optional.ofNullable(person.getPassportNo());
        Optional<String> birth = Optional.ofNullable(person.getBirthNo());
        Optional<String> id = Optional.ofNullable(person.getId());
        List<Person> exists = new ArrayList<>();

        if (birth.isPresent()) {
            personRepo.existsByBirthNo(birth.get()).subscribe(b -> {
                if (b) {
                    personRepo.findByBirthNo(birth.get()).subscribe(exists::add);

                }

            });

        }
        if (passport.isPresent()) {
            personRepo.existsByBirthNo(passport.get()).subscribe(b -> {
                if (b) {
                    personRepo.findByPassportNo(passport.get()).subscribe(exists::add);

                }

            });

        }

        if (nationalId.isPresent()) {
            personRepo.existsByBirthNo(nationalId.get()).subscribe(b -> {
                if (b) {
                    personRepo.findByNationalId(nationalId.get()).subscribe(exists::add);

                }

            });

        }

        if (id.isPresent()) {
            // update person details
            long existsCount = exists.stream().filter(p -> !p.getId().equals(person.getId())).count();

            if (existsCount < 1) {
                personRepo.save(person).subscribe();
                return new GenericMessage(1, "person details updated succesfully");

            } else
                throw new InvalidRequestException("cant update duplicate identification details");

        } else {
            // add new person to db
            long existsCount = exists.stream().count();

            if (existsCount < 1) {
                personRepo.save(person).subscribe();
                return new GenericMessage(1, "person details added succesfully");

            } else
                throw new InvalidRequestException("identification details exists");
        }

    }

    @GetMapping("/details/id")
    public Mono<Person> getPersonDetailsById(@RequestHeader("id") String id) {

        return personRepo.findById(id);

    }

    @GetMapping("/details/national")
    public Mono<Person> getPersonDetailsByNationalId(@RequestHeader("id") String id) {

        return personRepo.findByNationalId(id);

    }

    @GetMapping("/details/birth")
    public Mono<Person> getPersonDetailsByBirth(@RequestHeader("id") String id) {
        return personRepo.findByBirthNo(id);

    }

    @GetMapping("/details/passport")
    public Mono<Person> getPersonDetailsByPassport(@RequestHeader("id") String id) {

        return personRepo.findByPassportNo(id);

    }

    @GetMapping("/all")
    public Slice<Person> getALl(@RequestHeader("page") int page, @RequestHeader("size") int size) {
        return pagedRepo.findAll(PageRequest.of(page, size));

    }

}