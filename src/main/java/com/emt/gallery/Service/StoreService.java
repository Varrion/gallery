package com.emt.gallery.Service;

import com.emt.gallery.Model.Dto.PictureDto;
import com.emt.gallery.Model.Person;
import com.emt.gallery.Model.Picture;
import com.emt.gallery.Model.Store;
import com.emt.gallery.Repository.PersonRepository;
import com.emt.gallery.Repository.StoreRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StoreService {

    private final StoreRepository storeRepository;
    private final PersonRepository personRepository;
    private final PersonService personService;

    public StoreService(StoreRepository storeRepository, PersonRepository personRepository, PersonService personService) {
        this.storeRepository = storeRepository;
        this.personRepository = personRepository;
        this.personService = personService;
    }

    public Store getStore(int id) {
        return storeRepository.getOne(id);
    }

    public List<Store> getStoreByUser(Integer userId) {
        return storeRepository.findByPersonId(userId);
    }

    public Store insertInStore(PictureDto pictureDto) {

        Picture picture;
        picture = DtoToEntity(pictureDto);
        Person person = new Person();

        List<Store> stores = getStoreByUser(5);

        if (stores.isEmpty()) {

            Store tempStore = new Store();

            Person tempPerson = personService.getPerson(5).get();
            tempStore.setPerson(tempPerson);
            tempStore.setPicture(picture);
            tempStore.setNumberOfPictures(tempStore.getNumberOfPictures() + 1);

            return storeRepository.save(tempStore);
        }

        for (Store store : stores) {
            person = store.getPerson();
            if (store.getPicture().getId() == picture.getId()) {
                store.setNumberOfPictures(store.getNumberOfPictures() + 1);
                return storeRepository.save(store);
            }
        }

        Store newStore = new Store();

        newStore.setPerson(person);
        newStore.setPicture(picture);
        newStore.setNumberOfPictures(newStore.getNumberOfPictures() + 1);

        return storeRepository.save(newStore);
    }

    public Store editStore(Store store) {
        Store s = getStore(store.getId());


        s.setPicture(store.getPicture());

        return storeRepository.save(s);
    }

    private void deleteFromStore() {

    }

    private Picture DtoToEntity(PictureDto pictureDto) {
        if (pictureDto == null) {
            return null;
        }

        Picture picture = new Picture();

        picture.setId(pictureDto.getId());
        picture.setName(pictureDto.getName());
        picture.setDescription(pictureDto.getDescription());
        picture.setPrice(pictureDto.getPrice());
        picture.setQuantity(pictureDto.getQuantity());
        picture.setAuthor(personRepository.findByName(pictureDto.getAuthor()));


        return picture;
    }
}
