package com.emt.gallery.Controller;

import com.emt.gallery.Model.Dto.PictureDto;
import com.emt.gallery.Model.Picture;
import com.emt.gallery.Model.Store;
import com.emt.gallery.Service.StoreService;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/store")
public class StoreController {
    public final StoreService storeService;


    public StoreController(StoreService storeService) {
        this.storeService = storeService;
    }

    @GetMapping("/{id}")
     public Store getOne(@PathVariable Integer id){
        return storeService.getStore(id);
    }

    @GetMapping("/user/{userId}")
    public List<Store> getStoresByUserId(@PathVariable Integer userId) {
        return storeService.getStoreByUser(userId);
    }

    @PostMapping("/save")
    public Store save(@RequestBody PictureDto picture) {
        return storeService.insertInStore(picture);
    }

    @PostMapping("/edit/{id}")
    public Store edit(@PathVariable Integer id, @RequestBody Store store) {
        return storeService.editStore(store);

    }


}

