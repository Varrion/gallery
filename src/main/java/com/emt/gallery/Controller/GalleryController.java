package com.emt.gallery.Controller;

import com.emt.gallery.Model.Gallery;
import com.emt.gallery.Service.GalleryService;
import org.springframework.data.relational.core.sql.In;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/gallery")
public class GalleryController {

    private final GalleryService galleryService;

    public GalleryController(GalleryService galleryService) {
        this.galleryService = galleryService;
    }

    @GetMapping()
    public List<Gallery> getAll() {
        return galleryService.getAllGaleries();
    }

    @GetMapping("/{id}")
    public Gallery getGalleryById(@PathVariable Integer id) {
        return galleryService.getGallery(id);
    }

    @PostMapping("/save")
    public Gallery save(@RequestBody Gallery gallery) {
        return galleryService.saveGallery(gallery);
    }

    @PostMapping("edit/{id}")
    public Gallery edit(@PathVariable Integer id, @RequestBody Gallery gallery) {
        return galleryService.editGallery(gallery);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Integer id) {
        galleryService.deleteGallery(id);
    }
}
