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
    private String description;

    @ManyToOne
    private Person author;

    @Column
    private Integer quantity;

    @Column
    private Integer price;

    @Lob
    private byte[] data;

    @Column
    private String imageType;

    public Picture(String name, String imageType, byte[] data) {
        this.name = name;
        this.imageType = imageType;
        this.data = data;
    }
}
