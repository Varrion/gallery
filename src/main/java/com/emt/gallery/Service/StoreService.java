package com.emt.gallery.Service;

import com.emt.gallery.Model.Store;
import com.emt.gallery.Repository.StoreRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class StoreService {

    private final StoreRepository storeRepository;

    public StoreService(StoreRepository storeRepository) {
        this.storeRepository = storeRepository;
    }

    public Store getStore(int id){
        return storeRepository.getOne(id);
    }

    public Store saveStore(Store store) {
        return storeRepository.save(store);
    }

    public Store editStore(Store store) {
        Store s = getStore(store.getId());
        s.setPictures(store.getPictures());

        return saveStore(s);
    }
}
