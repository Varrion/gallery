package com.emt.gallery.Controller;

import com.emt.gallery.Model.Picture;
import com.emt.gallery.Service.PictureService;
import org.apache.tomcat.util.http.fileupload.FileUploadException;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
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

    @PostMapping("/upload")
    public Picture upload(@RequestParam("picture")MultipartFile picture) throws FileUploadException {
        return pictureService.storePicture(picture);
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
