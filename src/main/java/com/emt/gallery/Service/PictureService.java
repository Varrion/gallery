package com.emt.gallery.Service;

import com.emt.gallery.Model.Dto.PictureDto;
import com.emt.gallery.Model.Person;
import com.emt.gallery.Model.Picture;
import com.emt.gallery.Model.Store;
import com.emt.gallery.Repository.PersonRepository;
import com.emt.gallery.Repository.PictureRepository;
import com.emt.gallery.Repository.StoreRepository;
import org.apache.tomcat.util.http.fileupload.FileUploadException;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class PictureService {

    private final PictureRepository pictureRepository;
    private final PersonRepository personRepository;
    private final StoreRepository storeRepository;


    public PictureService(PictureRepository pictureRepository, PersonRepository personRepository, StoreRepository storeRepository) {

        this.pictureRepository = pictureRepository;
        this.personRepository = personRepository;
        this.storeRepository = storeRepository;
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

    public Picture storePicture(MultipartFile file, PictureDto pictureDto) throws FileUploadException {
        // Normalize file name
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());

        try {
            // Check if the file's name contains invalid characters
            if(fileName.contains("..")) {
                throw new FileUploadException("Sorry! Filename contains invalid path sequence " + fileName);
            }

            Picture picture = new Picture(fileName, file.getContentType(), file.getBytes(), pictureDto.getDescription(), pictureDto.getQuantity(), pictureDto.getPrice(), personRepository.findByName(pictureDto.getAuthor()));

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

    public PictureDto getPictureDto(Picture picture) {
        PictureDto pictureDto = new PictureDto();

        pictureDto.setId(picture.getId());
        pictureDto.setAuthor(picture.getAuthor().getName());
        pictureDto.setDescription(picture.getDescription());
        pictureDto.setPrice(picture.getPrice());
        pictureDto.setQuantity(picture.getQuantity());
        pictureDto.setName(picture.getName());

        return pictureDto;
    }
}
