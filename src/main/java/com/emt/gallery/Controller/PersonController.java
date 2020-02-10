package com.emt.gallery.Controller;

import com.emt.gallery.Model.Person;
import com.emt.gallery.Service.PersonService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping ("/api/person")
public class PersonController {

    private final PersonService personService;

    public PersonController(PersonService personService) {
        this.personService = personService;
    }

    @GetMapping
    public List<Person> getAll() {
        return personService.getAllPersons();
    }

    @GetMapping("/{id}")
    public Optional<Person> getOnePerson(@PathVariable Integer id){
        return personService.getPerson(id);
    }

    @PostMapping("/save")
    public Person save(@RequestBody Person person){
        return personService.savePerson(person);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Integer id){
        personService.deletePerson(id);
    }


}

