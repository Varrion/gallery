package com.emt.gallery.Controller;

import com.emt.gallery.Model.Dto.PictureDto;
import com.emt.gallery.Model.Picture;
import com.emt.gallery.Service.PictureService;
import org.apache.tomcat.util.http.fileupload.FileUploadException;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

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
    public ResponseEntity<Resource> fetchPicture(@PathVariable Integer fileId) {
        Picture dbFile = pictureService.getPicture(fileId);

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(dbFile.getImageType()))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + dbFile.getName() + "\"")
                .body(new ByteArrayResource(dbFile.getData()));
    }

    @GetMapping("/{fileId}/data")
    public PictureDto fetchPictureData(@PathVariable Integer fileId) {
        Picture dbFile = pictureService.getPicture(fileId);

        return pictureService.getPictureDto(dbFile);
    }

    @PostMapping(value = "/upload")
    public Picture upload(@RequestParam("picture") MultipartFile picture, @RequestPart("pictureData") PictureDto pictureDto) throws FileUploadException {
        return pictureService.storePicture(picture, pictureDto);
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
