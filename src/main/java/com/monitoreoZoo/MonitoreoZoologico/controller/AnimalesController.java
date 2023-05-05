package com.monitoreoZoo.MonitoreoZoologico.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
@RequestMapping("/Animales")
public class AnimalesController {

	@Autowired
	private AnimalRepository animalRepo;

	@PostMapping
	public ResponseEntity<?> saveAnimal(@RequestBody Animales animal) {
		try {
			Animales animalsave = animalRepo.save(animal);
			return new ResponseEntity<Animales>(animalsave,HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<String>(e.getCause().toString(),
					HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping
	public ResponseEntity<?> findAllAnimales() {
		try {
			List<Animales> animales = animalRepo.findAll();
			return new ResponseEntity<List<Animales>>(animales,HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>(e.getCause().toString(),
					HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@PutMapping
	public ResponseEntity<?> updateAnimal(@RequestBody Animales animal) {
		try {
			Animales animalsave = animalRepo.save(animal);
			return new ResponseEntity<Animales>(animalsave,HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>(e.getCause().toString(),
					HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<?> deleteAnimal(@PathVariable("id") Integer id) {
		try {	
			animalRepo.deleteById(id);
			return new ResponseEntity<String>("Animal eliminado",HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>(e.getCause().toString(),
					HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
}


































