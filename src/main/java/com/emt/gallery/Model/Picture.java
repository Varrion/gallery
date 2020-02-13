package com.emt.gallery.Model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "picture")
public class Picture {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "name")
    private String name;

    @Column
    private String imageType;

    @Lob
    private byte[] data;


    @Column
    private String description;

    @ManyToOne
    private Person author;

    @Column
    private Integer quantity;

    @Column
    private Integer price;

    public Picture(String name, String imageType, byte[] data, String description) {
        this.name = name;
        this.imageType = imageType;
        this.data = data;
        this.description = description;
    }

    public Picture(String fileName, String contentType, byte[] bytes, String description, Integer quantity, Integer price, Person author) {
        this.name = fileName;
        this.imageType = contentType;
        this.data = bytes;
        this.description = description;
        this.author = author;
        this.quantity = quantity;
        this.price = price;
    }
}
