package com.emt.gallery.Controller;

import com.emt.gallery.Model.Picture;
import com.emt.gallery.Service.PictureService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/picture")
public class PictureController {

    private final PictureService pictureService;

    public PictureController(PictureService pictureService) {
        this.pictureService = pictureService;
    }

    @GetMapping
    public List<Picture> getAll() {
        return pictureService.getAllPictures();
    }

    @GetMapping("/{id}")
    public Picture getOnePicture(@PathVariable Integer id) {
        return pictureService.getPicture(id);
    }

    @PostMapping("/save")
    public Picture save(@RequestBody Picture picture) {
        return pictureService.savePicture(picture);
    }

    @PostMapping("/update/{id}")
    public Picture edit(@PathVariable Integer id, @RequestBody Picture picture) {
        return pictureService.updatePicture(picture);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Integer id) {
        pictureService.deletePicture(id);
    }



}
