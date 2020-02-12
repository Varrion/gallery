package com.emt.gallery.Controller;

import com.emt.gallery.Model.Dto.PictureDto;
import com.emt.gallery.Model.Picture;
import com.emt.gallery.Service.PictureService;
import lombok.var;
import org.apache.tomcat.util.http.fileupload.FileUploadException;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping(value = "/api/picture")
public class PictureController {

    private final PictureService pictureService;

    public PictureController(PictureService pictureService) {
        this.pictureService = pictureService;
    }

    @GetMapping
    public List<Picture> getAll() {
        return pictureService.getAllPictures();
    }

    @GetMapping("/{fileId}")
    public ResponseEntity<Resource> downloadFile(@PathVariable Integer fileId) {
        Picture dbFile = pictureService.getPicture(fileId);

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(dbFile.getImageType()))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + dbFile.getName() + "\"")
                .body(new ByteArrayResource(dbFile.getData()));
    }

    @PostMapping(value = "/upload",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public Picture upload(@RequestParam("picture") MultipartFile picture, @RequestBody PictureDto pictureData) throws FileUploadException {
        return pictureService.storePicture(picture, pictureData);
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
