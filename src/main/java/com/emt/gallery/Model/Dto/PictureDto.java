package com.emt.gallery.Model.Dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PictureDto {
    private Integer id;

    private String description;

    private Integer quantity;

    private Integer price;

    private String author;

    private String name;
}
