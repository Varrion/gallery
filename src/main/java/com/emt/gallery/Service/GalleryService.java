package com.emt.gallery.Service;

import com.emt.gallery.Model.Gallery;
import com.emt.gallery.Repository.GalleryRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GalleryService {

    private final GalleryRepository galleryRepository;

    public GalleryService(GalleryRepository galleryRepository) {
        this.galleryRepository = galleryRepository;
    }

    public List<Gallery> getAllGaleries() {
        return galleryRepository.findAll();
    }

    public Gallery getGallery(int id) {
        return galleryRepository.getOne(id);
    }

    public Gallery saveGallery(Gallery gallery) {
        return galleryRepository.save(gallery);
    }

    public void deleteGallery(Integer id) {
        galleryRepository.deleteById(id);
    }

    public Gallery editGallery(Gallery gallery) {
        Gallery g = getGallery(gallery.getId());
        g.setLocation(gallery.getLocation());
        g.setName(gallery.getName());
        g.setPhone(gallery.getPhone());
        g.setPictures(gallery.getPictures());

        return saveGallery(g);
    }

}
