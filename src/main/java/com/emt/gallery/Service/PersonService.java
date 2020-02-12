package com.emt.gallery.Service;

import com.emt.gallery.Model.Person;
import com.emt.gallery.Repository.PersonRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PersonService {

    private final PersonRepository personRepository;

    public PersonService(PersonRepository personRepository) {
        this.personRepository = personRepository;
    }

    public Person getPersonByHisName(String name) {
        return personRepository.findByName(name);
    }

    public List<Person> getAllPersons(){
        return personRepository.findAll();
    }

    public Optional<Person> getPerson(int id) {
        return personRepository.findById(id);
    }

    public Person savePerson(Person person) {
        return personRepository.save(person);
    }

    public void deletePerson(Integer id) {
        personRepository.deleteById(id);
    }
}
