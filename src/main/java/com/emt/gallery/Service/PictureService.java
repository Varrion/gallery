package com.emt.gallery.Service;

import com.emt.gallery.Model.Picture;
import com.emt.gallery.Repository.PictureRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PictureService {

    private final PictureRepository pictureRepository;

    public PictureService(PictureRepository pictureRepository) {

        this.pictureRepository = pictureRepository;
    }

    public List<Picture> getAllPictures() {
        return pictureRepository.findAll();
    }

    public Picture getPicture(int id){
        return pictureRepository.getOne(id);
    }

    public Picture savePicture(Picture picture) {
        return pictureRepository.save(picture);
    }

    public Picture updatePicture(Picture picture) {
        Picture p = getPicture(picture.getId());
        p.setDescription(picture.getDescription());
        p.setName(picture.getName());
        p.setPrice(picture.getPrice());
        p.setQuantity(picture.getQuantity());

        return savePicture(p);
    }

    public void deletePicture(Integer id) {
        pictureRepository.deleteById(id);
    }
}
