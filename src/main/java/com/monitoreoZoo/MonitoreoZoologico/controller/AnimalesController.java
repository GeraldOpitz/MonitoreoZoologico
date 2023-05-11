package com.monitoreoZoo.MonitoreoZoologico.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.monitoreoZoo.MonitoreoZoologico.documentos.Animales;
import com.monitoreoZoo.MonitoreoZoologico.repository.AnimalRepository;

@RestController
@RequestMapping("/api/animales")
@CrossOrigin(origins = "http://localhost:3000")
public class AnimalesController {

    @Autowired
    private AnimalRepository animalRepo;

    @GetMapping
    public ResponseEntity<?> getAllAnimals() {
        try {
            List<Animales> animals = animalRepo.findAll();
            return new ResponseEntity<List<Animales>>(animals, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<String>(e.getCause().toString(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getAnimalById(@PathVariable("id") Integer id) {
        try {
            Optional<Animales> animal = animalRepo.findById(id);
            if (animal.isPresent()) {
                return new ResponseEntity<Animales>(animal.get(), HttpStatus.OK);
            } else {
                return new ResponseEntity<String>("Animal no encontrado", HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<String>(e.getCause().toString(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping
    public ResponseEntity<Animales> saveAnimal(@RequestBody Animales animal) {
        try {
            Animales animalsave = animalRepo.save(animal);
            return new ResponseEntity<>(animalsave, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateAnimal(@PathVariable("id") Integer id, @RequestBody Animales animal) {
        try {
            Optional<Animales> animalOpt = animalRepo.findById(id);
            if (animalOpt.isPresent()) {
                Animales animalToUpdate = animalOpt.get();
				animalToUpdate.setTipoAnimal(animal.getTipoAnimal());
                animalToUpdate.setEspecie(animal.getEspecie());
				animalToUpdate.setNombre(animal.getNombre());
                animalToUpdate.setEdadAnios(animal.getEdadAnios());
				animalToUpdate.setSexo(animal.getSexo());
				animalToUpdate.setSalud(animal.getSalud());
                animalRepo.save(animalToUpdate);
                return new ResponseEntity<Animales>(animalToUpdate, HttpStatus.OK);
            } else {
                return new ResponseEntity<String>("Animal no encontrado", HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<String>(e.getCause().toString(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAnimal(@PathVariable Integer id) {
        try {    
            animalRepo.deleteById(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    
}



































