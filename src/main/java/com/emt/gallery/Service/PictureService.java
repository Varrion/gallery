package com.emt.gallery.Service;

import com.emt.gallery.Model.Picture;
import com.emt.gallery.Repository.PictureRepository;
import org.apache.tomcat.util.http.fileupload.FileUploadException;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
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

    public Picture storePicture(MultipartFile file) throws FileUploadException {
        // Normalize file name
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());

        try {
            // Check if the file's name contains invalid characters
            if(fileName.contains("..")) {
                throw new FileUploadException("Sorry! Filename contains invalid path sequence " + fileName);
            }

            Picture picture = new Picture(fileName, file.getContentType(), file.getBytes());

            return pictureRepository.save(picture);
        } catch (IOException | FileUploadException ex) {
            throw new FileUploadException("Could not store file " + fileName + ". Please try again!", ex);
        }
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
