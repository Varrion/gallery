package com.emt.gallery.Model.Dto;

import com.emt.gallery.Model.Person;
import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotEmpty;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PictureDto {

    private String description;

    private Integer quantity;

    private Integer price;

    private String author;
}
