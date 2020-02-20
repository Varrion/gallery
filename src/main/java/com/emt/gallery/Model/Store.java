package com.emt.gallery.Model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "store")
public class Store {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY )
    private Integer id;

    @OneToOne
    private Person person;

    @OneToOne
    private Picture picture;

    @Column(columnDefinition = "integer default 0")
    private int numberOfPictures;
}
