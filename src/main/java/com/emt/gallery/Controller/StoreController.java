package com.emt.gallery.Controller;

import com.emt.gallery.Model.Store;
import com.emt.gallery.Service.StoreService;
import com.sun.org.apache.bcel.internal.generic.FSTORE;
import org.springframework.web.bind.annotation.*;


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

    @PostMapping("/save")
    public Store save(@RequestBody Store store) {
        return storeService.saveStore(store);
    }

    @PostMapping("/edit/{id}")
    public Store edit(@PathVariable Integer id, @RequestBody Store store) {
        return storeService.editStore(store);

    }


}

